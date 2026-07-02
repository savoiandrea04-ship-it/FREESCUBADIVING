import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Book Cenote Diving in Tulum | Contact — Free Way Scuba Diving</title>
        <meta name="description" content="Book your cenote diving experience in Tulum directly on WhatsApp. Fast replies, certified guides and personalized diving packages." />
      </Helmet>
      <PageHeader badge={t.contact.label} title={t.contact.title} subtitle={t.contact.text} image={IMAGES.tulum} />
      <ContactSection />
    </>
  );
}
