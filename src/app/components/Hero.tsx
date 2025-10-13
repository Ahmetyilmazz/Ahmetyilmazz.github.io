"use client";
import { Smartphone, Code, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1a2f] via-[#112244] to-[#1a2b4c] pt-16 w-full relative overflow-hidden"
    >
      {/* Arka plan parlayan efekt */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,196,255,0.2),transparent_60%)]" />

      <div className="w-full px-6 text-center z-10">
        <div className="w-full max-w-5xl mx-auto">
          {/* Profil Fotoğrafı (Animasyonlu ve Parlayan Gradient Çerçeve) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] p-[3px] shadow-[0_0_30px_rgba(0,196,255,0.4)] hover:shadow-[0_0_45px_rgba(0,255,176,0.5)] transition-shadow duration-500"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-full rounded-full overflow-hidden"
            >
              <img
                src="./images/profil.jpg"
                alt="Ahmet Yılmaz"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* İsim */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] bg-clip-text text-transparent">
              Ahmet YILMAZ
            </span>
          </motion.h1>

          {/* Rol */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12"
          >
            Flutter Developer
          </motion.p>

          {/* Yetenek Kartları */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Smartphone className="text-[#00C4FF] w-14 h-14 mb-4" />,
                title: "Mobil Geliştirme",
                text: "Flutter ile Android ve iOS için performanslı ve kullanıcı dostu uygulamalar geliştiriyorum.",
              },
              {
                icon: <Code className="text-[#00C4FF] w-14 h-14 mb-4" />,
                title: "Web Geliştirme",
                text: "React ve Next.js ile modern, hızlı ve etkileşimli web arayüzleri geliştiriyorum.",
              },
              {
                icon: <Monitor className="text-[#00C4FF] w-14 h-14 mb-4" />,
                title: "Desktop Geliştirme",
                text: "Flutter ve Electron.js kullanarak masaüstü uygulamaları oluşturuyorum.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1b2d50]/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#00C4FF]/10 hover:border-[#00C4FF]/30 flex flex-col items-center text-center"
              >
                {item.icon}
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
