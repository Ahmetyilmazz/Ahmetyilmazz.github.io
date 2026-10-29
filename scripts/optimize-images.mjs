/**
 * public/images altındaki PNG/JPG görselleri WebP'ye çevirir.
 * Kullanım: npm run images
 * Çıktı dosya adı ASCII'ye çevrilir (ör. "işletim_sistemleri.png" -> "isletim_sistemleri.webp").
 * Orijinal dosyalar silinmez; çıktıyı kontrol ettikten sonra elle kaldırın.
 */
import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");

/** Klasöre göre en büyük genişlik; daha küçük görseller büyütülmez. */
const maxWidthByFolder = { "": 1600, certificates: 1200, apps: 256 };

const turkishToAscii = { ç: "c", ğ: "g", ı: "i", İ: "i", ö: "o", ş: "s", ü: "u", Ç: "c", Ğ: "g", Ö: "o", Ş: "s", Ü: "u" };
const toAsciiName = (name) => name.replace(/[çğıİöşüÇĞÖŞÜ]/g, (char) => turkishToAscii[char]).toLowerCase();

const collectImages = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectImages(fullPath);
      return /\.(png|jpe?g)$/i.test(entry.name) ? [fullPath] : [];
    }),
  );
  return nested.flat();
};

const convert = async (file) => {
  const folder = path.relative(root, path.dirname(file));
  const maxWidth = maxWidthByFolder[folder] ?? 1600;
  const output = path.join(path.dirname(file), `${toAsciiName(path.parse(file).name)}.webp`);

  const info = await sharp(file)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  return { file: path.relative(root, file), output: path.relative(root, output), kb: Math.round(info.size / 1024) };
};

const files = await collectImages(root);
for (const result of await Promise.all(files.map(convert))) {
  console.log(`${result.file} -> ${result.output} (${result.kb} KB)`);
}

const avatar = path.join(root, "profil.jpg");
if (files.includes(avatar)) {
  await sharp(avatar).resize(192, 192).webp({ quality: 82 }).toFile(path.join(root, "profil-avatar.webp"));
  console.log("profil.jpg -> profil-avatar.webp (192 px)");
}
