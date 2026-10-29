import { getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import Hero from "@/components/sections/Hero";
import PlayApps from "@/components/sections/PlayApps";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import CertificatesPreview from "@/components/sections/CertificatesPreview";
import Contact from "@/components/sections/Contact";

export default async function HomePage({ params }: LocaleParams) {
  const locale = resolveLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} hero={dict.hero} />
      <PlayApps locale={locale} apps={dict.apps} />
      <Services locale={locale} services={dict.services} />
      <Projects locale={locale} dict={dict.projects} />
      <About about={dict.about} stackDict={dict.stack} />
      <CertificatesPreview locale={locale} dict={dict.certificates} />
      <Contact contact={dict.contact} />
    </>
  );
}
