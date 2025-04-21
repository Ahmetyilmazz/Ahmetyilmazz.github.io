import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Resimler
import project1 from "../assets/turkce_sozluk_1.png";
import project2 from "../assets/NewtonRaphson.png";
import project3 from "../assets/market_app.png";
import project4 from "../assets/urunlerim.jpeg";
import project5 from "../assets/todo.png";
import project6 from "../assets/otoyol_rehberim.png";

const projectList = [
  {
    title: "NUMERİK ITERASYON",
    img: project2,
    url: "https://github.com/Ahmetyilmazz/Flutter_Apps/tree/main/bitirme_calismasi",
    description:
      "Proje Açıklaması: Bu uygulama, matematiksel problemlerin çözümünde kullanılan mümerik iterasyon yöntemlerini kullanıcı dostu bir arayüz ile sunmaktadır.",
  },
  {
    title: "TÜRKÇE SÖZLÜK",
    img: project1,
    url: "https://github.com/Ahmetyilmazz/Turkish-dictionary",
    description:
      "Proje Açıklaması: Kullanıcıların internet ortamı olmadan kolay bir şekilde Türkçe Sözlük kullanabilmesine olanak oluşturmaktı. Kullanıcı arama özelliği ile aradığı kelimeyi kolayca bulabiliyor. Anlık ihtiyaç sonucunda yapılmıştır. Kullanıcı dostu arayüz ve görsel özelleştirmeler kullanıcı deneyimini iyileştirmek için tasarlandı.",
  },
  
  {
    title: "MARKET APP",
    img: project3,
    url: "https://github.com/Ahmetyilmazz/Marketting",
    description:
      "Proje Açıklaması: Kullanıcıların internet ortamı üzerinden kolay bir şekilde Alışveriş yapabileceği ve sepetlerine ekleme çıkarma yaparak alışverişini tamamlayacağı temel seviyede bir uygulama. ",
  },

  {
    title: "SERVİS TAKİP YAZILIMI",
    img: project4,
    url: "https://github.com/Ahmetyilmazz/Service-Tracking-Software_v2",
    description:
      "Proje Açıklaması: kullanıcıların ürünleri kolayca eklemesine, güncellemesine ve yönetmesine olanak tanıyan ve aynı zamanda satış süreçlerini verimli bir şekilde takip eden bir uygulama oluşturmaktır.",
  },
  {
    title: "TO-DO LİST",
    img: project5,
    url: "https://github.com/Ahmetyilmazz/ToDo-APP",
    description:
      "Proje Açıklaması: Kullanıcıların yapılacaklar listesini kolayca yönetmelerini sağlıyor. Görev ekleme, silme ve tamamlanmış görevleri işaretleme gibi özelliklerle günlük işlerinizi organize etmenize yardımcı oluyor.",
  },

  {
    title: "OTOYOL REHBERİM",
    img: project6,
    url: "https://github.com/Ahmetyilmazz/Otoyol-Rehberi",
    description:
      "Proje Açıklaması: Kullanıcıların anlık hızı ile zamanla aldıkları yol takibi yapılmaktadır. Kullanıcı bu detayları takip edebilir ve hızını süreye bağlı olarak değiştirebilir. Aynı zaman da otoyollarda bulunan gişeler arası süre zorunluluğu göz önüne alınarak kullanıcıya bu gişeler arasındaki mesafe bilgileri ve bu mesafeyi alabileceği süreler hesaplanarak bildirilir.",
  },
];

function Projects() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Yazılım Projelerim</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {projectList.map((project, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-lg">
              <img
                src={project.img}
                className="card-img-top p-2 p-md-2 border-bottom"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-dark">{project.description}</p>
                <a
                  href={project.url}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Projeye Git
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
