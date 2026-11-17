/**
 * Losslessly recompress large PNG files in public/.
 *
 * The original is replaced only when the recompressed image is smaller and
 * its decoded RGBA pixels and dimensions exactly match the source image.
 * Usage: node scripts/optimize-png-lossless.mjs [minimum-size-kb]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const publicDir = path.resolve("public");
const minimumBytes = Number(process.argv[2] || 500) * 1024;
const concurrency = 4;

async function collectPngFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectPngFiles(absolutePath);
    if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".png") {
      const stats = await fs.stat(absolutePath);
      return stats.size >= minimumBytes ? [absolutePath] : [];
    }
    return [];
  }));
  return nested.flat();
}

async function decodedPixels(filePath) {
  return sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
}

async function optimize(filePath) {
  const temporaryPath = `${filePath}.${randomUUID()}.tmp.png`;
  const originalSize = (await fs.stat(filePath)).size;

  try {
    await sharp(filePath)
      .keepMetadata()
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
      .toFile(temporaryPath);

    const optimizedSize = (await fs.stat(temporaryPath)).size;
    if (optimizedSize >= originalSize) {
      return { status: "unchanged", originalSize, optimizedSize: originalSize };
    }

    const [original, optimized] = await Promise.all([
      decodedPixels(filePath),
      decodedPixels(temporaryPath),
    ]);
    const pixelsMatch = original.info.width === optimized.info.width
      && original.info.height === optimized.info.height
      && original.data.equals(optimized.data);

    if (!pixelsMatch) {
      return { status: "pixel-mismatch", originalSize, optimizedSize: originalSize };
    }

    await fs.copyFile(temporaryPath, filePath);
    return { status: "optimized", originalSize, optimizedSize };
  } finally {
    await fs.rm(temporaryPath, { force: true });
  }
}

const files = await collectPngFiles(publicDir);
let cursor = 0;
const results = [];

async function worker() {
  while (cursor < files.length) {
    const index = cursor++;
    const filePath = files[index];
    const result = await optimize(filePath);
    results.push(result);
    if (result.status === "optimized") {
      const savedKb = Math.round((result.originalSize - result.optimizedSize) / 1024);
      console.log(`optimized ${path.relative(publicDir, filePath)} (-${savedKb} KB)`);
    } else if (result.status === "pixel-mismatch") {
      console.warn(`skipped pixel mismatch: ${path.relative(publicDir, filePath)}`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

const optimized = results.filter((result) => result.status === "optimized");
const savedBytes = optimized.reduce(
  (total, result) => total + result.originalSize - result.optimizedSize,
  0,
);
console.log(`Checked ${files.length} files; optimized ${optimized.length}; saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB.`);
