const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

// Index all files in public/
function getDiskIndex(dir, base = '') {
  let map = {};
  if (!fs.existsSync(dir)) return map;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(map, getDiskIndex(fullPath, relPath));
    } else {
      map[relPath.toLowerCase()] = relPath;
    }
  }
  return map;
}

const diskIndex = getDiskIndex(publicDir);
console.log(`Indexed ${Object.keys(diskIndex).length} files in public directory.`);

// Find all Zoho product pages
function findZohoProductPages(dir) {
  let pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        pages = pages.concat(findZohoProductPages(fullPath));
      }
    } else if (entry.name === 'page.tsx' || entry.name === 'page.jsx') {
      const rel = fullPath.replace(appDir, 'app').toLowerCase();
      if (rel.includes('zoho')) {
        pages.push(fullPath);
      }
    }
  }
  return pages;
}

const zohoPages = findZohoProductPages(appDir);
console.log(`Found ${zohoPages.length} Zoho pages across app/`);

const pageReports = [];

zohoPages.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(path.join(__dirname, '..'), '');
  
  const imgRegex = /["'`]((\/?(?:images|videos|icons|logos|assets)[^"'`]+))["'`]/g;
  let match;
  const issues = [];
  const valid = [];
  
  while ((match = imgRegex.exec(content)) !== null) {
    const raw = match[1];
    let decoded = raw;
    try { decoded = decodeURIComponent(raw); } catch(e){}
    let clean = decoded;
    if (clean.startsWith('/')) clean = clean.slice(1);
    clean = clean.split('?')[0].split('#')[0];
    
    const actual = diskIndex[clean.toLowerCase()];
    if (!actual) {
      issues.push({ type: 'MISSING', raw, clean });
    } else {
      let subIssues = [];
      if (actual !== clean) {
        subIssues.push(`Casing mismatch (disk: "/${actual}")`);
      }
      if (raw.includes(' ')) {
        subIssues.push('Contains spaces');
      }
      if (subIssues.length > 0) {
        issues.push({ type: 'RISK', raw, actual: `/${actual}`, details: subIssues.join(', ') });
      } else {
        valid.push(raw);
      }
    }
  }
  
  pageReports.push({
    file: relPath,
    totalImages: valid.length + issues.length,
    validCount: valid.length,
    issues
  });
});

console.log('\n================ AUDIT SUMMARY FOR ALL ZOHO PAGES ================');
const pagesWithIssues = pageReports.filter(p => p.issues.length > 0);
console.log(`Total Zoho pages audited: ${pageReports.length}`);
console.log(`Pages with issues/risks: ${pagesWithIssues.length}`);

if (pagesWithIssues.length > 0) {
  console.log('\n--- PAGES WITH ISSUES ---');
  console.log(JSON.stringify(pagesWithIssues, null, 2));
} else {
  console.log('\n✅ ALL ZOHO PRODUCT PAGES ARE 100% CLEAN AND READY FOR VERCEL!');
}
