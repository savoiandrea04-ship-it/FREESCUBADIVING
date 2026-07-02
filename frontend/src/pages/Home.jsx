import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/sections/Hero";
import { CenoteSpecialty } from "@/components/sections/CenoteSpecialty";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsActivityLocation",
      name: "Free Way Scuba Diving",
      description: "Specialized in cenote diving in Tulum. Explore freshwater cenotes, reef diving and diving courses with certified local instructors.",
      url: "https://www.freewayscubadiving.com",
      telephone: "+529841361212",
      email: "freewayscuba@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tulum",
        addressRegion: "Quintana Roo",
        addressCountry: "MX",
      },
      geo: { "@type": "GeoCoordinates", latitude: 20.2114, longitude: -87.4654 },
      areaServed: ["Tulum", "Playa del Carmen", "Cozumel", "Riviera Maya"],
      priceRange: "$$",
    },
    {
      "@type": "Service",
      name: "Cenote Diving in Tulum",
      description: "Certified cenote diving experiences in Tulum's freshwater caves. Small groups, professional guides, safety-first approach.",
      provider: { "@type": "Organization", name: "Free Way Scuba Diving" },
      areaServed: "Tulum, Riviera Maya",
      serviceType: "Cenote Diving",
    },
    {
      "@type": "Service",
      name: "Reef Diving Riviera Maya",
      description: "Caribbean reef diving with certified guides near Tulum, Playa del Carmen and Cozumel.",
      provider: { "@type": "Organization", name: "Free Way Scuba Diving" },
      serviceType: "Reef Diving",
    },
    {
      "@type": "Service",
      name: "Diving Courses Tulum",
      description: "PADI diving courses in Tulum for beginners and certified divers.",
      provider: { "@type": "Organization", name: "Free Way Scuba Diving" },
      serviceType: "Diving Courses",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cenote Diving in Tulum | Scuba Diving & Courses — Free Way Scuba Diving</title>
        <meta name="description" content="Specialized in cenote diving in Tulum. Explore freshwater cenotes, reef diving and diving courses with certified local instructors. Book directly on WhatsApp." />
        <link rel="canonical" href="https://www.freewayscubadiving.com/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <CenoteSpecialty />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </>
  );
}
