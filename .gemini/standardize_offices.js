const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

// 1. Copy offices images to offices
const srcDir = path.join(publicDir, 'images', 'offices images');
const destDir = path.join(publicDir, 'images', 'offices');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  files.forEach(f => {
    const src = path.join(srcDir, f);
    if (!fs.statSync(src).isDirectory()) {
      fs.copyFileSync(src, path.join(destDir, f));
      console.log(`Copied ${f} -> images/offices/`);
    }
  });
}

// 2. Replace "/images/offices images/" with "/images/offices/" in all app files
function replaceInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        replaceInDir(fullPath);
      }
    } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/images/offices images/')) {
        content = content.replace(/\/images\/offices images\//g, '/images/offices/');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated office image paths in: ${fullPath}`);
      }
    }
  }
}

replaceInDir(appDir);
