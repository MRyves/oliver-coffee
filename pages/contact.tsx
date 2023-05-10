import ContactBanner from "./components/ContactBanner";
import ContactForm from "./components/ContactForm";

export default function Contact(){
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