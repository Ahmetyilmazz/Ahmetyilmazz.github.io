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

## 2026-10-29 — Learn English adı birleştirildi ve Google Play bağlantısı

**Ne değişti**
1. Uygulama listesinde "Learn English | OXFORD 4000+" adı "Learn English" olarak kısaltıldı.
2. "English Learn" projesi aynı uygulama olduğu için adı "Learn English", adresi `/projects/learn-english/` oldu.
3. Projelere isteğe bağlı `playStore` (paket adı) alanı eklendi; doluysa proje kartında "Google Play" rozeti, detay sayfasında "Google Play'de aç" düğmesi çıkar.

**Neden**: Aynı uygulamanın sitede iki farklı adla görünmesini önlemek ve projeden mağazaya doğrudan geçiş sağlamak.

**Dosyalar**: `src/content/apps.ts`, `src/content/projects.ts`, `src/components/projects/ProjectCard.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`

**Doğrulama**: `npx tsc --noEmit` hatasız, `npx next build` başarılı, `out/tr/projects/learn-english/` üretildi.

## 2026-10-29 — ORELTEK uygulamaları ve Görevlerim düzenlemesi

**Ne değişti**
1. ORELTEK geliştirici hesabındaki 3 uygulama eklendi: Görevlerim: Çocuk Ödül Tablosu (EN: MyRoutines), ORELTEK Tamga, Solo Test: Zeka Oyunu (EN: Peg Solitaire). Metinler mağazadaki resmi TR/EN açıklamalar.
2. Uygulamalar bölümü iki gruba ayrıldı: "Kendi yayınladığım uygulamalar" ve "ORELTEK için geliştirdiğim uygulamalar"; her grubun kendi geliştirici sayfası bağlantısı var. ORELTEK kartlarında "ORELTEK için geliştirildi" ibaresi görünür.
3. Uygulama ikonu dile göre değişebilir (Görevlerim TR / MyRoutines EN ikonları). `sameInAll` yardımcısı eklendi.
4. Görevlerim projesi: GitHub linki kaldırıldı (repoda kaynak kod yok, yalnızca görseller var), Google Play bağlantısı ve "ORELTEK için geliştirildi" etiketi eklendi, EN adı MyRoutines oldu. `github` alanı isteğe bağlı yapıldı.

**Neden**: Kullanıcının isteği; şirket adına geliştirilen uygulamaların açıkça belirtilmesi.

**Dosyalar**: `src/content/apps.ts`, `src/content/projects.ts`, `src/i18n/config.ts`, `src/i18n/dictionaries/*`, `src/components/sections/PlayApps.tsx`, `src/components/projects/ProjectCard.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`, `public/images/apps/*`

**Doğrulama**: `npx tsc --noEmit` hatasız, `npx next build` başarılı; çıktıda Görevlerim GitHub linkinin olmadığı ve ORELTEK ibaresinin iki dilde de bulunduğu kontrol edildi.

## 2026-10-29 — Logo, footer ve animasyonlar

**Ne değişti**
1. Header'daki "AY" kutusu yerine `Brand` bileşeni: gradyan çerçeveli profil fotoğrafı + ad + "Flutter Developer". Footer'da da kullanılıyor.
2. Footer yeniden düzenlendi: marka, kısa tanım, site bağlantıları, sosyal ikonlar. "Next.js ile geliştirildi" ibaresi kaldırıldı.
3. Animasyonlar (yalnızca CSS, `prefers-reduced-motion` açıkken kapalı):
   - Hero: kademeli açılış, süzülen proje görselleri, yavaşça kayan ışık lekeleri, nokta deseni, yanıp sönen "açığım" göstergesi, gradyanlı başlık.
   - Hero altında kayan teknoloji bandı (fareyle üzerine gelince durur).
   - Bölüm başlıkları ve kartlar kaydırdıkça beliriyor (scroll-driven animation; desteklemeyen tarayıcıda içerik doğrudan görünür).
   - Hizmet kartlarında hover efekti.
4. Açık tema için ikinci vurgu rengi (`--accent-2`): gradyan başlık açık temada kahverengiye kaçıyordu.
5. Bölüm dikey boşlukları azaltıldı.

**Dosyalar**: `src/app/globals.css`, `src/components/layout/{Brand,Header,Footer}.tsx`, `src/components/sections/{Hero,TechMarquee,Services,Projects,PlayApps,About,CertificatesPreview,Contact}.tsx`, `src/components/ui/Section.tsx`, `src/content/site.ts`, `src/app/[locale]/{layout,page}.tsx`, `src/i18n/dictionaries/*`

**Doğrulama**: `npx tsc --noEmit` hatasız, `npx next build` başarılı; koyu tema 1440 px, açık tema 1280 px ve 600 px ekran görüntüleri incelendi.

## 2026-10-29 — Görsel optimizasyonu (PNG/JPG → WebP)

**Ne değişti**
1. `scripts/optimize-images.mjs` ve `npm run images`: `public/images` altındaki PNG/JPG'leri WebP'ye çevirir, klasöre göre en büyük genişliği uygular (proje 1600 px, sertifika 1200 px, ikon 256 px), dosya adlarını ASCII'ye çevirir, 192 px avatar üretir.
2. `sharp` açık devDependency olarak eklendi.
3. Tüm içerik yolları `.webp` dosyalarına güncellendi; Türkçe karakterli iki sertifika dosya adı ASCII oldu.
4. Proje görseli boyutu `projectImageSize` sabitinde toplandı (önceden 4 yerde tekrarlanıyordu).
5. Eski 30 PNG/JPG dosyası silindi (git geçmişinde duruyor).

