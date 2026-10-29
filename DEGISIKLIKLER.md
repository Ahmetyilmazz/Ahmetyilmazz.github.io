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

## 2026-10-29 — Aşama 2: TR/EN altyapısı ve içerik katmanı

**Ne değişti**
1. `src/i18n/`: dil ayarları (`config.ts`), tipli TR ve EN sözlükleri, `getDictionary` ve `format` yardımcıları, rota parametresi doğrulayan `resolveLocale`. EN sözlüğü `Dictionary` tipine bağlı; eksik çeviri build'i durdurur.
2. `src/content/`: projeler, sertifikalar ve site bilgileri bileşenlerden ayrılıp iki dilli veri dosyalarına taşındı. Tarihler ISO formatına, süreler sayıya çevrildi.
3. Proje metinleri "Problem / Çözüm" yapısında yeniden yazıldı, yazım hataları düzeltildi.
4. CSS Temelleri sertifikasının yanlış doğrulama linki düzeltildi (HTML5 sertifikasıyla aynıydı).
5. Instagram bağlantısı kaldırıldı.

**Neden**: İki dilli yapı için içeriğin arayüzden ayrılması gerekiyordu; tek kaynaktan tüm sayfalar beslenir.

**Dosyalar**: `src/i18n/*`, `src/content/*`, `src/lib/format.ts`

**Doğrulama**: `npx tsc --noEmit` hatasız.

## 2026-10-29 — Aşama 3-4: Vitrin tasarımı, dil önekli rotalar ve yeni bölümler

**Ne değişti**
1. Rotalar: `/tr/` ve `/en/` altında ana sayfa, `/certificates/` ve 7 proje için `/projects/[slug]/` detay sayfası. Kök adres kayıtlı tercihe ya da tarayıcı diline göre yönlendirir; eski `/Certificates` bağlantısı da yeni sayfaya yönlendirilir.
2. Tasarım sistemi (`globals.css`): renk token'ları, koyu tema varsayılan, açık tema `data-theme="light"` ile. Fontlar `next/font` ile (Unbounded + Figtree). Kullanılmayan Tailwind v3 direktifleri ve çakışan body arka planı kaldırıldı.
3. Yeni bileşenler (`src/components/`): ortak UI (Container, Section, ButtonLink, Tag, StatList), Header (dil ve tema düğmesi, mobil menü, "içeriğe geç" bağlantısı), Footer, Hero, Hizmetler, Projeler, Hakkımda + teknolojiler, sertifika önizlemesi, İletişim (e-posta kopyalama, form bağlantısı).
4. Proje detay sayfası: Problem/Çözüm kartları, teknolojiler, telefon çerçevesinde demo videosu, önceki/sonraki proje.
5. Sertifikalar sayfası: kategori filtresi ve arama, modal yerine erişilebilir kartlar.
6. SEO: sayfa bazlı başlık/açıklama, canonical, `hreflang` (tr, en, x-default), OpenGraph ve Twitter kartları.
7. `trailingSlash: true`: GitHub Pages'te `/tr` ile `tr/` klasörünün çakışmasını önler.
8. `framer-motion` bağımlılığı kaldırıldı; eski `src/app/components` ve `src/app/Certificates` içeriği silindi.
9. Kartlar tıklanabilir `div` yerine bağlantı; odak halkası ve `prefers-reduced-motion` desteği eklendi.

**Neden**: Kullanıcının seçtiği "Vitrin" tasarımı, TR/EN desteği, iş arayışı + freelance tanıtım hedefi.

**Dosyalar**: `src/app/*`, `src/components/*`, `src/lib/*`, `next.config.ts`, `package.json`, `package-lock.json`

**Doğrulama**: `npx tsc --noEmit` hatasız; `npx next build` 23 statik sayfa üretti; `out/` içinde `lang`, canonical, `hreflang` ve başlıklar kontrol edildi; Edge headless ile masaüstü (1440 px), 600 px ve proje sayfası ekran görüntüleri incelendi.

## 2026-10-29 — Google Play uygulamaları bölümü

**Ne değişti**
1. `src/content/apps.ts`: Google Play'de yayında olan 4 uygulama (Learn English | OXFORD 4000+, 11 Dilde Kelime Öğren, Temel Matematik, Solo Test). Ad ve kısa açıklamalar mağaza sayfasındaki resmi TR/EN metinlerden alındı.
2. Uygulama ikonları `public/images/apps/` altına 256 px PNG olarak indirildi (Google sunucusuna doğrudan bağlantı kırılgan olduğu için).
3. Yeni "Google Play'de yayında" bölümü Hero'nun hemen altına eklendi: ikon, kategori, kısa açıklama, mağaza bağlantısı ve geliştirici sayfası bağlantısı.
4. Hero istatistiklerine "Google Play'de" sayısı, menüye "Uygulamalar", footer'a Google Play ikonu eklendi.
5. Menü öğesi arttığı için masaüstü menüsü 1024 px ve üstünde gösteriliyor; altında menü düğmesi kullanılıyor.

**Neden**: Yayındaki uygulamalar, işe alımcı ve müşteriler için en güçlü kanıt.

**Dosyalar**: `src/content/apps.ts`, `src/content/site.ts`, `src/components/sections/PlayApps.tsx`, `src/components/sections/Hero.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/app/[locale]/page.tsx`, `src/lib/routes.ts`, `src/i18n/dictionaries/*`, `public/images/apps/*`

**Doğrulama**: `npx tsc --noEmit` hatasız, `npx next build` başarılı; 1440 px ve 900 px ekran görüntüleri incelendi.

**Sonraki aşama**
5. Görsel/video optimizasyonu (PNG → WebP, video sıkıştırma), yeni OG görseli, sitemap/robots, JSON-LD, README
