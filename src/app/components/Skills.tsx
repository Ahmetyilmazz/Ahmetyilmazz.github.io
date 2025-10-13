"use client";

import {
  SiCss3,
  SiDart,
  SiElectron,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

interface SkillItem {
  title: string;
  emoji: React.ReactNode;
}

export default function Skills() {
  const items: SkillItem[] = [
    {
      title: "Dart",
      emoji: <SiDart className="w-12 h-12 mx-auto text-[#00B4D8]" />,
    },
    {
      title: "Flutter",
      emoji: <SiFlutter className="w-12 h-12 mx-auto text-[#02569B]" />,
    },
    {
      title: "HTML",
      emoji: <SiHtml5 className="w-12 h-12 mx-auto text-[#E34F26]" />,
    },
    {
      title: "CSS",
      emoji: <SiCss3 className="w-12 h-12 mx-auto text-[#1572B6]" />,
    },
    {
      title: "JavaScript",
      emoji: <SiJavascript className="w-12 h-12 mx-auto text-[#F7DF1E]" />,
    },
    {
      title: "React",
      emoji: <SiReact className="w-12 h-12 mx-auto text-[#61DAFB]" />,
    },
    {
      title: "Next.js",
      emoji: <SiNextdotjs className="w-12 h-12 mx-auto text-white" />,
    },
    {
      title: "Electron.js",
      emoji: <SiElectron className="w-12 h-12 mx-auto text-[#47848F]" />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-[#0a1a2f] to-[#112244] text-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Yetenekler
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-300">
          Çeşitli teknolojilerle geliştirdiğim projeler, deneyim ve
          yeteneklerimi göstermektedir.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center gap-6 rounded-3xl bg-[#1a2b4c] p-10 text-center shadow-xl transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{item.emoji}</div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Alt vurgu çizgisi */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-full transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
