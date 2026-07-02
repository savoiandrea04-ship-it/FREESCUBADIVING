import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>FAQ — Cenote Diving in Tulum | Free Way Scuba Diving</title>
        <meta name="description" content="Answers to the most common questions about cenote diving in Tulum — certification requirements, safety, what's included, how to book and more." />
      </Helmet>
      <PageHeader badge={t.faq.label} title={t.faq.title} subtitle={t.faq.subtitle} image={IMAGES.diverBubbles} />
      <FaqSection />
      <ContactSection />
    </>
  );
}
