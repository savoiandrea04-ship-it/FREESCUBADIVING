import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { PageHeader } from "@/components/sections/PageHeader";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactSection } from "@/components/sections/ContactSection";
import { GoogleReviewButton } from "@/components/GoogleReviewButton";
import { ReviewQuote } from "@/components/ReviewQuote";

export default function Courses() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader label={t.courses.label} title={t.courses.title} subtitle={t.courses.subtitle} image={IMAGES.course} />
      <CoursesSection />
      <WhyChooseUs />
      <section className="py-14 bg-[#020B14] text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>
      <ReviewCarousel topic="course" />
      <ContactSection />
    </>
  );
}
