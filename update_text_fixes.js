const fs = require('fs');
const path = require('path');

// Update ZohoSolutionTemplate
const zohoPath = path.join(__dirname, 'app', 'zoho', 'components', 'solutions', 'ZohoSolutionTemplate.tsx');
if (fs.existsSync(zohoPath)) {
  let content = fs.readFileSync(zohoPath, 'utf8');
  
  content = content.replace(/className="text-base text-gray-600 leading-relaxed line-clamp-3"/g, 'className="text-base text-gray-600 leading-relaxed"');
  content = content.replace(/className="text-base text-gray-500 leading-relaxed line-clamp-3"/g, 'className="text-base text-gray-500 leading-relaxed"');
  
  fs.writeFileSync(zohoPath, content, 'utf8');
  console.log("Updated ZohoSolutionTemplate.tsx");
}

// Update NetSuite pages
const nsDir = path.join(__dirname, 'app', '(netsuite-solutions)');
const dirs = fs.readdirSync(nsDir, { withFileTypes: true }).filter(d => d.isDirectory());

for (const d of dirs) {
  const filePath = path.join(nsDir, d.name, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove line-clamp-3
  content = content.replace(/className="text-base text-gray-600 leading-relaxed line-clamp-3"/g, 'className="text-base text-gray-600 leading-relaxed"');
  content = content.replace(/className="text-base text-gray-500 leading-relaxed line-clamp-3"/g, 'className="text-base text-gray-500 leading-relaxed"');

  // 2. Remove strong and b tags from the what-is section or entirely. 
  // We can just remove <strong> and </strong> and <b> and </b> globally from the file to be safe,
  // or specifically from the what-is section. Let's do it globally for the descriptions if they exist, 
  // but be careful not to break other structured components.
  // Actually, the user said "in all solution pages in what is section content the description information ... their should not be the any highlited text".
  // So let's target the what-is section.
  
  const whatIsRegex = /(<section id="what-is"[\s\S]*?<\/section>)/g;
  
  content = content.replace(whatIsRegex, (match) => {
    let replaced = match.replace(/<\/?strong>/gi, '');
    replaced = replaced.replace(/<\/?b>/gi, '');
    return replaced;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated NetSuite page: ${d.name}`);
}

console.log("Done updating descriptions.");
