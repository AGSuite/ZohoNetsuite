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
      let replacedHeight = false;
      let replacedImage = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('id="what-is')) {
          inWhatIs = true;
        }
        
        if (inWhatIs) {
            if (!replacedHeight && lines[i].includes('style={{ minHeight: 480 }}')) {
              lines[i] = lines[i].replace('480', '340');
              replacedHeight = true;
            }
            
            if (!replacedImage && lines[i].includes('className="w-full h-auto rounded-2xl object-contain border-4')) {
                let colorMatch = lines[i].match(/border-([a-z]+)-100/);
                let color = colorMatch ? colorMatch[1] : 'indigo';
                
                lines[i] = lines[i].replace(`rounded-2xl object-contain border-4 border-${color}-100 shadow-2xl shadow-${color}-900/10`, 'object-contain');
                
                for (let j = i; j > i - 10; j--) {
                    if (lines[j] && lines[j].includes('<Image')) {
                        lines.splice(j, 0, `                <div className="relative w-[85%] mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-${color}-900/10 border-4 border-${color}-100">`);
                        i++; 
                        break;
                    }
                }
                
                for (let j = i; j < i + 5; j++) {
                    if (lines[j] && lines[j].includes('/>')) {
                        lines.splice(j + 1, 0, `                </div>`);
                        i++; 
                        break;
                    }
                }
                
                for (let j = i - 10; j < i; j++) {
                    if (lines[j] && lines[j].includes('p-4')) {
                        lines[j] = lines[j].replace('p-4', 'p-6');
                        break;
                    }
                }
                
                replacedImage = true;
            }
            
            if (lines[i].includes('<div className="space-y-4">')) {
                if (lines[i+1] && lines[i+1].includes('<p')) {
                    lines[i] = lines[i].replace('space-y-4', 'space-y-2');
                }
            }
            
            if (lines[i].includes('className="pt-4"')) {
                inWhatIs = false; 
            }
        }
      }
      
      if (replacedHeight || replacedImage) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDirectory(dir);
