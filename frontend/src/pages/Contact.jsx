import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/data/content";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>Book Cenote Diving in Tulum | Contact — Freeway Scuba Diving</title>
        <meta name="description" content="Book your cenote diving experience in Tulum directly on WhatsApp. Fast replies, certified guides and personalized diving packages." />
        <link rel="canonical" href="https://freewayscubadiving.com/contact" />
        <meta property="og:title" content="Book Cenote Diving in Tulum | Freeway Scuba Diving" />
        <meta property="og:description" content="Book your cenote diving experience in Tulum on WhatsApp. Fast replies, small groups and certified local guides." />
        <meta property="og:image" content="https://freewayscubadiving.com/wp-content/uploads/2023/07/diving-in-tulum-scaled.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Cenote Diving in Tulum | Freeway Scuba Diving" />
        <meta name="twitter:description" content="Book on WhatsApp. Fast replies, small groups, certified guides. Cenote and reef diving in Tulum." />
        <meta name="twitter:image" content="https://freewayscubadiving.com/wp-content/uploads/2023/07/diving-in-tulum-scaled.jpg" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://freewayscubadiving.com" }, { "@type": "ListItem", position: 2, name: "Contact", item: "https://freewayscubadiving.com/contact" }] })}</script>
      </Helmet>
      <PageHeader badge={t.contact.label} title={t.contact.title} subtitle={t.contact.text} image={IMAGES.tulum} />
      <section className="py-16 lg:py-24 bg-[#020B14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">{t.booking.label}</span>
            <h2 className="mt-3 font-serif text-white text-3xl sm:text-4xl tracking-tight">{t.booking.title}</h2>
            <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-xl mx-auto">{t.booking.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
