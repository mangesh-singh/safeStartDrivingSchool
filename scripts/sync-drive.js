import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRIVE_FOLDER_ID = '1wXAhtg0AeOYIuvpt0_Leb7Wt618H_OC5';
const PUBLIC_IMG_DIR = path.join(projectRoot, 'public', 'images');
const GALLERY_FILE = path.join(projectRoot, 'src', 'data', 'gallery.ts');

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

console.log('🚀 Syncing Google Drive media from folder:', DRIVE_FOLDER_ID);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function runSync() {
  try {
    const folderUrl = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;
    const html = await fetchUrl(folderUrl);

    // Extract file IDs from public drive page
    const fileMatches = [...html.matchAll(/\/file\/d\/([a-zA-Z0-9_-]+)/g)];
    const fileIds = [...new Set(fileMatches.map(m => m[1]))];

    console.log(`🔍 Found ${fileIds.length} media item(s) in Google Drive.`);

    const syncedItems = [];
    let count = 1;

    for (const id of fileIds) {
      const filename = `drive_photo_${id.substring(0, 8)}.jpg`;
      const localPath = path.join(PUBLIC_IMG_DIR, filename);
      const webPath = `/images/${filename}`;

      if (!fs.existsSync(localPath)) {
        console.log(`⬇️ Downloading new file: ${filename}...`);
        const downloadUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
        try {
          await downloadFile(downloadUrl, localPath);
        } catch (e) {
          console.warn(`⚠️ Warning downloading file ${id}:`, e.message);
        }
      }

      syncedItems.push({
        id: `g_drive_${count}`,
        title: `Safe Start Practice Photo ${count}`,
        category: count % 2 === 0 ? "Training" : "Cars",
        imageUrl: webPath,
        caption: `Live practical driving training session in Rudrapur.`
      });

      count++;
    }

    if (syncedItems.length > 0) {
      const updatedGalleryContent = `export interface GalleryItem {
  id: string;
  title: string;
  category: "Training" | "Cars" | "Students" | "Sessions";
  imageUrl: string;
  caption: string;
}

export const galleryData: GalleryItem[] = ${JSON.stringify(syncedItems, null, 2)};
`;
      fs.writeFileSync(GALLERY_FILE, updatedGalleryContent, 'utf-8');
      console.log('✅ Successfully updated src/data/gallery.ts with latest Google Drive photos!');
    } else {
      console.log('ℹ️ No new files needed syncing.');
    }

    console.log('✨ Drive sync completed successfully!');
  } catch (err) {
    console.error('❌ Error during Google Drive sync:', err.message);
  }
}

runSync();
