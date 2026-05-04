import fs from 'fs';
import path from 'path';

const baseDir = 'c:/AGSuite Website/twoweb/ZohoNetsuite/app/(zoho-pages)';
const dirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const summary = [];

for (const dir of dirs) {
    const pagePath = path.join(baseDir, dir, 'page.tsx');
    const layoutPath = path.join(baseDir, dir, 'layout.tsx');
    
    if (!fs.existsSync(pagePath)) continue;
    
    let content = fs.readFileSync(pagePath, 'utf8');
    const hasUseClient = content.includes('"use client"');
    
    // Regular expression to match the metadata block accurately
    const metadataRegex = /const PAGE_PATH = "([^"]+)";\s+const page = ZOHO_PAGES\[PAGE_PATH\];\s+export const metadata = buildMetadata\(\{[\s\S]+?\}\);/m;
    const match = content.match(metadataRegex);
    
    let pagePathValue = `/${dir}`;
    if (match) {
        pagePathValue = match[1];
        // Remove the metadata block
        content = content.replace(metadataRegex, '');
    }
    
    // Ensure "use client" is there
    if (!hasUseClient) {
        content = '"use client";\n\n' + content;
    }
    
    // Remove unused imports in page.tsx if they were only for metadata
    content = content.replace(/import { buildMetadata, ZOHO_PAGES } from "@\/app\/lib\/seo";\n?/, '');
    
    fs.writeFileSync(pagePath, content);
    
    if (!fs.existsSync(layoutPath)) {
        const layoutContent = `import type { Metadata } from "next";
import { buildMetadata, ZOHO_PAGES } from "@/app/lib/seo";

const PAGE_PATH = "${pagePathValue}";
const pageData = ZOHO_PAGES[PAGE_PATH];

export const metadata: Metadata = buildMetadata({
  ...pageData,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
        fs.writeFileSync(layoutPath, layoutContent);
        summary.push(`Fixed ${dir}`);
    } else {
        summary.push(`Updated ${dir} (layout already existed)`);
    }
}

console.log(summary.join('\n'));
