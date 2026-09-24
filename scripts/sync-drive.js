import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DRIVE_FOLDER_IDS = [
  '14cg4YlmjARIgz7IrkV9hkweoSPYEN-hQ',
  '1wXAhtg0AeOYIuvpt0_Leb7Wt618H_OC5'
];

const PUBLIC_IMG_DIR = path.join(projectRoot, 'public', 'images');
const GALLERY_FILE = path.join(projectRoot, 'src', 'data', 'gallery.ts');

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

console.log('🚀 Syncing Google Drive media from folders:', DRIVE_FOLDER_IDS);

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
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function runSync() {
  try {
    const foundFileIds = new Set();

    for (const folderId of DRIVE_FOLDER_IDS) {
      try {
        const folderUrl = `https://drive.google.com/drive/folders/${folderId}`;
        const html = await fetchUrl(folderUrl);

        // Match multiple link formats & JSON quoted string patterns in public Drive HTML
        const fileMatches = [
          ...html.matchAll(/\/file\/d\/([a-zA-Z0-9_-]{25,50})/g),
          ...html.matchAll(/id=([a-zA-Z0-9_-]{25,50})/g),
          ...html.matchAll(/[\"'](1[a-zA-Z0-9_-]{27,42})[\"']/g)
        ];

        fileMatches.forEach(m => {
          const id = m[1];
          if (id && id.length >= 28 && id !== folderId && !DRIVE_FOLDER_IDS.includes(id) && !id.includes('http')) {
            foundFileIds.add(id);
          }
        });
      } catch (e) {
        console.warn(`⚠️ Warning reading folder ${folderId}:`, e.message);
      }
    }

    const fileIds = Array.from(foundFileIds);
    console.log(`🔍 Found ${fileIds.length} candidate item(s) across Google Drive folders.`);

    const currentDriveFiles = new Set();
    let downloadCount = 0;

    for (const id of fileIds) {
      const filename = `drive_photo_${id.substring(0, 10)}.jpg`;
      const localPath = path.join(PUBLIC_IMG_DIR, filename);

      if (fs.existsSync(localPath)) {
        currentDriveFiles.add(filename);
      } else {
        console.log(`⬇️ Downloading new file: ${filename}...`);
        const downloadUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
        try {
          await downloadFile(downloadUrl, localPath);
          currentDriveFiles.add(filename);
          downloadCount++;
        } catch (e) {
          console.warn(`⚠️ Skipped item ${id} (${e.message})`);
        }
      }
    }

    // Prune deleted drive photos locally
    const existingFiles = fs.readdirSync(PUBLIC_IMG_DIR);
    let prunedCount = 0;
    for (const file of existingFiles) {
      if (file.startsWith('drive_photo_') && !currentDriveFiles.has(file)) {
        console.log(`🗑️ Pruning deleted photo: ${file}`);
        fs.unlinkSync(path.join(PUBLIC_IMG_DIR, file));
        prunedCount++;
      }
    }

    // Update src/data/gallery.ts dynamically
    updateGalleryData(Array.from(currentDriveFiles));

    if (downloadCount > 0) {
      console.log(`✅ Downloaded ${downloadCount} new file(s) to public/images/.`);
    } else {
      console.log('ℹ️ All Drive files are up-to-date locally in public/images/.');
    }
    if (prunedCount > 0) {
      console.log(`🧹 Pruned ${prunedCount} deleted item(s) from local gallery.`);
    }

    console.log('✨ Drive sync completed successfully! gallery.ts updated.');
  } catch (err) {
    console.error('❌ Error during Drive sync:', err.message);
  }
}

function updateGalleryData(driveFilenames) {
  const baseItems = [
    {
      id: "g1",
      title: "Safe Start Training Fleet & Vehicle",
      category: "Cars",
      imageUrl: "/images/photo1.jpg",
      caption: "Dual-control training vehicle ready for practice sessions in Rudrapur."
    },
    {
      id: "g2",
      title: "On-Road Student Practical Lesson",
      category: "Training",
      imageUrl: "/images/photo2.jpg",
      caption: "Real-world road practice with our certified instructor."
    }
  ];

  const driveItems = driveFilenames.map((filename, idx) => ({
    id: `drive_${idx + 1}`,
    title: `Safe Start Driving Practical Session ${idx + 1}`,
    category: (idx % 2 === 0 ? "Training" : "Students"),
    imageUrl: `/images/${filename}`,
    caption: "Student practical driving session at Safe Start Driving School, Rudrapur."
  }));

  const allItems = [...baseItems, ...driveItems];

  const fileContent = `export interface GalleryItem {
  id: string;
  title: string;
  category: "Training" | "Cars" | "Students" | "Sessions";
  imageUrl: string;
  caption: string;
}

export const galleryData: GalleryItem[] = ${JSON.stringify(allItems, null, 2)};
`;

  fs.writeFileSync(GALLERY_FILE, fileContent, 'utf-8');
}

runSync();
