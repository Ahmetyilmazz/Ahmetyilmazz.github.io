/**
 * Otomasyon projelerinin TR/EN kapak diyagramlarını (1600x1200 WebP) üretir.
 * Kullanım: npm run covers
 * Metinleri değiştirmek için aşağıdaki `covers` nesnesini düzenleyip komutu yeniden çalıştırın.
 * Not: Yazı tipi olarak sistemdeki "Segoe UI" kullanılır (Windows); başka sistemde Arial'a düşer.
 */
import path from "node:path";
import sharp from "sharp";

const W = 1600;
const H = 1200;
const font = "Segoe UI, Arial, sans-serif";

const covers = {
  "linkedin-automation": {
    background: ["#0f2233", "#0b2a4a"],
    tr: {
      title: "LinkedIn İçerik Otomasyonu",
      badge: "n8n · Docker · Tamamen yerelde",
      steps: [["RSS", "Teknoloji siteleri"], ["Gemma 4", "Ollama ile gönderi"], ["n8n", "Planlı paylaşım"], ["LinkedIn", "Gönderi"]],
    },
    en: {
      title: "LinkedIn Content Automation",
      badge: "n8n · Docker · Fully local",
      steps: [["RSS", "Tech news sites"], ["Gemma 4", "Post via Ollama"], ["n8n", "Scheduled publishing"], ["LinkedIn", "Post"]],
    },
  },
  "youtube-automation": {
    background: ["#2a1020", "#1b1442"],
    tr: {
      title: "YouTube Shorts Otomasyonu",
      badge: "n8n · Docker · Tamamen yerelde",
      steps: [["Gemma 4", "Ollama ile senaryo"], ["TTS", "Ücretsiz seslendirme"], ["Kurgu", "Seçilen medya"], ["YouTube", "Shorts yükleme"]],
    },
    en: {
      title: "YouTube Shorts Automation",
      badge: "n8n · Docker · Fully local",
      steps: [["Gemma 4", "Script via Ollama"], ["TTS", "Free voice-over"], ["Editing", "Chosen media"], ["YouTube", "Shorts upload"]],
    },
  },
};

const escapeXml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const renderSvg = ([from, to], { title, badge, steps }) => {
  const boxW = 310;
  const boxH = 190;
  const gap = 54;
  const left = (W - (4 * boxW + 3 * gap)) / 2;
  const y = 620;

  const boxes = steps
    .map(([head, sub], i) => {
      const x = left + i * (boxW + gap);
      const isModel = head === "Gemma 4";
      const arrow =
        i < steps.length - 1
          ? `<path d="M${x + boxW + 9} ${y + boxH / 2} h${gap - 24}" stroke="#54c5f8" stroke-width="5" stroke-linecap="round"/>
             <path d="M${x + boxW + gap - 22} ${y + boxH / 2 - 11} l13 11 l-13 11" fill="none" stroke="#54c5f8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
          : "";
      return `
        <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="30" fill="${isModel ? "url(#model)" : "#161c26"}" stroke="${isModel ? "none" : "#2c394d"}" stroke-width="2"/>
        <text x="${x + 32}" y="${y + 52}" font-family="${font}" font-size="24" font-weight="600" fill="${isModel ? "#10202c" : "#54c5f8"}">0${i + 1}</text>
        <text x="${x + 32}" y="${y + 112}" font-family="${font}" font-size="42" font-weight="700" fill="${isModel ? "#0d1118" : "#eef2f7"}">${escapeXml(head)}</text>
        <text x="${x + 32}" y="${y + 154}" font-family="${font}" font-size="24" fill="${isModel ? "#10202c" : "#95a0b3"}">${escapeXml(sub)}</text>
        ${arrow}`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>
      <linearGradient id="model" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#54c5f8"/><stop offset="1" stop-color="#ffd166"/></linearGradient>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#ffffff" fill-opacity="0.07"/></pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <rect width="100%" height="100%" fill="url(#dots)"/>
    <text x="${left}" y="400" font-family="${font}" font-size="66" font-weight="800" fill="#eef2f7">${escapeXml(title)}</text>
    <rect x="${left}" y="440" width="${badge.length * 14 + 64}" height="54" rx="27" fill="#54c5f8" fill-opacity="0.15" stroke="#54c5f8" stroke-opacity="0.5"/>
    <text x="${left + 32}" y="476" font-family="${font}" font-size="26" font-weight="600" fill="#9fdcf9">${escapeXml(badge)}</text>
    ${boxes}
  </svg>`;
};

for (const [name, cover] of Object.entries(covers)) {
  for (const lang of ["tr", "en"]) {
    const output = path.resolve("public/images", `${name}-${lang}.webp`);
    const info = await sharp(Buffer.from(renderSvg(cover.background, cover[lang]))).webp({ quality: 85 }).toFile(output);
    console.log(`${path.basename(output)} (${Math.round(info.size / 1024)} KB)`);
  }
}
