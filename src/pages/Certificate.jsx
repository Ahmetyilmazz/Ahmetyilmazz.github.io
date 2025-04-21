import React from "react";

const certificates = [
  {
    title: "Google Flutter ile Mobil Uygulama",
    organization: "BTK Akademi",
    date: "12.09.2024",
    topics: [
      "Flutter Temelleri",
      "Temel Dart Programlama Dili",
      "Nesne Yönelimli Programlama Temelleri",
      "Widget, Layout Kavramları",
      "State Management",
      "Firebase",
      "BloC Deseni"
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=VP1cJdjxDl"
  },
  {
    title: "Dart Programlama Dili",
    organization: "BTK Akademi",
    date: "28.08.2024",
    topics: [
      "Algoritma Kurma Yeteneği",
      "Nesne Yönelimli Programlama Kavramları",
      "Null Safety ve Fonksiyonel Programlama",
      "Dart ile Program Geliştirme",
      "Flutter için gerekli altyapı"
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=2Nwc0W4ywA"
  },
  {
    title: "HTML5 İle Web Geliştirme",
    organization: "BTK Akademi",
    date: "10.02.2025",
    topics: [
      "Temel HTML Bilgisi",
      "SEO ve Semantik Web",
      "Site Yayınlama",
      "Temel CSS Bilgisi",
      "CSS Kutu Modeli",
      "Form, Link ve Menüler",
      "Kişisel Web Sitesi Uygulaması",
      "Javascript Farkındalığı",
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=6mqFNMnj0g",
  },
  {
    title: "CSS Temelleri",
    organization: "BTK Akademi",
    date: "20.02.2025",
    topics: [
      "Temel CSS Bilgisi",
      "CSS Kutu Modeli",
      "Tablo, Form ve Menü Biçimlendirme",
      "Grid View - Media Query",
      "CSS ile Temel Sayfa Düzeni (Layout)",
      "Responsive (Tepkisel) Sayfa Düzeni",
      "Kişisel Web Sitesi Tasarımı",
      "Kurumsal Web Sitesi Tasarımı",
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=mKEhvZ27lK",
  },
  {
    title: "Javascript Temelleri",
    organization: "BTK Akademi",
    date: "28.02.2025",
    topics: [
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
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0eB2MA",
  },
  {
    title: "Bilgi Teknolojilerine Giriş",
    organization: "BTK Akademi",
    date: "31.08.2024",
    topics: [
      "Yazılıma farklı bakış açıları kazandırır.",
      "Yazılım Uzmanlık Alanları",
      "Yazılım Uzmanının Araçları",
      "Yazılım İçi Donanım",
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=D2xh19XVBo",
  },
  {
    title: "İşletim Sistemlerine Giriş",
    organization: "BTK Akademi",
    date: "17.09.2024",
    topics: [
      "İşletim Sisteminin Tarihçesi",
      "İşletim Sistemi Temel Kavramlar",
      "Türlerine Göre İşletim Sistemleri",
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=1kZComKAnz",
  },
  {
    title: "Yapay Zekanın İş Dünyasına Etkisi Eğitimi",
    organization: "Toplum Gönülleri Vakfı",
    date: "20.09.2024",
    topics: [
      "Yapay Zeka",
      "Makine Öğrenmesi",
      "Yapay Zekanın Çalışma Prensibi",
      "Doğal Dil İşleme (NLP)",
      "Yapay Zekanın Geleceği",
    ],
    url: "https://verified.sertifier.com/tr/verify/36082284064373/",
  },
  {
    title: "Siber Güvenliğe Giriş",
    organization: "BTK Akademi",
    date: "19.08.2024",
    topics: [
      "Siber Güvenlik Kavramları",
      "Sosyal Mühendislik ve Sızma Testleri",
      "Siber Güvenlik Alanları",
      "Güvenli Kodlar ve Risk Yönetimi",
      "Siber Güvenlik Kariyeri",
    ],
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbVp9aA",
  },
  {
    title: "Temel Ağ Teknolojileri",
    organization: "BTK Akademi",
    date: "12.09.2024",
    topics: [
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
    url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=GoDfnqjrOV",
  },
];

function Certificates() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Sertifikalarım</h2>
      <div className="row">
        {certificates.map((cert, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card shadow-sm border-0 rounded-4 bg-light-subtle">
              <div className="card-body">
                <h4 className="card-title fw-bold">{cert.title}</h4>
                <p className="text-muted mb-1">Kuruluş: {cert.organization}</p>
                <p className="text-muted">Tarih: {cert.date}</p>
                <ul className="list-group list-group-flush mb-3">
                  {cert.topics.map((topic, i) => (
                    <li key={i} className="list-group-item">
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Sertifikayı Görüntüle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
