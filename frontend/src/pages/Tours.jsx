import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { ToursGrid } from "@/components/sections/ToursGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Tours() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader label={t.toursSection.label} title={t.toursSection.title} subtitle={t.toursSection.subtitle} image={IMAGES.reefFish} />
      <ToursGrid showHeader={false} />
      <ContactSection />
    </>
  );
}
