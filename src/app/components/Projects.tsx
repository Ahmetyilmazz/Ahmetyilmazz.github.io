"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowRight, X } from "lucide-react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showVideo, setShowVideo] = useState(false);

  const projects = [
    {
      title: "English Learn",
      description:
        "İngilizce öğrenirken en büyük zorluklardan biri düzenli tekrar yapmaktı. Bu ihtiyacı çözmek için Flutter ile kendi İngilizce Kart Uygulamamı geliştirdim.",
      technologies: [
        "Flutter",
        "Google AdMob Integration",
        "SQLite ",
        "State Management",
      ],
      github: "https://github.com/Ahmetyilmazz/English-Learn",
      live: "/videos/english_word.mp4",
      image: "/images/english_learn.png",
    },
    {
      title: "Otoyol Rehberim",
      description:
        "Bu projede; kullanıcıların anlık hızı ile zamanla aldıkları yol takibi yapılmaktadır. Kullanıcı bu detayları takip edebilir ve hızını süreye bağlı olarak değiştirebilir. Aynı zaman da otoyollarda bulunan gişeler arası süre zorunluluğu göz önüne alınarak kullanıcıya bu gişeler arasındaki mesafe bilgileri ve bu mesafeyi alabileceği süreler hesaplanarak bildirilir. Kullanıcı da tekrardan bu bilgilere göre hızını ve süreyi ayarlayabilir.",
      technologies: [
        "Flutter",
        "JSON",
        "API Integration",
        "State Management",
        "geolocator ",
        "latlong2",
        "geocoding",
        "flutter_map",
        "http",
      ],
      github: "https://github.com/Ahmetyilmazz/Otoyol-Rehberi",
      live: "/videos/otoyol_rehberim.mp4",
      image: "/images/otoyol_rehberim.png",
    },
    {
      title: "Servis Takip Yazılımı",
      description:
        "Kullanıcıların ürünleri kolayca eklemesine, güncellemesine ve yönetmesine olanak tanıyan ve aynı zamanda satış süreçlerini verimli bir şekilde takip eden bir uygulama oluşturmaktı. Kullanıcı dostu arayüz ve görsel özelleştirmeler kullanıcı deneyimini iyileştirmek için tasarlandı.",
      technologies: [
        "Flutter",
        "Firebase Authentication",
        "Firebase Firestore",
        "API Integration",
      ],
      github: "https://github.com/Ahmetyilmazz/ServisTakip",
      live: "/videos/servis_takip.mp4",
      image: "/images/servis_takip.png",
    },
    {
      title: "Takım Uygulaması",
      description:
        " bir spor kulübünün mobil uygulamasını tasarlamak. Kullanıcılar bu mobil uygulama sayesinde spor kulübüyle ilgili habeler, gelecek maçlar, oyuncular, anlık maç takibi, fikstür, anlık skorlar gibi bilgilere direkt erişim yapabilecek.",
      technologies: ["Flutter", "Google Auth", "UI / UX ", "RestFul API"],
      github: "https://github.com/Ahmetyilmazz/TeamApp",
      live: "/videos/team_app.mp4",
      image: "/images/team_app.png",
    },
    {
      title: "Anlık Konum Takibi",
      description:
        "Girilen tokene göre http paketi ile sunucuya anlık olarak konum gönderimi yapılmaktadır. Sunucuya istek atılıp gelen veriye göre de konum gönderme sıklığı değişmektedir. Uygulama arka planda da sürekli olarak konum gönderebilmektedir. Eğer konum gönderimi durdurmak istenilirse uygulama içerisinden 'Durdur' butonuyla servis durdurulabilir. Aynı zamanda sunucudan gelen istek de bildirim varsa kullanıcıya bu bildirim de gösterilmektedir.",
      technologies: [
        "Flutter",
        "flutter_background",
        "geolocator",
        "geocoding",
        "http",
        "shared_preferences",
        "flutter_local_notifications",
      ],
      github: "https://github.com/Ahmetyilmazz/Instant_Location_Tracking",
      live: "/",
      image: "/images/anlik_konum.png",
    },
    {
      title: "Görevlerim - Tablet",
      description:
        "Bu uygulama, ailelerin çocuklarının günlük, haftalık ve aylık görevlerini eğlenceli bir şekilde takip edebilmesini sağlar. Ebeveynler çocuklarına görevler atayabilir, çocuklar da bu görevleri tamamladıkça puan veya rozet kazanarak motive olurlar. Oyunlaştırma ve animasyon desteğiyle çocukların sorumluluk bilincini geliştirirken ebeveynlerle etkileşimli bir deneyim sunar.",
      technologies: [
        "Flutter",
        "sqflite",
        "path",
        "image_picker",
        "shared_preferences",
        "geolocator",
        "confetti",
        "lottie",
        "http",
        "provider",
      ],
      github: "https://github.com/Ahmetyilmazz/Gorevlerim",
      live: "/",
      image: "/images/cocuk_takip.png",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // ESC tuşuyla video kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showVideo) {
          setShowVideo(false);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showVideo, selectedProject]); // DÜZELTİLDİ: nested array yerine normal array

  // Video modal'ını kapat
  const closeVideoModal = () => {
    setShowVideo(false);
  };

  // Proje modal'ını kapat
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0a1a2f] to-[#112244] w-full relative overflow-hidden"
    >
      {/* Arkaplan dekorasyonları */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00C4FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00FFB0]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Başlık - Güncellendi */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#00C4FF] via-[#00FFB0] to-[#00C4FF] bg-clip-text text-transparent bg-size-200 animate-gradient">
            Öne Çıkan Projelerim
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Modern teknolojilerle geliştirdiğim,{" "}
            <span className="text-[#00C4FF]">yaratıcı çözümler</span> ve
            <span className="text-[#00FFB0]"> kullanıcı deneyimleri</span> sunan
            projelerim
          </p>
        </div>

        {/* Proje Kartları - Güncellendi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative bg-gradient-to-br from-[#132b4a] to-[#0a1a2f] rounded-2xl border border-gray-700/50 hover:border-[#00C4FF]/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#00C4FF]/20"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-transparent to-transparent opacity-60 z-10"></div>

              {/* Görsel */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4 z-20">
                  <span className="text-white font-semibold text-sm bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] px-3 py-1.5 rounded-full shadow-lg">
                    👆 Detayları İncele
                  </span>
                </div>

                {/* Proje numarası */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold border border-white/20">
                  {index + 1}
                </div>
              </div>

              {/* Bilgiler */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C4FF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-[#00C4FF]/20 rounded-full text-[#00C4FF] font-medium hover:bg-[#00C4FF]/10 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-gray-600 rounded-full text-gray-400 font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Alt çizgi efekti */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Buton - Güncellendi */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] hover:from-[#00FFB0] hover:to-[#00C4FF] text-[#0a1a2f] font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">
              {showAll ? "Daha Az Göster" : "Tüm Projeleri Gör"}
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          {/* İstatistik */}
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              <span>Toplam {projects.length} Proje</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00FFB0] rounded-full"></div>
              <span>
                {projects.reduce(
                  (acc, proj) => acc + proj.technologies.length,
                  0
                )}
                + Paket
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Güncellendi */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 transition-all duration-500"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-6xl bg-gradient-to-br from-[#0f1e32] via-[#132b4a] to-[#0a1829] rounded-3xl p-8 shadow-2xl border border-[#00C4FF]/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Arkaplan dekorasyon */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00C4FF]/10 rounded-full blur-4xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00FFB0]/10 rounded-full blur-4xl animate-pulse delay-1000"></div>

            {/* Kapatma butonu */}
            <button
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-xl border border-red-400/30 text-white hover:text-red-300 transition-all duration-300 group hover:scale-110 hover:rotate-90"
              onClick={closeProjectModal}
            >
              <X size={20} className="transition-transform duration-300" />
            </button>

            {/* İçerik grid */}
            <div className="relative z-10 grid xl:grid-cols-2 gap-8">
              {/* Sol taraf - Geliştirildi */}
              <div className="space-y-6">
                <div className="relative group group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-[#00C4FF]/30 transition-all duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-sm font-medium bg-black/70 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                      🎯 {selectedProject.title}
                    </span>
                  </div>
                </div>

                {/* Teknoloji etiketleri - Geliştirildi */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
                  <h4 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00C4FF] rounded-full animate-pulse"></div>
                    KULLANILANLAR
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map(
                      (tech: string, i: number) => (
                        <span
                          key={i}
                          className="text-sm px-4 py-2 bg-gradient-to-r from-[#00C4FF]/10 to-[#00FFB0]/10 border border-[#00C4FF]/30 rounded-xl text-[#00C4FF] font-semibold backdrop-blur-sm hover:scale-105 hover:bg-[#00C4FF]/20 transition-all duration-300 cursor-default shadow-lg"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Sağ taraf - Geliştirildi */}
              <div className="space-y-6">
                {/* Başlık ve Açıklama */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </h3>

                    <div className="h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-full mb-6 shadow-lg"></div>

                    <p className="text-gray-200 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* İstatistikler - Geliştirildi */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 text-center border border-[#00C4FF]/20 hover:border-[#00C4FF]/40 transition-all duration-500 hover:scale-105 group">
                    <div className="text-3xl font-bold text-[#00C4FF] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {selectedProject.technologies.length}+
                    </div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">
                      PAKET
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 text-center border border-[#00FFB0]/20 hover:border-[#00FFB0]/40 transition-all duration-500 hover:scale-105 group">
                    <div className="text-3xl font-bold text-[#00FFB0] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {selectedProject.features?.length || "10+"}
                    </div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold">
                      Özellik
                    </div>
                  </div>
                </div>

                {/* Butonlar - Geliştirildi */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-black/40 hover:bg-black/60 backdrop-blur-lg text-white px-8 py-4 rounded-2xl border border-white/20 hover:border-[#00C4FF]/40 hover:scale-105 transition-all duration-500 group flex-1 shadow-lg"
                  >
                    <Github
                      size={22}
                      className="group-hover:scale-110 group-hover:text-[#00C4FF] transition-all duration-300"
                    />
                    <span className="font-semibold">GitHub'da Gör</span>
                  </a>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] hover:from-[#00FFB0] hover:to-[#00C4FF] text-[#0a1a2f] font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group flex-1"
                  >
                    <span>🎬 Demo Videosu</span>
                  </button>
                </div>

                {/* Ek bilgi */}
                <div className="text-center pt-4">
                  <p className="text-gray-400 text-sm">
                    💡 Proje detaylarını incelemek için bağlantıları kullanın
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal - Geliştirildi */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[60] p-4 transition-all duration-500"
          onClick={closeVideoModal}
        >
          <div
            className="relative bg-gradient-to-br from-[#0a1a2f] to-[#132b4a] rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl border border-[#00C4FF]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-xl border border-red-400/30 text-white hover:text-red-300 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={24} />
            </button>

            <div className="p-2">
              <video
                src={selectedProject.live}
                controls
                autoPlay
                className="w-full h-[70vh] object-contain rounded-b-2xl"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <p className="text-white text-sm font-medium">
                🎥 {selectedProject.title} - Demo Videosu
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
