
import fs from 'fs';
import path from 'path';

const directories = [
  'app/netsuite/industries',
  'app/zoho/industries'
];

const results = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const imageMatches = content.match(/"\/images\/[^"]+"/g);
  let repeats = [];
  if (imageMatches) {
    const images = imageMatches.map(img => img.replace(/"/g, ''));
    const counts = {};
    images.forEach(img => {counts[img] = (counts[img] || 0) + 1;});
    repeats = Object.keys(counts).filter(img => counts[img] > 1);
  }

  const benefitsMatch = content.match(/benefits:\s*\[([\s\S]*?)\]\s*,\s*features/);
  const benefitCount = benefitsMatch ? (benefitsMatch[1].match(/title:\s*"/g) || []).length : 0;

  const featuresMatch = content.match(/features:\s*\[([\s\S]*?)\]\s*,\s*challenges/);
  const featureCount = featuresMatch ? (featuresMatch[1].match(/title:\s*"/g) || []).length : 0;

  results.push({
    file: filePath,
    benefitCount,
    featureCount,
    repeats
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

fs.writeFileSync('scratch/audit_results.json', JSON.stringify(results, null, 2));
console.log('Audit complete. Results in scratch/audit_results.json');
