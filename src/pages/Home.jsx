import React from "react";
import { Link } from "react-router-dom";
import profil from "../assets/profil.jpg";

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Sol: Görsel */}
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={profil}
              alt="Profil"
              className="img-fluid shadow"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Sağ: Yazılar */}
          <div className="col-md-7 text-md-start text-center">
            <h1 className="display-7 text-primary">Ahmet YILMAZ</h1>
            <p className="lead text-dark">Jr. Flutter Developer</p>
            <p className="lead text-dark">Necmettin Erbakan Üniversitesi / Matematik - Bilgisayar </p>
            <p className="lead text-dark">
              HTML5 | CSS | JavaScript | React | C#
            </p>
            <Link
              to="/about"
              className="btn btn-outline-info text-dark btn-lg mt-3"
            >
              Hakkımda
            </Link>

            {/* Yetenekler */}
            <div className="row text-center text-md-start mt-5">
              <div className="col-md-4 mb-4">
                <i className="bi bi-phone display-4 text-primary"></i>
                <h4 className="mt-3">Mobil Geliştirme</h4>
                <p>
                  Yaklaşık 3-4 yıldır Flutter ile mobil geliştiriyorum.
                  Çoğunlukla android uygulamalar olmak üzere bir çok uygulamam
                  mevcut.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <i className="bi bi-code-slash display-4 text-primary"></i>
                <h4 className="mt-3">Frontend</h4>
                <p>
                  React, Bootstrap ve modern frontend teknolojileriyle kendimi
                  geliştirmeye devam ediyorum. Bu sitede yaptığım projeleri,
                  aldığım sertifikaları ve benimle iletişim kurabileceğiniz
                  yolları bulabilirsiniz.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <i className="bi bi-diagram-3 display-4 text-primary"></i>
                <h4 className="mt-3">Desktop</h4>
                <p>
                  Flutter, Electron.js ve C# ile masaüstü uygulamalar
                  geliştiriyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
