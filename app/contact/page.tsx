import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactFrom from "@/components/contact/ContactForm";

export default function ContactPage() {

  return (
    <main className="overflow-hidden">
      <ContactHero/>
      <ContactFrom/>

       <ContactMap/>
    </main>
  );
}
