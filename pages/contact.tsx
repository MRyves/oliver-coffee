import ContactBanner from "../src/components/Banners/ContactBanner";
import ContactForm from "../src/components/ContactForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function Contact() {
  return (
    <>
      <ContactBanner />
      <section
        id="contact"
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ContactForm />
      </section>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "footer", "header"])),
    },
  };
}