**Neden**: `public/images` 24 MB'tı; sayfa açılışını en çok yavaşlatan şeydi.

**Sonuç**: `public/images` 24 MB → 1.5 MB.

**Dosyalar**: `scripts/optimize-images.mjs`, `package.json`, `package-lock.json`, `src/content/*`, `src/components/sections/{Hero,About}.tsx`, `src/components/projects/ProjectCard.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`, `public/images/**`

**Doğrulama**: Koddaki 31 görsel yolunun hepsinin dosyası mevcut (script ile kontrol edildi); örnek görsel gözle incelendi; `npx tsc --noEmit` ve `npx next build` başarılı.

## 2026-10-29 — SEO ve paylaşım görünümü

**Ne değişti**
1. Paylaşım görseli: `src/app/[locale]/og.png/route.tsx` build sırasında `/tr/og.png` ve `/en/og.png` (1200×630) üretir; avatar, ad, rol, hero başlığı ve istatistikler içerir. Fontlar build sırasında Google Fonts'tan alınır (`src/lib/og.ts`).
2. Tüm sayfalarda `og:image` ve `twitter:image` bu görsele bağlandı (`src/lib/metadata.ts`). Önceden alt sayfalarda görsel yoktu.
3. Eski `public/open_graph_image.png` silindi: 1200×630 olması gerekirken 32×32 piksellikti, paylaşım önizlemesi bu yüzden çıkmıyordu.
4. Favicon: Next.js'in varsayılan `favicon.ico` dosyası yerine marka renkleriyle `src/app/icon.svg` ("A" monogramı).
5. `sitemap.xml` (18 sayfa, dil alternatifleriyle) ve `robots.txt` eklendi.
6. Ana sayfaya schema.org `Person` yapılandırılmış verisi (JSON-LD) eklendi.

**Neden**: Link paylaşıldığında düzgün önizleme, Google'da doğru dizinleme ve kişi bilgisinin tanınması.

**Dosyalar**: `src/app/[locale]/og.png/route.tsx`, `src/lib/og.ts`, `src/lib/metadata.ts`, `src/app/icon.svg`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/seo/PersonJsonLd.tsx`, `src/app/[locale]/page.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`, `src/content/site.ts`, `src/app/favicon.ico` (silindi), `public/open_graph_image.png` (silindi)

**Doğrulama**: `npx next build` 27 sayfa üretti; `og.png` dosyaları 1200×630 PNG; ana sayfa, sertifikalar ve proje sayfasında `og:image` etiketi kontrol edildi; OG görseli ve favicon gözle incelendi.

## 2026-10-29 — README ve npm script'leri

**Ne değişti**
1. README, create-next-app varsayılan metni yerine projeyi anlatan, içerik güncelleme rehberi içeren bir dokümana dönüştü (kısa İngilizce özetle).
2. `package.json`: anlamsız `deploy` script'i (yalnızca ekrana yazı basıyordu) kaldırıldı, `typecheck` eklendi.

**Dosyalar**: `README.md`, `package.json`

**Doğrulama**: `npm run typecheck` ve `npm run build` başarılı.

## 2026-10-29 — Teknoloji bandının yönü

**Ne değişti**: Hero altındaki kayan teknoloji bandı artık soldan sağa akıyor (`animation-direction: reverse`).

**Neden**: Kullanıcı tercihi.

**Dosyalar**: `src/app/globals.css`

**Doğrulama**: `npm run build` başarılı; build çıktısındaki CSS'te `infinite reverse` olduğu kontrol edildi. Hareketin yönü tarayıcıda gözle kontrol edilmedi.

## 2026-10-29 — Görevlerim görseli ve metinleri mağazaya göre güncellendi

**Ne değişti**
1. Görevlerim için eski "Aile Asistanı" görseli yerine Google Play mağaza ekranlarından üretilmiş yeni kapaklar: `public/images/gorevlerim-tr.webp` (TR mağaza ekranları) ve `gorevlerim-en.webp` (EN mağaza ekranları). Mağazadaki ilk üç telefon ekranı, gradyan zemin üzerinde 1600×1200 olarak birleştirildi (sharp ile, tek seferlik).
2. Projelerin `image` alanı iki dilli oldu (`Localized`); dile göre değişmeyen görseller `sameInAll` ile tanımlı.
3. Görevlerim metinleri mağazadaki güncel uygulamaya göre düzeltildi: platform "Mobil · Tablet · Aile", yıldız/ödül sistemi, takvim ve istatistik, gün sonu kutlaması, hesap gerektirmemesi, reklam ve takip olmaması.
4. Artık kullanılmayan `cocuk_takip.webp` silindi.

**Dosyalar**: `src/content/projects.ts`, `src/components/projects/ProjectCard.tsx`, `src/components/sections/Hero.tsx`, `src/app/[locale]/projects/[slug]/page.tsx`, `public/images/gorevlerim-{tr,en}.webp`, `public/images/cocuk_takip.webp` (silindi)

**Doğrulama**: `npx tsc --noEmit` hatasız; koddaki tüm görsel yollarının dosyası mevcut; `npx next build` başarılı; TR sayfada TR, EN sayfada EN kapak kullanıldığı çıktıda kontrol edildi; kapak görseli gözle incelendi.

## Açık kalan işler
- Demo videoları (~100 MB) sıkıştırılmalı; bilgisayarda `ffmpeg` yok.
- GoatCounter ziyaretçi sayacı (kullanıcının site kodu bekleniyor).
- Google Search Console doğrulaması (isteğe bağlı).
- ESLint kurulumu ve CI'da lint/typecheck adımı.
- Güncel profil fotoğrafı (mevcut fotoğraf 2021 tarihli).
