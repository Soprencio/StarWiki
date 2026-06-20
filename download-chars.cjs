const fs = require('fs');
const path = require('path');

// GitHub API to list files in the folder
const API_URL = 'https://api.github.com/repos/vieraboschkova/swapi-gallery/contents/static/assets/img/people?ref=main';

// Destination folder (coincide con la ruta que ya configuraste en helpers.js)
const DEST_DIR = path.resolve(__dirname, 'src', 'assets', 'imagenes', 'personajes');

async function main() {
  console.log('🔍 Fetching file list from GitHub...');
  const resp = await fetch(API_URL, {
    headers: { 'Accept': 'application/vnd.github.v3+json' }
  });
  if (!resp.ok) {
    console.error(`❌ Failed to fetch file list: ${resp.status} ${resp.statusText}`);
    process.exit(1);
  }
  const files = await resp.json();
  if (!Array.isArray(files)) {
    console.error('❌ Unexpected response format', files);
    process.exit(1);
  }

  // Ensure destination exists
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
    console.log(`📁 Created destination folder: ${DEST_DIR}`);
  }

  let downloaded = 0;
  for (const file of files) {
    if (file.type !== 'file' || !file.name.toLowerCase().endsWith('.jpg')) continue;
    const fileUrl = file.download_url;
    const destPath = path.join(DEST_DIR, file.name);
    console.log(`⬇️  Downloading ${file.name}...`);
    const fileResp = await fetch(fileUrl);
    if (!fileResp.ok) {
      console.warn(`⚠️  Failed to download ${file.name}: ${fileResp.status}`);
      continue;
    }
    const buffer = await fileResp.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    console.log(`✅ Saved ${file.name}`);
    downloaded++;
  }

  console.log(`🎉 Finished. Downloaded ${downloaded} JPG images to ${DEST_DIR}`);
}

main().catch(err => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});