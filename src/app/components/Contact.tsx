import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#112244] to-[#0a1a2f] w-full">
      <div className="max-w-6xl mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00C4FF] to-[#00FFB0] bg-clip-text text-transparent">
            İletişim Formu
          </h2>
          <p className="text-gray-300 text-lg">
            Her türlü proje, öneri ya da iş birliği için benimle iletişime
            geçebilirsiniz.
          </p>
        </div>

        {/* Google Form */}
        <div className="flex justify-center mb-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf__dPSvdqAOGCHU9_pK_aBZhkJlzLOG9CZXBwVzCiCncjNMg/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            title="Google Form"
            className="max-w-3xl border-none"
          >
            Yükleniyor…
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
