import React from "react";
import profil from "../assets/profil.jpg";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Hakkımda</h2>
      <div className="row align-items-center">
        {/* Sol taraf: Görsel */}
        <div className="col-md-4 text-center">
          <img
            src={profil}
            alt="Profil"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "250px" }}
          />
        </div>

        {/* Sağ taraf: Metin */}
        <div className="col-md-8">
          <p>Merhaba!</p>
          <p>
            Ben Ahmet Yılmaz. Necmettin Erbakan Üniversitesi Matematik
            Bilgisayar bilimleri bölümü mezunu ve tutkulu bir Flutter
            geliştiricisiyim. Akademik kariyerim boyunca, matematiksel analiz,
            algoritmalar ve veri yapıları üzerine güçlü bir temel oluştururken,
            yazılım konusunda da kendimi geliştirdim.
          </p>
          <p>
            Özellikle mobil uygulama geliştirme alanında büyük bir ilgiye
            sahibim ve Flutter kullanarak çeşitli projeler geliştirdim.
            Kullanıcı dostu ve performans odaklı mobil uygulamalar geliştirme
            sürecinde öğrendiğim modern teknikleri ve en iyi uygulamaları
            projelerime uygulamaktan büyük keyif alıyorum.
          </p>
          <p>
            Problem çözme ve analitik düşünme yeteneklerimi yazılım geliştirme
            süreçlerinde etkin bir şekilde kullanıyorum. Aynı zamanda, farklı
            teknolojileri öğrenmeye açık biriyim ve sürekli olarak kendimi
            geliştirmeye çalışıyorum. Teknik becerilerimin yanı sıra, disiplinli
            ve detaylara önem veren bir yapıya sahibim. Kendi projelerimde
            öğrendiklerimi hayata geçirerek, yenilikçi çözümler geliştirmeye ve
            kullanıcı deneyimini en üst düzeye çıkarmaya odaklanıyorum.
          </p>
          <p>
            Kariyerime, mobil uygulama geliştirme alanında kendimi daha da
            geliştirebileceğim ve öğrendiklerimi gerçek dünya projelerine
            uygulayabileceğim bir rolde devam etmek istiyorum. Hedefim, hem
            bireysel hem de takım olarak başarılı projelere imza atarak,
            teknoloji dünyasında değer yaratmak.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
