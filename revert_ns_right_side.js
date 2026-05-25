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
      let replaced = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('id="what-is')) {
          inWhatIs = true;
        }
        
        if (inWhatIs) {
            if (lines[i].includes('className="flex flex-col justify-between py-6 h-full"')) {
              lines[i] = lines[i].replace('className="flex flex-col justify-between py-6 h-full"', 'className="flex flex-col justify-center space-y-6 py-6"');
              replaced = true;
            }
            if (lines[i].includes('className="space-y-4 my-auto"')) {
              lines[i] = lines[i].replace('className="space-y-4 my-auto"', 'className="space-y-4"');
              replaced = true;
            }
            if (lines[i].includes('className="space-y-2 my-auto"')) {
              lines[i] = lines[i].replace('className="space-y-2 my-auto"', 'className="space-y-2"');
              replaced = true;
            }
            if (lines[i].includes('className="space-y-6 my-auto"')) {
              lines[i] = lines[i].replace('className="space-y-6 my-auto"', 'className="space-y-6"');
              replaced = true;
            }
            if (lines[i].includes('className="text-lg text-gray-600 leading-relaxed line-clamp-4"')) {
              lines[i] = lines[i].replace('className="text-lg text-gray-600 leading-relaxed line-clamp-4"', 'className="text-lg text-gray-600 leading-relaxed"');
              replaced = true;
            }
            if (lines[i].includes('className="text-lg text-gray-600 leading-relaxed line-clamp-3"')) {
              lines[i] = lines[i].replace('className="text-lg text-gray-600 leading-relaxed line-clamp-3"', 'className="text-lg text-gray-600 leading-relaxed"');
              replaced = true;
            }
            if (lines[i].includes('className="text-base text-gray-600 leading-relaxed line-clamp-4"')) {
              lines[i] = lines[i].replace('className="text-base text-gray-600 leading-relaxed line-clamp-4"', 'className="text-base text-gray-600 leading-relaxed"');
              replaced = true;
            }
            if (lines[i].includes('className="text-base text-gray-600 leading-relaxed line-clamp-3"')) {
              lines[i] = lines[i].replace('className="text-base text-gray-600 leading-relaxed line-clamp-3"', 'className="text-base text-gray-600 leading-relaxed"');
              replaced = true;
            }
            if (lines[i].includes('className="pt-4 mt-auto"')) {
              lines[i] = lines[i].replace('className="pt-4 mt-auto"', 'className="pt-4"');
              replaced = true;
              inWhatIs = false;
            }
        }
      }
      
      if (replaced) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDirectory(dir);
