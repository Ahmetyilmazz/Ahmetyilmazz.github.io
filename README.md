# Ahmet YILMAZ · Flutter Developer

Kişisel portföy sitesi: **https://ahmetyilmazz.github.io**

Flutter ile geliştirdiğim mobil, web ve masaüstü uygulamalar, Google Play'de yayındaki uygulamalarım, sertifikalarım ve iletişim bilgilerim. Site Türkçe ve İngilizce olarak yayında.

> **English:** Personal portfolio of Ahmet YILMAZ, a Flutter developer. It showcases published Google Play apps, project case studies and certificates in Turkish and English. Built with Next.js (static export) and deployed to GitHub Pages.

## Özellikler

- **İki dil:** `/tr/` ve `/en/`. Kök adres, kayıtlı tercihe ya da tarayıcı diline göre yönlendirir.
- **Koyu ve açık tema:** Koyu tema varsayılan; seçim tarayıcıda hatırlanır.
- **Google Play uygulamaları:** Kendi yayınladığım ve ORELTEK için geliştirdiğim uygulamalar.
- **Proje sayfaları:** Problem → Çözüm anlatımı, kullanılan teknolojiler, demo videosu, mağaza ve kaynak kod bağlantıları.
- **Sertifikalar:** Kategori filtresi ve arama, doğrulama bağlantıları.
- **SEO:** Sayfa bazlı meta veriler, `hreflang`, build sırasında üretilen paylaşım görseli, `sitemap.xml`, `robots.txt`, JSON-LD.
- **Erişilebilirlik:** Klavyeyle gezinme, görünür odak halkası, "içeriğe geç" bağlantısı, `prefers-reduced-motion` desteği.

## Teknolojiler

Next.js 16 (App Router, statik export) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react · react-icons · sharp

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu (http://localhost:3000) |
| `npm run build` | Statik siteyi `out/` klasörüne üretir |
| `npm run preview` | `out/` klasörünü yerelde sunar; GitHub Pages'teki davranışa en yakın test |
| `npm run typecheck` | TypeScript kontrolü |
| `npm run images` | `public/images` altındaki PNG/JPG görselleri WebP'ye çevirir |

## İçerik nasıl güncellenir

İçerik arayüzden ayrıdır; çoğu güncelleme için yalnızca veri dosyalarını değiştirmek yeterlidir.

| Ne | Dosya |
|---|---|
| Arayüz metinleri (TR / EN) | `src/i18n/dictionaries/tr.ts`, `en.ts` |
| Projeler | `src/content/projects.ts` |
| Google Play uygulamaları | `src/content/apps.ts` |
| Sertifikalar | `src/content/certificates.ts` |
| İletişim, sosyal bağlantılar, teknolojiler | `src/content/site.ts` |

Yeni görsel eklerken: dosyayı `public/images` altına koyun, `npm run images` çalıştırın, oluşan `.webp` dosyasını içerikte kullanın ve orijinal PNG/JPG'yi silin.

EN sözlüğü TR sözlüğünün tipine bağlıdır; bir çeviri eksikse build hata verir.

## Proje yapısı

```
src/
  app/
    [locale]/            Dil önekli sayfalar (ana sayfa, sertifikalar, proje detayları, og.png)
    page.tsx             Kök adresten dile yönlendirme
    Certificates/        Eski /Certificates bağlantısı için yönlendirme
    sitemap.ts, robots.ts, icon.svg, not-found.tsx
  components/
    layout/              Header, Footer, marka, dil ve tema düğmeleri
    sections/            Ana sayfa bölümleri
    projects/, certificates/, seo/, ui/
  content/               Projeler, uygulamalar, sertifikalar, site bilgileri
  i18n/                  Dil ayarları ve TR / EN sözlükleri
  lib/                   Rotalar, meta veri, tercihler, tarih ve OG yardımcıları
scripts/                 Görsel optimizasyon script'i
```

## Yayın

`main` dalına yapılan her push, `.github/workflows/nextjs.yml` iş akışıyla build edilip GitHub Pages'e yayınlanır.

Değişiklik geçmişi: [DEGISIKLIKLER.md](DEGISIKLIKLER.md)
