const sharp = require('sharp');
const fs = require('fs');

async function createOdooOfficeWall() {
  const { data, info } = await sharp('public/images/aboutus/netsuite_partner_office_wall.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const channels = 3;
  const grid = new Float32Array(width * height * channels);
  for (let i = 0; i < width * height * channels; i++) grid[i] = data[i];

  // 1. Inpaint right side of board (minX: 615, maxX: 980, minY: 175, maxY: 380)
  const bMinX = 615, bMaxX = 980, bMinY = 175, bMaxY = 380;
  for (let y = bMinY; y <= bMaxY; y++) {
    const v = (y - bMinY) / (bMaxY - bMinY);
    for (let x = bMinX; x <= bMaxX; x++) {
      const u = (x - bMinX) / (bMaxX - bMinX);
      const topIdx = (bMinY - 1) * width + x;
      const botIdx = (bMaxY + 1) * width + x;
      const leftIdx = y * width + (bMinX - 1);
      const rightIdx = y * width + (bMaxX + 1);
      const p = y * width + x;
      for (let c = 0; c < 3; c++) {
        const vert = data[topIdx * 3 + c] * (1 - v) + data[botIdx * 3 + c] * v;
        const horiz = data[leftIdx * 3 + c] * (1 - u) + data[rightIdx * 3 + c] * u;
        grid[p * 3 + c] = 0.5 * (vert + horiz);
      }
    }
  }

  // 2. Inpaint pot (pMinX: 120, pMaxX: 265, pMinY: 448, pMaxY: 535)
  const pMinX = 120, pMaxX = 265, pMinY = 448, pMaxY = 535;
  for (let y = pMinY; y <= pMaxY; y++) {
    const v = (y - pMinY) / (pMaxY - pMinY);
    for (let x = pMinX; x <= pMaxX; x++) {
      const u = (x - pMinX) / (pMaxX - pMinX);
      const topIdx = (pMinY - 1) * width + x;
      const botIdx = (pMaxY + 1) * width + x;
      const leftIdx = y * width + (pMinX - 1);
      const rightIdx = y * width + (pMaxX + 1);
      const p = y * width + x;
      for (let c = 0; c < 3; c++) {
        const vert = data[topIdx * 3 + c] * (1 - v) + data[botIdx * 3 + c] * v;
        const horiz = data[leftIdx * 3 + c] * (1 - u) + data[rightIdx * 3 + c] * u;
        grid[p * 3 + c] = 0.5 * (vert + horiz);
      }
    }
  }

  // Relaxation for both regions
  for (let iter = 0; iter < 300; iter++) {
    for (let y = bMinY; y <= bMaxY; y++) {
      for (let x = bMinX; x <= bMaxX; x++) {
        const idx = (y * width + x) * channels;
        const up = ((y - 1) * width + x) * channels;
        const down = ((y + 1) * width + x) * channels;
        const left = (y * width + (x - 1)) * channels;
        const right = (y * width + (x + 1)) * channels;
        for (let c = 0; c < 3; c++) {
          grid[idx + c] = 0.25 * (grid[up + c] + grid[down + c] + grid[left + c] + grid[right + c]);
        }
      }
    }
    for (let y = pMinY; y <= pMaxY; y++) {
      for (let x = pMinX; x <= pMaxX; x++) {
        const idx = (y * width + x) * channels;
        const up = ((y - 1) * width + x) * channels;
        const down = ((y + 1) * width + x) * channels;
        const left = (y * width + (x - 1)) * channels;
        const right = (y * width + (x + 1)) * channels;
        for (let c = 0; c < 3; c++) {
          grid[idx + c] = 0.25 * (grid[up + c] + grid[down + c] + grid[left + c] + grid[right + c]);
        }
      }
    }
  }

  const cleanBuffer = Buffer.from(data);
  for (let y = bMinY; y <= bMaxY; y++) {
    for (let x = bMinX; x <= bMaxX; x++) {
      const idx = (y * width + x) * channels;
      const noise = (Math.random() - 0.5) * 3;
      for (let c = 0; c < 3; c++) {
        cleanBuffer[idx + c] = Math.min(255, Math.max(0, Math.round(grid[idx + c] + noise)));
      }
    }
  }
  for (let y = pMinY; y <= pMaxY; y++) {
    for (let x = pMinX; x <= pMaxX; x++) {
      const idx = (y * width + x) * channels;
      const noise = (Math.random() - 0.5) * 3;
      for (let c = 0; c < 3; c++) {
        cleanBuffer[idx + c] = Math.min(255, Math.max(0, Math.round(grid[idx + c] + noise)));
      }
    }
  }

  // Individual letter paths with inner hole cutout
  const pathO1 = 'M2.8998 15.7957C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388 0 1.699-.7609 1.699-1.699 0-.9388-.7602-1.7003-1.699-1.7007-.9388.0004-1.6994.7619-1.699 1.7007 0 .9381.7602 1.699 1.699 1.699z';
  const pathD = 'M11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537zm-2.8977 1.7399c.9388 0 1.7002-.7609 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007-.9389.0004-1.6995.7619-1.699 1.7007 0 .9381.7608 1.699 1.6983 1.699z';
  const pathO2 = 'M15.0349 15.7957c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389 0 1.7-.7609 1.7-1.699 0-.9388-.7602-1.7003-1.699-1.7007-.9388.0004-1.6994.7619-1.699 1.7007 0 .9381.7602 1.699 1.699 1.699z';
  const pathO3 = 'M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388 0 1.7008-.7609 1.7008-1.699 0-.9388-.762-1.7003-1.7008-1.7007-.9388.0004-1.6994.7619-1.699 1.7007 0 .9381.7602 1.699 1.699 1.699z';

  const overlaySvg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Board Branding - ONLY Odoo Logo, centered horizontally and vertically on the right half -->
    <g transform="translate(682, 146)">
      <g transform="scale(10.5)">
        <path fill-rule="evenodd" d="${pathO1}" fill="#714B67" />
        <path fill-rule="evenodd" d="${pathD}" fill="#8F8F8F" />
        <path fill-rule="evenodd" d="${pathO2}" fill="#8F8F8F" />
        <path fill-rule="evenodd" d="${pathO3}" fill="#8F8F8F" />
      </g>
    </g>

    <!-- Pot Branding -->
    <g transform="translate(142, 435)">
      <!-- Odoo Logo on Pot -->
      <g transform="scale(4.4)">
        <path fill-rule="evenodd" d="${pathO1}" fill="#714B67" opacity="0.9" />
        <path fill-rule="evenodd" d="${pathD}" fill="#8F8F8F" opacity="0.9" />
        <path fill-rule="evenodd" d="${pathO2}" fill="#8F8F8F" opacity="0.9" />
        <path fill-rule="evenodd" d="${pathO3}" fill="#8F8F8F" opacity="0.9" />
      </g>
    </g>
  </svg>
  `;

  await sharp(cleanBuffer, { raw: { width, height, channels: 3 } })
    .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
    .jpeg({ quality: 96 })
    .toFile('public/images/aboutus/odoo_partner_office_wall.jpg');

  console.log('Successfully regenerated public/images/aboutus/odoo_partner_office_wall.jpg without official partner text');
}

createOdooOfficeWall().catch(console.error);
