"use client";

import { useState, useEffect } from "react";
import {
  Award,
  ExternalLink,
  Filter,
  X,
  Calendar,
  Clock,
  Search,
} from "lucide-react";
import { certificates, getCategories } from "./certificates_data";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Kategorileri dinamik olarak alalım
  const categories = getCategories(certificates);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCertificate) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedCertificate]);

  const filteredCertificates = certificates.filter((cert) => {
    const matchesFilter = filter === "all" || cert.category === filter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Modal dışına tıklama ile kapatma
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-b from-[#0A1A2F] to-[#09162a] w-full text-gray-300 relative overflow-hidden"
    >
      {/* Arkaplan dekorasyonları */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C4FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFB0]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-16">
          <Award size={18} className="text-[#00FFB0]" />
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00C4FF] via-[#00FFB0] to-[#00C4FF] bg-clip-text text-transparent bg-size-200 animate-gradient">
            SERTİFİKALAR
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sürekli öğrenme ve kendimi geliştirme yolculuğumda edindiğim
            <span className="text-[#00C4FF] font-semibold">
              {" "}
              sertifikalar
            </span>{" "}
            ve
            <span className="text-[#00FFB0] font-semibold"> başarılar</span>
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Toplam Sertifika",
              value: certificates.length,
              color: "from-[#00C4FF] to-[#00FFB0]",
            },
            {
              label: "Farklı Kategori",
              value: new Set(certificates.map((c) => c.category)).size,
              color: "from-[#00FFB0] to-[#00C4FF]",
            },
            {
              label: "Eğitim Saati",
              value: certificates.reduce(
                (acc, cert) => acc + parseInt(cert.duration),
                0
              ),
              color: "from-[#00C4FF] to-[#00FFB0]",
            },
            {
              label: "Farklı Kurum",
              value: new Set(certificates.map((c) => c.organization)).size,
              color: "from-[#00FFB0] to-[#00C4FF]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:scale-105 transition-all duration-300"
            >
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}+
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filtreleme ve Arama */}
        <div className="mb-12 space-y-6">
          {/* Arama */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Sertifika, kurum veya teknoloji ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#132b46]/60 backdrop-blur-lg border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00C4FF]/40 transition-all duration-300"
            />
          </div>

          {/* Kategori Filtreleri */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] text-[#0a1a2f] shadow-lg shadow-[#00C4FF]/20"
                    : "bg-[#132b46]/60 backdrop-blur-lg border border-white/10 text-gray-300 hover:border-[#00C4FF]/40"
                }`}
              >
                <Filter size={16} />
                {category.label}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    filter === category.id
                      ? "bg-[#0a1a2f]/30"
                      : "bg-[#00C4FF]/20"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sertifika Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              onClick={() => setSelectedCertificate(certificate)}
              className="group cursor-pointer bg-gradient-to-br from-[#132b46]/60 to-[#0a1a2f]/80 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-[#00C4FF]/40 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Görsel */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                  <span className="text-white font-semibold text-sm bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] px-3 py-1.5 rounded-full shadow-lg">
                    👆 Detayları Gör
                  </span>
                </div>

                {/* Kategori etiketi */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/20">
                    {
                      categories.find((c) => c.id === certificate.category)
                        ?.label
                    }
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C4FF] transition-colors duration-300 line-clamp-2">
                  {certificate.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Award size={16} className="text-[#00FFB0]" />
                  <span className="text-sm font-medium">
                    {certificate.organization}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{certificate.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{certificate.duration}</span>
                  </div>
                </div>

                {/* Teknoloji Etiketleri */}
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-[#00C4FF]/10 border border-[#00C4FF]/20 rounded-full text-[#00C4FF] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-600/20 border border-gray-600 rounded-full text-gray-400 font-medium">
                      +{certificate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Alt çizgi efekti */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Sonuç bulunamadı */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16">
            <Award size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Sertifika bulunamadı
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Arama kriterlerinize uygun sertifika bulunamadı. Lütfen farklı bir
              filtre veya arama terimi deneyin.
            </p>
          </div>
        )}
      </div>

      {/* Sertifika Detay Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 transition-all duration-500 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <div
            className="relative w-full max-w-2xl sm:max-w-6xl bg-gradient-to-br from-[#0f1e32] via-[#132b4a] to-[#0a1829] rounded-xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-[#00C4FF]/20 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Arkaplan dekorasyon */}
            <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-40 h-40 sm:w-64 sm:h-64 bg-[#00C4FF]/10 rounded-full blur-2xl sm:blur-4xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 sm:-bottom-32 sm:-left-32 w-40 h-40 sm:w-64 sm:h-64 bg-[#00FFB0]/10 rounded-full blur-2xl sm:blur-4xl animate-pulse delay-1000"></div>

            {/* Kapatma butonu */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-red-400/30 text-white hover:text-red-300 transition-all duration-300 group hover:scale-110 hover:rotate-90"
              onClick={closeModal}
              aria-label="Modalı kapat"
            >
              <X
                size={18}
                className="sm:w-5 sm:h-5 transition-transform duration-300"
              />
            </button>

            <div className="relative z-10 grid lg:grid-cols-2 gap-4 sm:gap-8">
              {/* Sol taraf - Görsel */}
              <div className="space-y-4 sm:space-y-6">
                <div className="relative group">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-48 sm:h-80 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                  />
                </div>

                {/* İstatistikler */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-black/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-[#00C4FF]/20 hover:border-[#00C4FF]/40 transition-all duration-500 hover:scale-105 group">
                    <Calendar
                      size={20}
                      className="mx-auto text-[#00C4FF] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-semibold">
                      YIL
                    </div>
                    <div className="text-white font-bold text-lg sm:text-xl mt-1">
                      {selectedCertificate.date}
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-[#00FFB0]/20 hover:border-[#00FFB0]/40 transition-all duration-500 hover:scale-105 group">
                    <Clock
                      size={20}
                      className="mx-auto text-[#00FFB0] mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-semibold">
                      SÜRE
                    </div>
                    <div className="text-white font-bold text-lg sm:text-xl mt-1">
                      {selectedCertificate.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ taraf - İçerik */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {selectedCertificate.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Award size={20} className="text-[#00FFB0]" />
                    <span className="text-base sm:text-lg text-gray-300 font-semibold">
                      {selectedCertificate.organization}
                    </span>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] rounded-full mb-4 sm:mb-6 shadow-lg"></div>

                  <p className="text-gray-200 leading-relaxed text-sm sm:text-lg">
                    {selectedCertificate.description}
                  </p>
                </div>

                {/* Teknolojiler */}
                <div className="bg-black/30 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 shadow-lg sm:shadow-xl">
                  <h4 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00FFB0] rounded-full animate-pulse"></div>
                    KAZANILAN YETKİNLİKLER
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedCertificate.skills.map(
                      (skill: string, index: number) => (
                        <span
                          key={index}
                          className="text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#00C4FF]/10 to-[#00FFB0]/10 border border-[#00C4FF]/30 rounded-lg sm:rounded-xl text-[#00C4FF] font-semibold backdrop-blur-sm hover:scale-105 hover:bg-[#00C4FF]/20 transition-all duration-300 cursor-default shadow-lg"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Butonlar */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] hover:from-[#00FFB0] hover:to-[#00C4FF] text-[#0a1a2f] font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group flex-1"
                  >
                    <ExternalLink
                      size={18}
                      className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm sm:text-base">Doğrula</span>
                  </a>
                </div>

                {/* Kısayol bilgisi */}
                <div className="text-center pt-3 sm:pt-4">
                  <p className="text-gray-400 text-xs sm:text-sm">
                    💡 ESC tuşuna basarak veya dışarı tıklayarak
                    kapatabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
