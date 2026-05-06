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
      let inRightSide = false;
      let pCount = 0;
      let replacedRightSideContainer = false;
      let replacedButtonContainer = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('id="what-is')) {
          inWhatIs = true;
        }
        
        if (inWhatIs) {
            // Find the right side container
            if (!replacedRightSideContainer && lines[i].includes('className="flex flex-col justify-center space-y-6 py-6"')) {
              lines[i] = lines[i].replace('className="flex flex-col justify-center space-y-6 py-6"', 'className="flex flex-col justify-between py-6 h-full"');
              inRightSide = true;
              replacedRightSideContainer = true;
            }
            
            if (inRightSide) {
                // Change paragraph container space-y-4 to space-y-4 my-auto
                // We know it's the one before pt-4
                // A better way is just to find the paragraphs themselves and add line-clamp
                if (lines[i].includes('<p className="text-lg text-gray-600 leading-relaxed">')) {
                    if (pCount === 0) {
                        lines[i] = lines[i].replace('<p className="text-lg text-gray-600 leading-relaxed">', '<p className="text-lg text-gray-600 leading-relaxed line-clamp-4">');
                    } else if (pCount === 1) {
                        lines[i] = lines[i].replace('<p className="text-lg text-gray-600 leading-relaxed">', '<p className="text-lg text-gray-600 leading-relaxed line-clamp-3">');
                    }
                    pCount++;
                }
                
                // Add mt-auto to button container
                if (!replacedButtonContainer && lines[i].includes('className="pt-4"')) {
                    lines[i] = lines[i].replace('className="pt-4"', 'className="pt-4 mt-auto"');
                    // We also want to add my-auto to the div wrapping the paragraphs. That's the div immediately before pt-4 that has space-y-4.
                    // We can go backwards to find the last space-y-4
                    for (let j = i - 1; j > i - 10; j--) {
                        if (lines[j] && lines[j].includes('className="space-y-4"')) {
                            lines[j] = lines[j].replace('className="space-y-4"', 'className="space-y-4 my-auto"');
                            break;
                        }
                    }
                    replacedButtonContainer = true;
                    inWhatIs = false; // Done with this section
                }
            }
        }
      }
      
      if (replacedRightSideContainer) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDirectory(dir);
