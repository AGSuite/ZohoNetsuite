const fs = require('fs');
const path = require('path');

const dir = 'c:\\AGSuite Website\\twoweb\\ZohoNetsuite\\app\\(netsuite-solutions)';

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let lines = content.split('\n');
      let inWhatIs = false;
      let replacedContainer = false;
      let replacedPadding = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('id="what-is')) {
          inWhatIs = true;
        }
        
        if (inWhatIs) {
            // Revert bg-gray-50/50 to bg-white
            if (!replacedContainer && lines[i].includes('bg-gray-50/50')) {
              lines[i] = lines[i].replace('bg-gray-50/50', 'bg-white');
              replacedContainer = true;
            }
            
            // Revert padding
            if (!replacedPadding && lines[i].includes('p-4 pb-20 pt-2')) {
              lines[i] = lines[i].replace('p-4 pb-20 pt-2', 'p-4');
              replacedPadding = true;
            }
            
            if (!replacedPadding && lines[i].includes('p-4 pb-16')) { // Just in case
                lines[i] = lines[i].replace('p-4 pb-16', 'p-4');
                replacedPadding = true;
            }
        }
      }
      
      if (replacedContainer || replacedPadding) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDirectory(dir);
