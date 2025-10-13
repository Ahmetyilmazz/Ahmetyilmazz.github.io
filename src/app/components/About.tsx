import {
  Code2,
  Database,
  Smartphone,
  Server,
  Target,
  Rocket,
  Heart,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0A1A2F] to-[#09162a] w-full text-gray-300 relative overflow-hidden"
    >
      {/* Arkaplan dekorasyonları */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C4FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFB0]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00C4FF]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık - Güncellendi */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00C4FF] via-[#00FFB0] to-[#00C4FF] bg-clip-text text-transparent bg-size-200 animate-gradient">
            Hakkımda
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tutkulu bir{" "}
            <span className="text-[#00C4FF] font-semibold">
              yazılım geliştirici
            </span>{" "}
            ve
            <span className="text-[#00FFB0] font-semibold">
              {" "}
              teknoloji meraklısı
            </span>
          </p>
        </div>

        {/* Ana İçerik Grid - Geliştirildi */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Sol Kolon - Geliştirildi */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-3xl p-8 border border-[#00C4FF]/20 shadow-2xl hover:shadow-[#00C4FF]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-2xl flex items-center justify-center">
                  <Rocket size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Yolculuğum</h3>
              </div>
              <p className="text-lg leading-relaxed text-justify text-gray-200">
                Ben{" "}
                <span className="text-[#00C4FF] font-semibold">
                  Ahmet YILMAZ
                </span>
                . Yazılım geliştirme serüvenime tutku ve merakla başladım. Her
                geçen gün kendimi geliştirerek modern teknolojileri öğrenmeye ve
                projelerimde uygulamaya devam ediyorum.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-3xl p-8 border border-[#00FFB0]/20 shadow-2xl hover:shadow-[#00FFB0]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00FFB0] to-[#00C4FF] rounded-2xl flex items-center justify-center">
                  <Smartphone size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mobil Tutkum</h3>
              </div>
              <p className="text-lg leading-relaxed text-justify text-gray-200">
                Özellikle{" "}
                <span className="text-[#00FFB0] font-semibold">
                  mobil uygulama geliştirme
                </span>{" "}
                alanında büyük bir ilgim var.{" "}
                <span className="text-[#00FFB0] font-semibold">Flutter</span>{" "}
                ile kullanıcı dostu, performans odaklı ve modern çözümler
                üretmeyi seviyorum.
              </p>
            </div>
          </div>

          {/* Sağ Kolon - Geliştirildi */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-3xl p-8 border border-[#00C4FF]/20 shadow-2xl hover:shadow-[#00C4FF]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-2xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Öğrenme Aşkı</h3>
              </div>
              <p className="text-lg leading-relaxed text-justify text-gray-200">
                Sürekli{" "}
                <span className="text-[#00C4FF] font-semibold">
                  öğrenmeyi ve gelişmeyi
                </span>{" "}
                hedefleyen bir geliştiriciyim. Yeni teknolojileri araştırmak,
                denemek ve bunları gerçek projelere entegre etmek benim için bir
                tutku.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-3xl p-8 border border-[#00FFB0]/20 shadow-2xl hover:shadow-[#00FFB0]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00FFB0] to-[#00C4FF] rounded-2xl flex items-center justify-center">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hedeflerim</h3>
              </div>
              <p className="text-lg leading-relaxed text-justify text-gray-200">
                Mobil uygulama geliştirme alanında uzmanlaşarak
                <span className="text-[#00FFB0] font-semibold">
                  {" "}
                  yenilikçi çözümler
                </span>{" "}
                üretmek.
              </p>
            </div>
          </div>
        </div>

        {/* Teknoloji Stack - Tamamen Yenilendi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Smartphone className="w-12 h-12 text-[#00C4FF]" />,
              label: "Flutter",
              gradient: "from-[#00C4FF] to-[#00FFB0]",
              delay: "0",
            },
            {
              icon: <Code2 className="w-12 h-12 text-[#00FFB0]" />,
              label: "React / Next.js",
              gradient: "from-[#00FFB0] to-[#00C4FF]",
              delay: "100",
            },
            {
              icon: <Database className="w-12 h-12 text-[#00C4FF]" />,
              label: "Firebase",
              gradient: "from-[#00C4FF] to-[#00FFB0]",
              delay: "200",
            },
            {
              icon: <Server className="w-12 h-12 text-[#00FFB0]" />,
              label: "REST API",
              gradient: "from-[#00FFB0] to-[#00C4FF]",
              delay: "300",
            },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#132b46]/80 to-[#0a1a2f]/90 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-[#00C4FF]/40 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* İkon container */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#132b46] to-[#0a1a2f] rounded-2xl flex items-center justify-center mb-6 border border-gray-700/50 group-hover:border-[#00C4FF]/30 transition-colors duration-300">
                  {tech.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00C4FF] transition-colors duration-300">
                  {tech.label}
                </h4>
              </div>

              {/* Alt çizgi efekti */}
              <div
                className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${tech.gradient} group-hover:w-full transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
