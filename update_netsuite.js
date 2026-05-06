const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', '(netsuite-solutions)');
const dirs = fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory());

for (const d of dirs) {
  const filePath = path.join(dir, d.name, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Look for the What is section image container
  // We want to match the whole motion.div containing the image.
  // We'll use regex to find it.
  
  const regex = /(<motion\.div[^>]*className="[^"]*rounded-3xl overflow-hidden[^"]*"[^>]*>[\s\S]*?<Image[\s\S]*?\/>[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>)/g;
  
  content = content.replace(regex, (match) => {
    // Check if it's already using fill
    if (match.includes('fill') && !match.includes('width={') && match.includes('object-cover')) {
      return match;
    }

    // Extract image src and alt
    const srcMatch = match.match(/src=(["{][^"}]+["}])/);
    const altMatch = match.match(/alt=(["{][^"}]+["}])/);
    const shadowMatch = match.match(/shadow-([a-z]+)-900\/10/);
    const borderMatch = match.match(/border-4 border-([a-z]+)-100/);

    const src = srcMatch ? srcMatch[1] : '"/images/placeholder.jpg"';
    const alt = altMatch ? altMatch[1] : '"Dashboard"';
    const color = shadowMatch ? shadowMatch[1] : 'blue';

    return `<motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-${color}-900/10 border-4 border-${color}-100">
                  <Image
                    src=${src}
                    alt=${alt}
                    fill
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${d.name}/page.tsx`);
}

console.log("Done updating NetSuite pages.");
