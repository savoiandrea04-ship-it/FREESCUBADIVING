import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { Destinations } from "@/components/sections/Destinations";
import { ContactSection } from "@/components/sections/ContactSection";

export default function DestinationsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader label={t.destinations.label} title={t.destinations.title} subtitle={t.destinations.subtitle} image={IMAGES.cenote} />
      <Destinations showHeader={false} />
      <ContactSection />
    </>
  );
}
