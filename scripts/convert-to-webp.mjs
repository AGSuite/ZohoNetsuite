/**
 * convert-to-webp.mjs
 * Converts all slider + Next AI page images to WebP with quality 85
 * Run: node scripts/convert-to-webp.mjs
 */

import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const images = [
  // NSHeroSlider images (non-webp)
  "images/Dashboard/indian localization 2 dashboard.jpg",
  "images/Dashboard/mca_compliance_illustration.png",
  "images/Dashboard/planing and budgeting 2 dashboard.jpg",
  "images/Dashboard/netsuite Ai dashboard enhanced-Photoroom.png",
  "images/lap/netsuite_cfo_consolidation_dashboard.png",
  "images/lap/happy_cfo_netsuite_office.png",
  "images/lap/netsuite_cfo_predictive_cashflow.png",
  "images/lap/netsuitelap2.png",
  // Next AI page images (non-webp)
  "images/lap/netsuite_ai_hero.png",
  "images/lap/netsuite_cfo_ai_dashboard.png",
];

async function convert() {
  let converted = 0;
  let skipped = 0;

  for (const relPath of images) {
    const inputPath = path.join(publicDir, relPath);
    const ext = path.extname(relPath);
    const outputRelPath = relPath.replace(ext, ".webp");
    const outputPath = path.join(publicDir, outputRelPath);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠  NOT FOUND: ${relPath}`);
      skipped++;
      continue;
    }

    if (fs.existsSync(outputPath)) {
      console.log(`⏭  SKIP (already exists): ${outputRelPath}`);
      skipped++;
      continue;
    }

    try {
      const inStat = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(outputPath);
      const outStat = fs.statSync(outputPath);
      const reduction = (((inStat.size - outStat.size) / inStat.size) * 100).toFixed(1);
      console.log(`✅ ${path.basename(relPath)} → ${path.basename(outputRelPath)}  (${(inStat.size/1024).toFixed(0)}KB → ${(outStat.size/1024).toFixed(0)}KB, -${reduction}%)`);
      converted++;
    } catch (err) {
      console.error(`❌ FAILED: ${relPath}`, err.message);
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
}

convert();
