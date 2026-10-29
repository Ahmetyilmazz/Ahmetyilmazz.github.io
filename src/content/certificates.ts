import type { Localized } from "@/i18n/config";

export type CertificateCategory = "mobile" | "web" | "desktop" | "ai" | "security" | "it" | "personal";

export interface Certificate {
  id: string;
  title: Localized;
  organization: Localized;
  /** ISO tarih (YYYY-MM-DD) */
  date: string;
  hours: number;
  image: string;
  credentialUrl: string;
  category: CertificateCategory;
  skills: Localized<string[]>;
  featured?: boolean;
}

const btk: Localized = { tr: "BTK Akademi", en: "BTK Academy" };
const btkVerify = (id: string) =>
  `https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=${id}`;

export const certificates: Certificate[] = [
  {
    id: "google-flutter",
    title: { tr: "Google Flutter ile Mobil Uygulama", en: "Mobile App Development with Google Flutter" },
    organization: btk,
    date: "2024-09-12",
    hours: 20,
    image: "/images/certificates/google_flutter_ile_mobil_uygulama.webp",
    credentialUrl: btkVerify("VP1cJdjxDl"),
    category: "mobile",
    skills: {
      tr: ["Flutter temelleri", "Dart", "Nesne yönelimli programlama", "Widget ve layout", "State management", "Firebase", "BLoC deseni"],
      en: ["Flutter fundamentals", "Dart", "Object-oriented programming", "Widgets and layout", "State management", "Firebase", "BLoC pattern"],
    },
    featured: true,
  },
  {
    id: "dart",
    title: { tr: "Dart Programlama Dili", en: "Dart Programming Language" },
    organization: btk,
    date: "2024-08-28",
    hours: 11,
    image: "/images/certificates/dart_programlama.webp",
    credentialUrl: btkVerify("2Nwc0W4ywA"),
    category: "mobile",
    skills: {
      tr: ["Algoritma kurma", "Nesne yönelimli programlama", "Null safety", "Fonksiyonel programlama", "Flutter altyapısı"],
      en: ["Algorithmic thinking", "Object-oriented programming", "Null safety", "Functional programming", "Foundations for Flutter"],
    },
    featured: true,
  },
  {
    id: "html5",
    title: { tr: "HTML5 ile Web Geliştirme", en: "Web Development with HTML5" },
    organization: btk,
    date: "2025-02-10",
    hours: 14,
    image: "/images/certificates/html5_ile_web_gelistirme.webp",
    credentialUrl: btkVerify("6mqFNMnj0g"),
    category: "web",
    skills: {
      tr: ["HTML", "SEO ve semantik web", "Site yayınlama", "Form, link ve menüler", "Kişisel web sitesi"],
      en: ["HTML", "SEO and semantic web", "Publishing a site", "Forms, links and menus", "Personal website"],
    },
  },
  {
    id: "css",
    title: { tr: "CSS Temelleri", en: "CSS Fundamentals" },
    organization: btk,
    date: "2025-02-10",
    hours: 10,
    image: "/images/certificates/css_temelleri.webp",
    credentialUrl: btkVerify("mKEhvZ27lK"),
    category: "web",
    skills: {
      tr: ["CSS", "CSS kutu modeli", "Duyarlı tasarım", "Kurumsal web sitesi tasarımı"],
      en: ["CSS", "CSS box model", "Responsive design", "Business website design"],
    },
  },
  {
    id: "javascript",
    title: { tr: "JavaScript Temelleri", en: "JavaScript Fundamentals" },
    organization: btk,
    date: "2025-02-28",
    hours: 26,
    image: "/images/certificates/javascript_temelleri.webp",
    credentialUrl: btkVerify("xr4t0eB2MA"),
    category: "web",
    skills: {
      tr: ["JavaScript", "Algoritma", "Nesne tabanlı programlama", "Diziler", "DOM", "Form işlemleri", "Hata yönetimi"],
      en: ["JavaScript", "Algorithms", "Object-oriented programming", "Arrays", "DOM", "Form handling", "Error handling"],
    },
    featured: true,
  },
  {
    id: "csharp",
    title: { tr: "C# Programlama", en: "C# Programming" },
    organization: btk,
    date: "2025-04-29",
    hours: 11,
    image: "/images/certificates/csharp_programlama.webp",
    credentialUrl: btkVerify("OKMhqlkzKP"),
    category: "desktop",
    skills: {
      tr: ["C# temelleri", "Web geliştirme temelleri", "Mobil geliştirme temelleri", "Masaüstü geliştirme temelleri"],
      en: ["C# fundamentals", "Web development basics", "Mobile development basics", "Desktop development basics"],
    },
  },
  {
    id: "ai-business",
    title: { tr: "Yapay Zekanın İş Dünyasına Etkisi", en: "The Impact of AI on Business" },
    organization: { tr: "Toplum Gönülleri Vakfı", en: "Community Volunteers Foundation (TOG)" },
    date: "2024-09-20",
    hours: 1,
    image: "/images/certificates/yapay_zeka.webp",
    credentialUrl: "https://verified.sertifier.com/tr/verify/36082284064373/",
    category: "ai",
    skills: {
      tr: ["Yapay zeka", "Makine öğrenmesi", "Doğal dil işleme (NLP)", "Yapay zekanın geleceği"],
      en: ["Artificial intelligence", "Machine learning", "Natural language processing (NLP)", "The future of AI"],
    },
  },
  {
    id: "cyber-security",
    title: { tr: "Siber Güvenliğe Giriş", en: "Introduction to Cyber Security" },
    organization: btk,
    date: "2024-08-19",
    hours: 4,
    image: "/images/certificates/siber_guvenlige_giris.webp",
    credentialUrl: btkVerify("EoPfbVp9aA"),
    category: "security",
    skills: {
      tr: ["Siber güvenlik kavramları", "Sosyal mühendislik", "Sızma testleri", "Güvenli kod ve risk yönetimi"],
      en: ["Cyber security concepts", "Social engineering", "Penetration testing", "Secure code and risk management"],
    },
  },
  {
    id: "it-intro",
    title: { tr: "Bilgi Teknolojilerine Giriş", en: "Introduction to Information Technology" },
    organization: btk,
    date: "2024-08-31",
    hours: 4,
    image: "/images/certificates/bilgi_teknolojilerine_giris.webp",
    credentialUrl: btkVerify("D2xh19XVBo"),
    category: "it",
    skills: {
      tr: ["Yazılım uzmanlık alanları", "Yazılımcının araçları", "Donanım temelleri"],
      en: ["Software specialisations", "Developer tools", "Hardware basics"],
    },
  },
  {
    id: "networking",
    title: { tr: "Temel Ağ Teknolojileri", en: "Networking Fundamentals" },
    organization: btk,
    date: "2024-09-12",
    hours: 2,
    image: "/images/certificates/temel_ag_teknolojileri.webp",
    credentialUrl: btkVerify("GoDfnqjrOV"),
    category: "it",
    skills: {
      tr: ["Ağ bileşenleri ve topolojiler", "TCP/IP", "OSI modeli", "Ethernet anahtarlama", "Ağ protokolleri"],
      en: ["Network components and topologies", "TCP/IP", "OSI model", "Ethernet switching", "Network protocols"],
    },
  },
  {
    id: "operating-systems",
    title: { tr: "İşletim Sistemlerine Giriş", en: "Introduction to Operating Systems" },
    organization: btk,
    date: "2024-09-17",
    hours: 1,
    image: "/images/certificates/isletim_sistemlerine_giris.webp",
    credentialUrl: btkVerify("1kZComKAnz"),
    category: "it",
    skills: {
      tr: ["İşletim sistemi tarihçesi", "Temel kavramlar", "İşletim sistemi türleri"],
      en: ["History of operating systems", "Core concepts", "Types of operating systems"],
    },
  },
  {
    id: "project-management",
    title: { tr: "Proje Yönetim Temelleri", en: "Project Management Fundamentals" },
    organization: btk,
    date: "2024-09-18",
    hours: 1,
    image: "/images/certificates/proje_yonetim_temelleri.webp",
    credentialUrl: btkVerify("eK1hyx1mNW"),
    category: "personal",
    skills: {
      tr: ["Proje farkındalığı", "Proje yönetimi", "Proje süreçlerinde görev alma"],
      en: ["Project awareness", "Project management", "Contributing to project work"],
    },
  },
  {
    id: "problem-solving",
    title: { tr: "Problem Çözme Teknikleri", en: "Problem Solving Techniques" },
    organization: btk,
    date: "2024-10-02",
    hours: 1,
    image: "/images/certificates/proje_cozme_teknikleri.webp",
    credentialUrl: btkVerify("JoNfreNznJ"),
    category: "personal",
    skills: {
      tr: ["Problemi tanımlama", "Sonuçları değerlendirme", "Yaratıcı problem çözme"],
      en: ["Defining the problem", "Evaluating outcomes", "Creative problem solving"],
    },
  },
  {
    id: "communication",
    title: { tr: "Etkili İletişim Stratejileri", en: "Effective Communication Strategies" },
    organization: btk,
    date: "2025-04-29",
    hours: 1,
    image: "/images/certificates/etkili_iletisim_stratejileri.webp",
    credentialUrl: btkVerify("wmlFJP8pxq"),
    category: "personal",
    skills: {
      tr: ["Doğru iletişim kurma", "İletişim farkındalığı", "Topluluk önünde konuşma"],
      en: ["Communicating clearly", "Communication awareness", "Public speaking"],
    },
  },
];

export const certificateCategories: CertificateCategory[] = ["mobile", "web", "desktop", "ai", "security", "it", "personal"];
