import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Reviews() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader label={t.testimonials.label} title={t.testimonials.title} image={IMAGES.diverFree} />
      <Testimonials />
      <ContactSection />
    </>
  );
}
