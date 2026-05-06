
import fs from 'fs';
import path from 'path';

const directories = [
  'app/netsuite/industries',
  'app/zoho/industries'
];

const publicDir = 'public';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imageMatches = content.match(/"\/images\/[^"]+"/g);
  if (!imageMatches) return;

  imageMatches.forEach(match => {
    const imgPath = match.replace(/"/g, '');
    const fullPath = path.join(publicDir, imgPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Missing image: ${imgPath} referenced in ${filePath}`);
    }
  });
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
