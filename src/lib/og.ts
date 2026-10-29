import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** Build sırasında Google Fonts'tan ImageResponse'un okuyabildiği TTF dosyasını indirir. */
export const loadGoogleFont = async (family: string, weight: number) => {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`,
  ).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
  if (!url) throw new Error(`Font bulunamadı: ${family} ${weight}`);
  return fetch(url).then((response) => response.arrayBuffer());
};

/** public altındaki bir görseli ImageResponse için PNG data URL'ine çevirir (WebP desteklenmiyor). */
export const publicImageAsDataUrl = async (publicPath: string, size: number) => {
  const file = await readFile(path.join(process.cwd(), "public", publicPath));
  const png = await sharp(file).resize(size, size).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
};
