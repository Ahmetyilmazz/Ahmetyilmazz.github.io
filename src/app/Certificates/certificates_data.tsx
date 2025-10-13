export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  duration: string;
  image: string;
  credentialUrl: string;
  category: string;
  skills: string[];
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Google Flutter ile Mobil Uygulama",
    organization: "BTK Akademi",
    date: "12.09.2024",
    duration: "20 Saat",
    image: "./images/certificates/google_flutter_ile_mobil_uygulama.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=VP1cJdjxDl",
    category: "mobile",
    skills: [
      "Flutter Temelleri",
      "Temel Dart Programlama Dili",
      "Nesne Yönelimli Programlama Temelleri",
      "Widget ve Layout Kavramları",
      "State Management",
      "Firebase",
      "BloC Deseni",
    ],
    description:
      "Kapsamlı Flutter ve Dart eğitimi ile modern mobil uygulama geliştirme teknikleri.",
  },
  {
    id: 2,
    title: "Dart Programlama Dili",
    organization: "BTK Akademi",
    date: "28.08.2024",
    duration: "11 Saat",
    image: "./images/certificates/dart_programlama.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=2Nwc0W4ywA",
    category: "mobile",
    skills: [
      "Algoritma Kurma Yeteneği",
      "Nesne Yönelimli Programlama Kavramları",
      "Null Safety ve Fonksiyonel Programlama",
      "Dart ile Program Geliştirme",
      "Flutter için gerekli altyapı",
    ],
    description:
      "Bu eğitimin amacı Katılımcıların dart programlama dilinde temel ve orta seviyede bilgilenmelerini sağlamaktır.",
  },
  {
    id: 3,
    title: "HTML5 İle Web Geliştirme",
    organization: "BTK Akademi",
    date: "10.02.2025",
    duration: "14 Saat",
    image: "./images/certificates/HTML5_ile_web_geliştirme.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=6mqFNMnj0g",
    category: "web",
    skills: [
      "Temel HTML Bilgisi",
      "SEO ve Semantik Web",
      "Site Yayınlama",
      "Temel CSS Bilgisi",
      "CSS Kutu Modeli",
      "Form, Link ve Menüler",
      "Kişisel Web Sitesi Uygulaması",
      "Javascript Farkındalığı",
    ],
    description:
      "Bu eğitimin amacı temel düzeyde işletim sistemi kullanmayı bilen herkese HTML ve CSS teknolojilerini öğreterek orta/orta üstü düzeyde kişisel veya kurumsal web sitesi yapabilecek beceriyi kazandırmaktır.",
  },
  {
    id: 4,
    title: "CSS Temelleri",
    organization: "BTK Akademi",
    date: "10.02.2025",
    duration: "10 Saat",
    image: "./images/certificates/css_temelleri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=6mqFNMnj0g",
    category: "web",
    skills: [
      "Temel HTML Bilgisi",
      "SEO ve Semantik Web",
      "Site Yayınlama",
      "Temel CSS Bilgisi",
      "CSS Kutu Modeli",
      "Form, Link ve Menüler",
      "Kişisel Web Sitesi Uygulaması",
      "Javascript Farkındalığı",
    ],
    description:
      "Bu eğitimin amacı temel düzeyde HTML bilen herkese CSS teknolojilerini öğreterek orta/orta üstü düzeyde kişisel veya kurumsal web sitesi tasarlayabilecek beceri ve altyapıyı kazandırmaktır",
  },
  {
    id: 5,
    title: "Javascript Temelleri",
    organization: "BTK Akademi",
    date: "28.02.2025",
    duration: "26 Saat",
    image: "./images/certificates/javascript_temelleri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0eB2MA",
    category: "web",
    skills: [
      "Temel Javascript Bilgisi",
      "Temel Programlama Kavramları",
      "Temel Algoritma Bilgisi",
      "Nesne Tabanlı Programlama",
      "Gömülü Javascript Fonksiyonları",
      "Diziler",
      "Javascript DOM<",
      "Javascript Form İşlemleri",
      "Hata Yönetimi",
    ],
    description:
      "Algoritma ve temel programlama kavramlarını öğreterek, etkileşimli web sayfalarının tasarlanmasını sağlamaktır.",
  },
  {
    id: 6,
    title: "Bilgi Teknolojilerine Giriş",
    organization: "BTK Akademi",
    date: "31.08.2024",
    duration: "4 Saat",
    image: "./images/certificates/bilgi_teknolojilerine_giris.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh19XVBo",
    category: "bilisim",
    skills: [
      "Yazılıma farklı bakış açıları kazandırır.",
      "Yazılım Uzmanlık Alanları",
      "Yazılım Uzmanının Araçları",
      "Yazılım İçi Donanım",
    ],
    description:
      "Bu eğitimin hedefi, yazılım, donanım ve bilişim dünyasına ait temel kavramları öğretmek; kursiyerlerin ilerleyen derslerde yazılım yeteneklerinigeliştirmelerini sağlamak ve yaygın yazılım dilleri hakkında temel bilgi kazandırmaktır.",
  },
  {
    id: 7,
    title: "İşletim Sistemlerine Giriş",
    organization: "BTK Akademi",
    date: "17.09.2024",
    duration: "1 Saat",
    image: "./images/certificates/işletim_sistemlerine_giris.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=1kZComKAnz",
    category: "bilisim",
    skills: [
      "İşletim Sisteminin Tarihçesi",
      "İşletim Sistemi Temel Kavramlar",
      "Türlerine Göre İşletim Sistemleri",
    ],
    description:
      "Bu eğitimin amacı, Öğrenenlerin işletim sisteminin nasıl ortaya çıktığı, temel bileşenlerinin neler olduğu ve işletim sistemi türleri hakkında bilgi edinmelerini sağlamak, neredeyse hayatımızın her alanında kullanılan işletim sistemlerinin kullanım alanları ve işlevleri ile ilgili farkındalık oluşturmaktır.",
  },
  {
    id: 8,
    title: "Yapay Zekanın İş Dünyasına Etkisi Eğitimi",
    organization: "Toplum Gönülleri Vakfı",
    date: "20.09.2024",
    duration: "1 Saat",
    image: "./images/certificates/yapay_zeka.png",
    credentialUrl: "https://verified.sertifier.com/tr/verify/36082284064373/",
    category: "yapayzeka",
    skills: [
      "Yapay Zeka",
      "Makine Öğrenmesi",
      "Yapay Zekanın Çalışma Prensibi",
      "Doğal Dil İşleme (NLP)",
      "Yapay Zekanın Geleceği",
    ],
    description: "Yapay Zekanın İş Dünyasına Etkisi etkinliği.",
  },
  {
    id: 9,
    title: "Siber Güvenliğe Giriş",
    organization: "BTK Akademi",
    date: "19.08.2024",
    duration: "4 Saat",
    image: "./images/certificates/siber_guvenlige_giris.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbVp9aA",
    category: "siber",
    skills: [
      "Siber Güvenlik Kavramları",
      "Sosyal Mühendislik ve Sızma Testleri",
      "Siber Güvenlik Alanları",
      "Güvenli Kodlar ve Risk Yönetimi",
      "Siber Güvenlik Kariyeri",
    ],
    description:
      "Bu dersin amacı öğrenenlerin siber güvenlik hakkında giriş seviyesinde bilgi edinmelerini sağlamaktır.",
  },
  {
    id: 10,
    title: "Temel Ağ Teknolojileri",
    organization: "BTK Akademi",
    date: "12.09.2024",
    duration: "2 Saat",
    image: "./images/certificates/temel_ag_teknolojileri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=GoDfnqjrOV",
    category: "bilisim",
    skills: [
      "Network ve Network Bileşenleri",
      "Network Gösterimleri ve Topoloji",
      "Network Tipleri",
      "Protokoller ve Modeller",
      "TCP-IP Protokol Suiti",
      "OSI Referans Modeli",
      "Ethernet Anahtarlama",
      "Network Katmanı",
      "Network Protokolleri",
    ],
    description:
      "Bu eğitimin amacı, genel network tarihçesi hakkında bilgi vermek, network bileşenleri ve topolojilerini anlatmak, TCP/IP protokolü, OSI katmanları, IP/Ethernet ve çeşitli network protokolleri hakkında bilgi sağlamaktır.",
  },
  {
    id: 11,
    title: "C# Programlama",
    organization: "BTK Akademi",
    date: "29.04.2025",
    duration: "11 Saat",
    image: "./images/certificates/csharp_programlama.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=OKMhqlkzKP",
    category: "desktop",
    skills: [
      "C# Temelleri",
      "C# ile Web Geliştirme Temelleri",
      "C# ile Mobil Uygulama Geliştirme Temelleri",
      "C# ile Masaüstü Uygulama Geliştirme Temelleri",
    ],
    description:
      "Katılımcıların C# programlama dilini kullanarak farklı platformlarda uygulama geliştirebilecek eğitimlere katılma yeterliliğini elde etmelerini sağlamaktır.",
  },
  {
    id: 12,
    title: "Proje Yönetim Temelleri",
    organization: "BTK Akademi",
    date: "18.09.2024",
    duration: "1 Saat",
    image: "./images/certificates/proje_yonetim_temelleri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=eK1hyx1mNW",
    category: "kisiselgelisim",
    skills: [
      "Proje farkındalığı",
      "Proje yönetebilme",
      "Proje bilgilerini projelerde uygulayabilme",
      "Proje çalışmalarında gerekli işleri yapabilme",
    ],
    description:
      "Eğitimin amacı, Proje Yönetimi konusunda temel bilgilerin öğretilerek farkındalık sağlanması.",
  },
  {
    id: 13,
    title: "Problem Çözme Teknikleri",
    organization: "BTK Akademi",
    date: "02.10.2024",
    duration: "1 Saat",
    image: "./images/certificates/proje_cozme_teknikleri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=JoNfreNznJ",
    category: "kisiselgelisim",
    skills: [
      "Problem durumunu tanımlayabilme",
      "Sonuçları değerlendirebilme",
      "Bireysel problem çözme tekniklerini öğrenebilme",
      "İş-topluluk düzeninde yaratıcı problem çözme tekniklerini uygulayabilme",
    ],
    description:
      "Bu eğitimin amacı; problem çözme teknikleri hakkında bilgi verilerek günlük hayatta veya iş hayatında karşılan problemlerin analitik ve yaratıcı problem çözme teknikleri ile aşılmasıdır.",
  },
  {
    id: 14,
    title: "Etkili İletişim Stratejileri",
    organization: "BTK Akademi",
    date: "29.04.2025",
    duration: "1 Saat",
    image: "./images/certificates/etkili_iletisim_stratejileri.png",
    credentialUrl:
      "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=wmlFJP8pxq",
    category: "kisiselgelisim",
    skills: [
      "Doğru iletişim kurmayı keşfedebilme",
      "İletişim konusunda farkındalığını artırabilme",
      "İletişim eksikliğinin altında yatan sebepleri öğrenebiljme",
      "Topluluk önünde rahat konuşmasına katkıda bulunabilme",
      "Anlatma ve anlama becerilerini geliştirebilir",
    ],
    description:
      "Bu eğitimin amacı , katılımcıların iletişim kavramına yönelik farkındalık seviyesini artırmaktır. Anlamak ve anlaşılmak hususlarını doğru tespit ederek, başarılı bir iletişim kurabilmek için hangi hususlara dikkat edilmesi gerektiğinin öğrenilmesi hedeflenmektedir.",
  },
];

export interface Category {
  id: string;
  label: string;
  count: number;
}

export const getCategories = (certs: Certificate[]): Category[] => [
  { id: "all", label: "Tüm Sertifikalar", count: certificates.length },
  {
    id: "mobile",
    label: "Mobil Geliştirme",
    count: certificates.filter((c) => c.category === "mobile").length,
  },
  {
    id: "web",
    label: "Web Geliştirme",
    count: certificates.filter((c) => c.category === "web").length,
  },
  {
    id: "desktop",
    label: "Masaüstü Geliştirme",
    count: certificates.filter((c) => c.category === "desktop").length,
  },
  {
    id: "yapayzeka",
    label: "Yapay Zeka",
    count: certificates.filter((c) => c.category === "yapayzeka").length,
  },
  {
    id: "siber",
    label: "Siber",
    count: certificates.filter((c) => c.category === "siber").length,
  },
  {
    id: "bilisim",
    label: "Temel Bilişimler",
    count: certificates.filter((c) => c.category === "bilisim").length,
  },
  {
    id: "kisiselgelisim",
    label: "Kişisel Gelişim",
    count: certificates.filter((c) => c.category === "kisiselgelisim").length,
  },
];
