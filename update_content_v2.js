const fs = require('fs');
const path = require('path');

// Update ZohoSolutionTemplate
const zohoPath = path.join(__dirname, 'app', 'zoho', 'components', 'solutions', 'ZohoSolutionTemplate.tsx');
if (fs.existsSync(zohoPath)) {
  let content = fs.readFileSync(zohoPath, 'utf8');
  
  // 1. Update Hero button to white
  content = content.replace(
    /className="group inline-flex items-center gap-3 px-7 py-3\.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white\/10 backdrop-blur-md border border-white\/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900\/20 hover:shadow-blue-600\/30 hover:scale-105"/,
    'className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"'
  );

  // 2. Shorten the description paragraphs by making them text-base and line-clamp-3 (to ensure the image fits well)
  content = content.replace(/className="text-lg text-gray-600 leading-relaxed"/g, 'className="text-base text-gray-600 leading-relaxed line-clamp-3"');
  
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

  // 1. Update Hero button to white
  // NetSuite buttons vary slightly, so we'll use a regex that catches them.
  // Example: className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white hover:text-teal-950 hover:border-white transition-all duration-300 shadow-xl shadow-teal-900/20 hover:shadow-orange-600/30 hover:scale-105"
  const btnRegex = /className="group inline-flex items-center gap-3 px-7 py-3\.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white\/10 backdrop-blur-md border border-white\/25 text-white hover:bg-[^"]+"/;
  content = content.replace(btnRegex, 'className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"');

  // 2. Shorten description paragraphs in what-is section
  // We'll replace text-lg with text-base line-clamp-3 for <p> tags in the what-is section.
  content = content.replace(/className="text-lg text-gray-600 leading-relaxed"/g, 'className="text-base text-gray-600 leading-relaxed line-clamp-3"');
  // Sometimes it might be text-gray-500
  content = content.replace(/className="text-lg text-gray-500 leading-relaxed"/g, 'className="text-base text-gray-500 leading-relaxed line-clamp-3"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated NetSuite page: ${d.name}`);
}

console.log("Done.");
