import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, IMAGES } from "@/data/content";
import { WaIcon, iconMap } from "@/components/icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { Reveal } from "@/components/Reveal";
import { Clock, BarChart2, MapPin, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need to be certified for cenote diving in Tulum?", acceptedAnswer: { "@type": "Answer", text: "For scuba cenote diving, Open Water certification is required. We also offer cavern snorkeling for non-certified guests." } },
    { "@type": "Question", name: "Is cenote diving safe?", acceptedAnswer: { "@type": "Answer", text: "Yes — with certified guides, professional equipment and thorough safety briefings, cenote diving is a safe and controlled experience." } },
    { "@type": "Question", name: "What makes cenote diving different from reef diving?", acceptedAnswer: { "@type": "Answer", text: "Cenotes are freshwater sinkholes with extraordinary clarity, dramatic cave formations and ethereal light beams — completely different from ocean diving." } },
  ],
};

const whyPoints = [
  { icon: "MapPin", title: "Local cenote knowledge", desc: "We know the best cenotes around Tulum and guide you safely through them." },
  { icon: "ShieldCheck", title: "Safety first", desc: "Every dive starts with a thorough safety briefing adapted to your level." },
  { icon: "Users", title: "Small groups", desc: "Maximum attention, comfort and safety." },
  { icon: "Award", title: "Certified guides", desc: "Experienced, passionate and professional." },
  { icon: "Compass", title: "Personalized", desc: "Adapted to your experience level and pace." },
  { icon: "Fish", title: "Crystal-clear water", desc: "Extraordinary underwater visibility in freshwater cenotes." },
];

function TourCard({ item, index }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <div className={`group h-full flex flex-col bg-white/5 backdrop-blur-xl border rounded-2xl overflow-hidden shadow-2xl transition-colors hover:border-[#00B4D8]/40 ${item.highlight ? "border-[#00B4D8]/50 ring-1 ring-[#00B4D8]/30" : "border-white/10"}`}>
        {/* Image */}
        <div className="relative h-52 overflow-hidden shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/80 to-transparent" />
          <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide uppercase bg-[#00B4D8] text-[#061A2B] px-2.5 py-1 rounded-full">
            {item.level}
          </span>
          {item.highlight && (
            <span className="absolute top-3 right-3 text-[11px] font-bold tracking-wide uppercase bg-white/90 text-[#061A2B] px-2.5 py-1 rounded-full">
              ★ Top Pick
            </span>
          )}
          {item.cenote && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#061A2B]/70 backdrop-blur-sm text-white/90 text-xs px-2.5 py-1 rounded-full">
              <Anchor className="w-3 h-3 text-[#00B4D8]" /> {item.cenote}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          {item.type && (
            <span className="text-[10px] uppercase tracking-widest text-[#00B4D8]/80 font-semibold mb-1">{item.type}</span>
          )}
          <h3 className="font-serif text-xl text-white leading-snug">{item.name}</h3>
          <p className="mt-2 text-sm text-white/65 leading-relaxed flex-1">{item.desc}</p>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-white/60">
              <Clock className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.duration}
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <BarChart2 className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.depth}
            </div>
            <div className="flex items-center gap-1.5 text-white/60 col-span-2">
              <MapPin className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.distance}
            </div>
          </div>

          {/* Highlights */}
          {item.highlights && (
            <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-[#00B4D8] mt-0.5">✦</span> {h}
                </li>
              ))}
            </ul>
          )}

          {/* Included */}
          {item.included && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.included.map((inc) => (
                <span key={inc} className="inline-flex items-center gap-1 text-[10px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#00B4D8]" /> {inc}
                </span>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-white/50">From</div>
              <div className="font-serif text-2xl text-[#00B4D8]">{item.price}</div>
            </div>
            <a
              href={waLink(`Hi Free Way Scuba Diving, I'd like to book the ${item.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-4 py-2.5 rounded-full text-sm transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <WaIcon className="w-4 h-4" /> Book
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function CenoteDiving() {
  const { t } = useLanguage();

  const cenoteItems = t.packages.items.filter(
    (i) => i.cenote && i.type && !i.type.toLowerCase().includes("ocean") && !i.type.toLowerCase().includes("snorkel") && !i.type.toLowerCase().includes("combo")
  );

  const comboItem = t.packages.items.find((i) => i.type && i.type.toLowerCase().includes("combo"));

  return (
    <>
      <Helmet>
        <title>Cenote Diving in Tulum | Certified Cenote Dive Guides — Free Way Scuba Diving</title>
        <meta name="description" content="Book cenote diving in Tulum with certified local guides. Explore crystal-clear freshwater cenotes, small groups, professional equipment and safe guided dives." />
        <link rel="canonical" href="https://www.freewayscubadiving.com/cenote-diving" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <PageHeader
        image={IMAGES.heroCenote}
        badge="Main Specialty · Tulum"
        title="Cenote Diving in Tulum"
        subtitle="Explore the most unique cenote diving experiences in Tulum and the Riviera Maya with certified local guides."
        imgAlt="Cenote diving in Tulum — crystal-clear freshwater cave with sunlight beams"
      />

      {/* Intro */}
      <section className="py-16 bg-[#061A2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Our Main Specialty</span>
          <h2 className="mt-4 font-serif text-white text-3xl sm:text-4xl tracking-tight">
            Choose Your Cenote Diving Experience
          </h2>
          <p className="mt-5 text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
            Cenote diving is what we do best. Each cenote in Tulum offers a completely different world — from cathedral-like open caverns to deep connected cave systems. Find your perfect dive below.
          </p>
        </div>
      </section>

      {/* Cenote Tour Cards */}
      <section className="pb-20 bg-[#061A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cenoteItems.map((item, i) => (
              <TourCard key={item.name} item={item} index={i} />
            ))}
            {comboItem && <TourCard key={comboItem.name} item={comboItem} index={cenoteItems.length} />}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-[#020B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Why Choose Us</span>
            <h2 className="mt-3 font-serif text-white text-3xl sm:text-4xl tracking-tight">
              Certified Cenote Diving Guides in Tulum
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 shrink-0">
                    <Icon className="w-4 h-4 text-[#00B4D8]" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{p.title}</p>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="py-20 bg-[#061A2B] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-white text-3xl sm:text-4xl mb-4">Ready to Dive a Cenote in Tulum?</h2>
          <p className="text-white/60 mb-8">Message us on WhatsApp to check availability and book your cenote diving experience.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink("Hi Free Way Scuba Diving, I'd like to book a cenote diving experience in Tulum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30"
            >
              <WaIcon className="w-5 h-5" /> Book Cenote Diving on WhatsApp
            </a>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              View All Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
