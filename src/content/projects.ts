import { sameInAll, type Localized } from "@/i18n/config";
import { oreltek } from "./apps";

/** Tüm proje görselleri 4:3 oranında ve bu boyutta üretilir (npm run images). */
export const projectImageSize = { width: 1600, height: 1200 } as const;

/** Projelerde paket listesi yerine yalnızca dil ve framework gösterilir. */
const flutterStack = ["Dart", "Flutter"];

export interface Project {
  slug: string;
  title: Localized;
  platform: Localized;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  technologies: string[];
  /** Yalnızca kaynak kod herkese açıksa doldurulur. */
  github?: string;
  /** Google Play paket adı; uygulama mağazada yayındaysa doldurulur. */
  playStore?: string;
  /** Bir şirket adına geliştirildiyse şirketin adı. */
  developedFor?: string;
  /** Mağaza ekranları gibi dile göre değişen görseller için TR/EN ayrı tutulur. */
  image: Localized;
  video?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "muhabbet",
    title: { tr: "Muhabbet", en: "Muhabbet" },
    platform: { tr: "Mobil · Mesajlaşma", en: "Mobile · Messaging" },
    summary: {
      tr: "Genç kullanıcılar için sesli ve görüntülü aramalı, güvenli bir mesajlaşma uygulaması.",
      en: "A safe messaging app with voice and video calls, designed for young users.",
    },
    problem: {
      tr: "Üniversitede arkadaş grubumuz için kendi mesajlaşma uygulamamızı geliştirme fikri hep aklımdaydı. Küçük yaş grubuna uygun, güvenli ve keyifli bir alternatif yoktu.",
      en: "Since university I wanted to build our own messaging app for my group of friends. There was no safe and fun alternative suited to a younger audience.",
    },
    solution: {
      tr: "Flutter ve Firebase ile gerçek zamanlı mesajlaşma, WebRTC ile sesli/görüntülü arama, sesli mesaj, medya paylaşımı ve emoji desteği geliştirdim. Avatar seçimi ve takma adlarla deneyimi daha eğlenceli hale getirdim.",
      en: "I built real-time messaging with Flutter and Firebase, voice/video calls with WebRTC, voice notes, media sharing and emoji support. Avatars and nicknames make the experience more playful.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/Mesajlasma-Uygulamasi",
    image: sameInAll("/images/chatapp.webp"),
    featured: true,
  },
  {
    slug: "otoyol-rehberim",
    title: { tr: "Otoyol Rehberim", en: "Highway Guide" },
    platform: { tr: "Mobil · Navigasyon", en: "Mobile · Navigation" },
    summary: {
      tr: "Gişeler arası süre zorunluluğuna göre güvenli hızı anlık hesaplayan sürüş asistanı.",
      en: "A driving assistant that calculates a safe speed live, based on minimum travel times between toll gates.",
    },
    problem: {
      tr: "Otoyollarda gişeler arasında minimum geçiş süresi kuralı var. Sürücü, kalan mesafeye göre çok hızlı gidip gitmediğini yol üzerinde kolayca bilemiyor.",
      en: "Highways enforce a minimum travel time between toll gates. On the road, drivers cannot easily tell whether they are going too fast for the remaining distance.",
    },
    solution: {
      tr: "Uygulama anlık hızı, alınan yolu ve geçen süreyi takip eder. Seçilen gişeler arasındaki mesafeye göre normal, güvenli ve sınır sürelerini hesaplayıp sürücüye harita üzerinde gösterir.",
      en: "The app tracks live speed, distance travelled and elapsed time. It calculates normal, safe and limit times for the chosen toll gates and shows them on a map.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/Otoyol-Rehberi",
    image: sameInAll("/images/otoyol_rehberim.webp"),
    video: "/videos/otoyol_rehberim.mp4",
    featured: true,
  },
  {
    slug: "gorevlerim",
    title: { tr: "Görevlerim", en: "MyRoutines" },
    platform: { tr: "Mobil · Tablet · Aile", en: "Mobile · Tablet · Family" },
    summary: {
      tr: "Çocuklara rutin kazandıran, yıldız ve ödül sistemiyle oyunlaştırılmış görev tablosu.",
      en: "A gamified chore chart that builds routines for kids with stars and rewards.",
    },
    problem: {
      tr: "Ebeveynler çocuklarına sorumluluk kazandırmak istiyor ama görev listeleri çocuklar için sıkıcı kalıyor ve takip etmek zorlaşıyor.",
      en: "Parents want to teach their children responsibility, but plain task lists bore kids and are hard to follow up on.",
    },
    solution: {
      tr: "Ebeveynler her çocuk için günlük, haftalık ve aylık görevler tanımlar; çocuklar tamamladıkça yıldız toplar ve yıldızları ödüllere dönüştürür. Takvim ve istatistik ekranlarıyla ilerleme birlikte izlenir, gün sonu kutlama animasyonuyla motivasyon artar. Hesap gerekmez; tüm veriler cihazda kalır, reklam ve takip yoktur.",
      en: "Parents set daily, weekly and monthly tasks for each child; kids collect stars as they finish them and turn stars into rewards. Calendar and statistics screens let families follow progress together, and an end-of-day celebration keeps kids motivated. No account is needed: all data stays on the device, with no ads or tracking.",
    },
    technologies: flutterStack,
    playStore: "com.oreltek.gorevlerim",
    developedFor: oreltek.name,
    image: { tr: "/images/gorevlerim-tr.webp", en: "/images/gorevlerim-en.webp" },
    featured: true,
  },
  {
    slug: "learn-english",
    title: { tr: "Learn English", en: "Learn English" },
    platform: { tr: "Mobil · Eğitim", en: "Mobile · Education" },
    summary: {
      tr: "Düzenli tekrar ile İngilizce kelime öğrenmeyi kolaylaştıran kart uygulaması.",
      en: "A flashcard app that makes learning English vocabulary easier through regular review.",
    },
    problem: {
      tr: "İngilizce öğrenirken en büyük zorluk düzenli tekrar yapmaktı. Kelimeler kısa sürede unutuluyordu.",
      en: "While learning English, my biggest challenge was reviewing regularly. New words were quickly forgotten.",
    },
    solution: {
      tr: "Kelimeleri kartlar halinde tekrar ettiren, verileri cihazda SQLite ile saklayan bir uygulama geliştirdim. Google AdMob entegrasyonuyla gelir modeli de denedim.",
      en: "I built an app that reviews words as flashcards and stores data on the device with SQLite. I also tried a revenue model with Google AdMob.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/English-Learn",
    playStore: "app.ahmetylmzzz.words",
    image: sameInAll("/images/english_learn.webp"),
    video: "/videos/english_word.mp4",
  },
  {
    slug: "servis-takip",
    title: { tr: "Servis Takip", en: "Service Tracker" },
    platform: { tr: "Mobil · İşletme", en: "Mobile · Business" },
    summary: {
      tr: "Ürün ve satış süreçlerini tek yerden yöneten servis takip uygulaması.",
      en: "A service tracking app that manages products and sales in one place.",
    },
    problem: {
      tr: "Küçük işletmeler ürünlerini ve satışlarını kağıt ya da dağınık tablolarla takip ediyor; güncel duruma hızlıca ulaşamıyor.",
      en: "Small businesses track products and sales on paper or scattered spreadsheets and cannot see the current state quickly.",
    },
    solution: {
      tr: "Kullanıcıların ürün ekleyip güncelleyebildiği ve satışları takip edebildiği bir uygulama geliştirdim. Kimlik doğrulama ve veriler Firebase ile yönetiliyor.",
      en: "I built an app where users add and update products and track sales. Authentication and data are handled with Firebase.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/ServisTakip",
    image: sameInAll("/images/servis_takip.webp"),
    video: "/videos/servis_takip.mp4",
  },
  {
    slug: "takim-uygulamasi",
    title: { tr: "Takım Uygulaması", en: "Team App" },
    platform: { tr: "Mobil · Spor", en: "Mobile · Sports" },
    summary: {
      tr: "Bir spor kulübü için haber, fikstür ve canlı skor uygulaması.",
      en: "News, fixtures and live scores app for a sports club.",
    },
    problem: {
      tr: "Taraftarlar kulüp haberlerine, maç takvimine ve canlı skorlara farklı kaynaklardan ulaşmak zorunda kalıyor.",
      en: "Fans have to check different sources for club news, the match calendar and live scores.",
    },
    solution: {
      tr: "Haberler, yaklaşan maçlar, oyuncular, fikstür ve anlık skorları tek bir uygulamada topladım. Google ile giriş ve REST API üzerinden canlı veri kullanılıyor.",
      en: "I brought news, upcoming matches, players, fixtures and live scores into one app, with Google sign-in and live data from a REST API.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/TeamApp",
    image: sameInAll("/images/team_app.webp"),
    video: "/videos/team_app.mp4",
  },
  {
    slug: "anlik-konum-takibi",
    title: { tr: "Anlık Konum Takibi", en: "Live Location Tracking" },
    platform: { tr: "Mobil · Arka plan servisi", en: "Mobile · Background service" },
    summary: {
      tr: "Arka planda çalışarak sunucuya anlık konum gönderen takip uygulaması.",
      en: "A tracking app that keeps sending live location to a server in the background.",
    },
    problem: {
      tr: "Saha ekiplerinin konumu, uygulama kapalıyken bile güvenilir şekilde ve sunucunun istediği sıklıkta iletilmeliydi.",
      en: "Field teams' locations had to be sent reliably, even with the app closed, at the frequency the server requests.",
    },
    solution: {
      tr: "Token ile kimliği doğrulanan cihaz, konumunu HTTP ile sunucuya gönderir; gönderim sıklığı sunucudan gelen yanıta göre değişir. Servis arka planda çalışır, tek dokunuşla durdurulur ve sunucu bildirimleri kullanıcıya gösterilir.",
      en: "A token-authenticated device sends its location over HTTP, and the server's response sets how often it sends. The service runs in the background, stops with one tap and shows notifications from the server.",
    },
    technologies: flutterStack,
    github: "https://github.com/Ahmetyilmazz/Instant_Location_Tracking",
    image: sameInAll("/images/anlik_konum.webp"),
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
