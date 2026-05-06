const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'app', 'netsuite', 'industries', '_template', 'IndustryTemplate.tsx'),
  path.join(__dirname, 'app', 'zoho', 'components', 'industries', 'ZohoIndustryTemplate.tsx')
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    continue;
  }

  let content = fs.readFileSync(file, 'utf8');

  // 1. Update Navbar Links Order
  // Currently:
  // { label: "Features", href: "#features" },
  // { label: "Benefits", href: "#benefits" },
  // { label: "Challenges", href: "#challenges" },
  // Change to:
  // { label: "Challenges", href: "#challenges" },
  // { label: "Features", href: "#features" },
  // { label: "Benefits", href: "#benefits" },

  content = content.replace(
    /\{\s*label:\s*"Features"[^}]+\},\s*\{\s*label:\s*"Benefits"[^}]+\},\s*\{\s*label:\s*"Challenges"[^}]+\},/g,
    '{ label: "Challenges", href: "#challenges" },\n              { label: "Features", href: "#features" },\n              { label: "Benefits", href: "#benefits" },'
  );

  // 2. Reorder the actual JSX sections
  // The structure is roughly:
  // {/* ══════ FEATURES ══════ */}
  // <section id="features" ...> ... </section>
  // {/* ══════ BENEFITS ... ══════ */}
  // <section id="benefits" ...> ... </section>
  // {/* ══════ CHALLENGES ... ══════ */}
  // <section id="challenges" ...> ... </section>

  // We need to match the entire challenges section and move it before features.
  
  // Regex to capture FEATURES and BENEFITS
  const featuresBenefitsRegex = /(\{\/\* ══════ FEATURES ══════ \*\/\}[\s\S]*?(?=\{\/\* ══════ CHALLENGES))/;
  
  // Regex to capture CHALLENGES
  // It starts with {/* ══════ CHALLENGES and ends before {/* ══════ SERVICES
  const challengesRegex = /(\{\/\* ══════ CHALLENGES[\s\S]*?(?=\{\/\* ══════ SERVICES))/;

  const fbMatch = content.match(featuresBenefitsRegex);
  const chMatch = content.match(challengesRegex);

  if (fbMatch && chMatch) {
    const fbContent = fbMatch[1];
    const chContent = chMatch[1];

    // Remove them from their original positions
    content = content.replace(fbContent, '___FB_PLACEHOLDER___');
    content = content.replace(chContent, '');

    // Now replace the placeholder with CHALLENGES then FEATURES/BENEFITS
    content = content.replace('___FB_PLACEHOLDER___', chContent + '\n      ' + fbContent);
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Successfully updated ${path.basename(file)}`);
  } else {
    console.log(`Regex match failed for ${path.basename(file)}`);
  }
}
