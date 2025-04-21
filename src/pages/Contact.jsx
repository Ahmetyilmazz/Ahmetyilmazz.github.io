import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      {/* Başlık */}
      <h2 className="text-center text-primary mb-4">İletişim Formu</h2>
      <p className="text-center text-muted mb-5">
        Her türlü proje, öneri ya da iş birliği için benimle iletişime
        geçebilirsiniz.
      </p>

      {/* Google Form ile Mesaj Alma*/}
      <div className="d-flex justify-content-center mb-5">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf__dPSvdqAOGCHU9_pK_aBZhkJlzLOG9CZXBwVzCiCncjNMg/viewform?embedded=true"
          width="100%"
          height="900"
          frameborder="0"
          title="Google Form"
          style={{ maxWidth: "900px", border: "none" }}
        >
          Yükleniyor…
        </iframe>
      </div>

      {/* Sosyal Medya Linkleri */}
      <div className="text-center">
        <p className="text-muted mb-3">
          Bana sosyal medya üzerinden de ulaşabilirsiniz:
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="https://www.instagram.com/ahmet.ylmzzz/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-danger d-flex align-items-center gap-2"
          >
            📸 Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/ahmeeet/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary d-flex align-items-center gap-2"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Ahmetyilmazz"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark d-flex align-items-center gap-2"
          >
            🐱 GitHub
          </a>
          <a
            href="mailto:ahmeet.ylmzzz@gmail.com"
            className="btn btn-outline-success d-flex align-items-center gap-2"
          >
            📧 Gmail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
