/**
 * Converts standard Google Drive sharing links into embeddable URLs for <img> and <iframe> elements.
 * 
 * Supports input formats:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=FILE_ID
 * - Plain FILE_ID
 */

export function getGoogleDriveImageUrl(urlOrId: string): string {
  if (!urlOrId) return '';
  
  // If it's a local path or external CDN image URL, return as-is
  if (!urlOrId.includes('drive.google.com')) {
    return urlOrId;
  }

  // Extract Google Drive file ID
  const fileIdMatch = urlOrId.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || urlOrId.match(/id=([a-zA-Z0-9_-]+)/);
  const fileId = fileIdMatch ? fileIdMatch[1] : urlOrId;

  // Use Google Drive official thumbnail generator endpoint (works for both images and video frames!)
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
}

export function getGoogleDriveVideoPreviewUrl(urlOrId: string): string {
  if (!urlOrId) return '';

  if (!urlOrId.includes('drive.google.com')) {
    return urlOrId;
  }

  const fileIdMatch = urlOrId.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || urlOrId.match(/id=([a-zA-Z0-9_-]+)/);
  const fileId = fileIdMatch ? fileIdMatch[1] : urlOrId;

  // Convert to iframe preview player URL
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
