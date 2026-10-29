export const site = {
  name: "Ahmet YILMAZ",
  role: "Flutter Developer",
  url: "https://ahmetyilmazz.github.io",
  email: "ahmeet.ylmzzz@gmail.com",
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSf__dPSvdqAOGCHU9_pK_aBZhkJlzLOG9CZXBwVzCiCncjNMg/viewform",
  socials: {
    github: "https://github.com/Ahmetyilmazz",
    linkedin: "https://www.linkedin.com/in/ahmeeet/",
    googlePlay: "https://play.google.com/store/apps/developer?id=Ahmet+YIILMAZ",
  },
  avatar: "/images/profil-avatar.webp",
  photo: "/images/profil.webp",
} as const;

export const stack = {
  mobile: ["Dart", "Flutter", "Provider", "Lottie"],
  web: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  desktop: ["Flutter Desktop", "Electron.js"],
  data: ["Firebase", "SQLite", "REST API", "JSON", "Google AdMob"],
} as const;

export type StackGroup = keyof typeof stack;
