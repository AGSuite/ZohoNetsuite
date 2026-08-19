const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

// 1. Copy Event folders to clean names
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const ev1 = path.join(publicDir, 'images', 'Events', '5th aniversary');
const ev1Dest = path.join(publicDir, 'images', 'Events', '5th-anniversary');
if (fs.existsSync(ev1)) copyDir(ev1, ev1Dest);

const ev2 = path.join(publicDir, 'images', 'Events', 'indian taxation');
const ev2Dest = path.join(publicDir, 'images', 'Events', 'indian-taxation');
if (fs.existsSync(ev2)) copyDir(ev2, ev2Dest);

// 2. Copy Diwali collage
const diwaliSrc = path.join(publicDir, 'images', 'celebrations', 'Colourful Diwali Photo collage (1).png');
const diwaliDest = path.join(publicDir, 'images', 'celebrations', 'diwali_collage_1.png');
if (fs.existsSync(diwaliSrc)) fs.copyFileSync(diwaliSrc, diwaliDest);

// 3. Copy awards
const awSrc = path.join(publicDir, 'images', 'awards', 'Partner of the Year.png');
const awDest = path.join(publicDir, 'images', 'awards', 'Partner_of_the_Year.png');
if (fs.existsSync(awSrc)) fs.copyFileSync(awSrc, awDest);

// 4. Update references across app/
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
      let changed = false;
      
      if (content.includes('/images/Events/5th aniversary/')) {
        content = content.replace(/\/images\/Events\/5th aniversary\//g, '/images/Events/5th-anniversary/');
        changed = true;
      }
      if (content.includes('/images/Events/indian taxation/')) {
        content = content.replace(/\/images\/Events\/indian taxation\//g, '/images/Events/indian-taxation/');
        changed = true;
      }
      if (content.includes('/images/celebrations/Colourful Diwali Photo collage (1).png')) {
        content = content.replace(/\/images\/celebrations\/Colourful Diwali Photo collage \(1\)\.png/g, '/images/celebrations/diwali_collage_1.png');
        changed = true;
      }
      if (content.includes('/images/awards/Partner of the Year.png')) {
        content = content.replace(/\/images\/awards\/Partner of the Year\.png/g, '/images/awards/Partner_of_the_Year.png');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated paths in: ${fullPath}`);
      }
    }
  }
}

replaceInDir(appDir);
