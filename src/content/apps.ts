import { sameInAll, type Localized } from "@/i18n/config";
import { site } from "./site";

export type AppCategory = "game" | "education" | "family" | "tools";

/** Google Play'de yayında olan uygulamalar. Ad ve açıklamalar mağaza sayfasındaki resmi TR/EN metinlerdir. */
export interface PlayApp {
  packageId: string;
  name: Localized;
  tagline: Localized;
  category: AppCategory;
  icon: Localized;
  /** Bir şirket adına geliştirildiyse şirketin adı. */
  developedFor?: string;
}

export const playStoreUrl = (packageId: string) => `https://play.google.com/store/apps/details?id=${packageId}`;

export const oreltek = {
  name: "ORELTEK",
  playStore: "https://play.google.com/store/apps/dev?id=5885838324595841422",
} as const;

const personalApps: PlayApp[] = [
  {
    packageId: "app.ahmetylmzzz.words",
    name: sameInAll("Learn English"),
    tagline: {
      tr: "Kelimeleri kartlarla öğren! Sesli dinleme, testler ve detaylı sonuç analizi.",
      en: "Learn words with flashcards! Audio listening, tests and detailed result analysis.",
    },
    category: "education",
    icon: sameInAll("/images/apps/oxford-4000.webp"),
  },
  {
    packageId: "com.ahmetylmzzz.learnWord",
    name: { tr: "11 Dilde Kelime Öğren", en: "Learn Words in 11 Languages" },
    tagline: {
      tr: "Sesli telaffuz ve eşleştirme oyunlarıyla yabancı dil öğrenmek artık çok kolay.",
      en: "Learn a foreign language with audio pronunciation and matching games.",
    },
    category: "education",
    icon: sameInAll("/images/apps/learn-words.webp"),
  },
  {
    packageId: "app.ahmetylmzzz.matematik",
    name: { tr: "Temel Matematik", en: "Basic Math: Fun Adventure" },
    tagline: {
      tr: "Matematiği sevdiren eğlenceli macera! Topla, çıkar ve rekorlar kır.",
      en: "A fun math adventure that makes you love math! Add, subtract and break records.",
    },
    category: "education",
    icon: sameInAll("/images/apps/temel-matematik.webp"),
  },
  {
    packageId: "app.ahmetylmzzz.solo_test",
    name: sameInAll("Solo Test"),
    tagline: {
      tr: "Zekanı test etmeye hazır mısın? Stratejini kur, en az piyonu bırak.",
      en: "Test your intelligence. Plan your strategy and leave the fewest pegs.",
    },
    category: "game",
    icon: sameInAll("/images/apps/solo-test.webp"),
  },
];

const companyApps: PlayApp[] = [
  {
    packageId: "com.oreltek.gorevlerim",
    name: { tr: "Görevlerim: Çocuk Ödül Tablosu", en: "MyRoutines: Kids Reward Chart" },
    tagline: {
      tr: "Çocuklara rutin kazandıran görev ve ödül tablosu. Yıldız topla, ödülü kazan!",
      en: "Chore chart and reward app for kids. Build routines, earn stars, win rewards!",
    },
    category: "family",
    icon: { tr: "/images/apps/gorevlerim-tr.webp", en: "/images/apps/gorevlerim-en.webp" },
    developedFor: oreltek.name,
  },
  {
    packageId: "com.oreltek.tamga",
    name: sameInAll("ORELTEK Tamga"),
    tagline: {
      tr: "İnternetsiz çalışan, telefon kilidiyle korunan iki adımlı doğrulama kodları.",
      en: "Two-step verification codes that work offline, protected by your phone lock.",
    },
    category: "tools",
    icon: sameInAll("/images/apps/oreltek-tamga.webp"),
    developedFor: oreltek.name,
  },
  {
    packageId: "com.oreltek_solo_test",
    name: { tr: "Solo Test: Zeka Oyunu", en: "Peg Solitaire: Brain Puzzle" },
    tagline: {
      tr: "Klasik zeka oyunu Solo Test: 5 farklı tahta, 500 seviye ve günlük bulmaca.",
      en: "The classic peg solitaire brain game: 5 boards, 500 levels and a daily puzzle.",
    },
    category: "game",
    icon: sameInAll("/images/apps/oreltek-solo-test.webp"),
    developedFor: oreltek.name,
  },
];

export const appGroups = [
  { id: "personal", developer: null, storePage: site.socials.googlePlay, apps: personalApps },
  { id: "company", developer: oreltek.name, storePage: oreltek.playStore, apps: companyApps },
] as const;

export const playApps: PlayApp[] = [...personalApps, ...companyApps];
