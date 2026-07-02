import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Courses() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader label={t.courses.label} title={t.courses.title} subtitle={t.courses.subtitle} image={IMAGES.course} />
      <CoursesSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
