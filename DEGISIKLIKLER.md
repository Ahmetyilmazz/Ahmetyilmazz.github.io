# Değişiklik Günlüğü

## 2026-10-29 — Aşama 1: Statik export altyapısı

**Ne değişti**
1. `next.config.ts` içinde `output: "export"` açıkça etkinleştirildi (önceden yorum satırındaydı).
2. Kullanılmayan ve adı hatalı `talilwind.config.ts` silindi.

**Neden**
- GitHub Pages yalnızca statik dosya sunar. Export ayarı yalnızca workflow'daki `configure-pages` adımına bırakılmıştı; bu adım `.ts` config dosyasında güvenilir çalışmayabilir.
- Tailwind v4 bu dosyayı okumuyordu (`@config` yok) ve adı da yanlıştı; içindeki ayarların hiçbiri etkili değildi.

**Dosyalar**: `next.config.ts`, `talilwind.config.ts` (silindi), `DEGISIKLIKLER.md`

**Doğrulama**: `npx next build` başarılı; `out/` klasörü `index.html`, `Certificates.html` ve statik varlıklarla üretildi.

**Sonraki aşamalar** (Vitrin tasarımı, koyu + açık tema, TR/EN):
2. TR/EN altyapısı (`/tr`, `/en`) ve içeriğin veri dosyalarına taşınması
3. Tasarım sistemi (token'lar, fontlar, ortak bileşenler)
4. Bölümlerin Vitrin tasarımıyla yeniden yazılması ve proje detay sayfaları
5. Görsel/video optimizasyonu, SEO (OG görseli, sitemap, hreflang, JSON-LD), erişilebilirlik
