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
      
      // We look for the image container in the What Is section
      // Usually it's: className="relative flex items-center justify-center rounded-3xl overflow-hidden bg-gray-50/50 -mt-4 lg:-mt-6"
      // Followed by: <div className="relative w-full h-full flex items-center justify-center p-4">
      // Wait, there might be multiple. Let's strictly replace the ONE that is inside the "what-is" section.
      
      // Let's do a regex to replace items-center justify-center p-4 with items-start justify-center p-4 pt-8 pb-12
      // but only the one wrapping the Dashboard image in the first grid.
      
      // Since it's easier, let's just find the first instance of <div className="relative w-full h-full flex items-center justify-center p-4">
      // right after <section id="what-is or similar.
      
      const lines = content.split('\n');
      let inWhatIs = false;
      let replaced = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('id="what-is')) {
          inWhatIs = true;
        }
        
        if (inWhatIs && !replaced && lines[i].includes('className="relative w-full h-full flex items-center justify-center p-4"')) {
          lines[i] = lines[i].replace(
            'className="relative w-full h-full flex items-center justify-center p-4"', 
            'className="relative w-full h-full flex items-center justify-center p-4 pb-20 pt-2"'
          );
          replaced = true;
        }
        
        // Also if we find it with single quotes
        if (inWhatIs && !replaced && lines[i].includes("className='relative w-full h-full flex items-center justify-center p-4'")) {
            lines[i] = lines[i].replace(
              "className='relative w-full h-full flex items-center justify-center p-4'", 
              "className='relative w-full h-full flex items-center justify-center p-4 pb-20 pt-2'"
            );
            replaced = true;
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
