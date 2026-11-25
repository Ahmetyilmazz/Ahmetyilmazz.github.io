/**
 * Üç dikey mağaza ekran görüntüsünü (ör. Google Play, 1080x1920) gradyan zemin üzerinde
 * yan yana dizerek 1600x1200 WebP proje kapağı üretir. Ortadaki ekran biraz yukarıda durur.
 *
 * Kullanım:
 *   npm run store-cover -- --out public/images/kelengo-tr.webp [--from "#dbe8fb" --to "#7f9ee8"] ekran1.png ekran2.png ekran3.png
 */
import path from "node:path";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    out: { type: "string" },
    from: { type: "string", default: "#d9d4f7" },
    to: { type: "string", default: "#8f84e0" },
  },
});

if (!values.out || positionals.length !== 3) {
  console.error('Kullanım: npm run store-cover -- --out <cikti.webp> [--from "#renk" --to "#renk"] <ekran1> <ekran2> <ekran3>');
  process.exit(1);
}

const W = 1600;
const H = 1200;
const tile = { width: 470, height: 836, radius: 36, gap: 40 };
const verticalOffsets = [40, -10, 40];

const background = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${values.from}"/><stop offset="1" stop-color="${values.to}"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`,
);
const roundedMask = Buffer.from(
  `<svg width="${tile.width}" height="${tile.height}"><rect width="${tile.width}" height="${tile.height}" rx="${tile.radius}" fill="#fff"/></svg>`,
);
const shadow = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${tile.width + 120}" height="${tile.height + 120}">
    <filter id="b"><feGaussianBlur stdDeviation="22"/></filter>
    <rect x="60" y="75" width="${tile.width}" height="${tile.height}" rx="${tile.radius}" fill="rgba(30,20,80,0.35)" filter="url(#b)"/>
  </svg>`,
);

const left = (W - (3 * tile.width + 2 * tile.gap)) / 2;
const layers = [];
for (const [i, screenshot] of positionals.entries()) {
  const image = await sharp(screenshot)
    .resize(tile.width, tile.height)
    .composite([{ input: roundedMask, blend: "dest-in" }])
    .png()
    .toBuffer();
  const x = Math.round(left + i * (tile.width + tile.gap));
  const y = Math.round((H - tile.height) / 2 + verticalOffsets[i]);
  layers.push({ input: shadow, left: x - 60, top: y - 60 }, { input: image, left: x, top: y });
}

const output = path.resolve(values.out);
const info = await sharp(background).composite(layers).webp({ quality: 80 }).toFile(output);
console.log(`${path.relative(process.cwd(), output)} (${Math.round(info.size / 1024)} KB)`);
