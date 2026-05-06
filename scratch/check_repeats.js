
import fs from 'fs';
import path from 'path';

const directories = [
  'app/netsuite/industries',
  'app/zoho/industries'
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imageMatches = content.match(/"\/images\/[^"]+"/g);
  if (!imageMatches) return;

  const images = imageMatches.map(img => img.replace(/"/g, ''));
  const uniqueImages = new Set(images);

  if (images.length !== uniqueImages.size) {
    const counts = {};
    images.forEach(img => {
      counts[img] = (counts[img] || 0) + 1;
    });
    const repeats = Object.keys(counts).filter(img => counts[img] > 1);
    console.log(`Repeats in ${filePath}:`, repeats);
  }
}

directories.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file, 'page.tsx');
    if (fs.existsSync(fullPath)) {
      checkFile(fullPath);
    }
  });
});
