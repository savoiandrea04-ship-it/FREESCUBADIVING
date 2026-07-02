import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, IMAGES } from "@/data/content";
import { WaIcon, iconMap } from "@/components/icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Clock, BarChart2, MapPin, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

const whyPoints = [
  { icon: "Award", title: "Certified dive guides", desc: "Every reef dive led by certified, experienced professionals." },
  { icon: "Users", title: "Small groups", desc: "Personalised attention for every diver in the group." },
  { icon: "ShieldCheck", title: "Safety briefing", desc: "Full safety briefing before every dive, always." },
  { icon: "Fish", title: "Rich marine life", desc: "Sea turtles, eagle rays, nurse sharks and vibrant coral." },
  { icon: "MapPin", title: "3 top reef destinations", desc: "Playa del Carmen, Cozumel and Tulum reefs." },
  { icon: "Compass", title: "All levels welcome", desc: "From first certified divers to experienced adventurers." },
];

function TourCard({ item, index }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <div className="group h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-colors hover:border-[#00B4D8]/40">
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
          {item.cenote === null && item.type && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#061A2B]/70 backdrop-blur-sm text-white/90 text-xs px-2.5 py-1 rounded-full">
              <Anchor className="w-3 h-3 text-[#00B4D8]" /> {item.type}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5">
          {item.type && (
            <span className="text-[10px] uppercase tracking-widest text-[#00B4D8]/80 font-semibold mb-1">{item.type}</span>
          )}
          <h3 className="font-serif text-xl text-white leading-snug">{item.name}</h3>
          <p className="mt-2 text-sm text-white/65 leading-relaxed flex-1">{item.desc}</p>

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

          {item.highlights && (
            <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-[#00B4D8] mt-0.5">✦</span> {h}
                </li>
              ))}
            </ul>
          )}

          {item.included && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.included.map((inc) => (
                <span key={inc} className="inline-flex items-center gap-1 text-[10px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#00B4D8]" /> {inc}
                </span>
              ))}
            </div>
          )}

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

export default function ReefDiving() {
  const { t } = useLanguage();

  const reefItems = t.packages.items.filter(
    (i) => i.cenote === null && i.type && !i.type.toLowerCase().includes("snorkel")
  );
  const snorkelItem = t.packages.items.find(
    (i) => i.type && i.type.toLowerCase().includes("snorkel")
  );
  const comboItem = t.packages.items.find(
    (i) => i.type && i.type.toLowerCase().includes("combo")
  );

  return (
    <>
      <Helmet>
        <title>Reef Diving Riviera Maya | Scuba Diving in Tulum — Free Way Scuba Diving</title>
        <meta name="description" content="Enjoy reef diving in the Riviera Maya with certified instructors, Caribbean marine life and beautiful ocean dive sites near Tulum, Playa del Carmen and Cozumel." />
        <link rel="canonical" href="https://www.freewayscubadiving.com/reef-diving" />
      </Helmet>

      <PageHeader
        image={IMAGES.reef}
        badge="Riviera Maya · Caribbean"
        title="Reef Diving in the Riviera Maya"
        subtitle="Colorful Caribbean reefs, rich marine life and world-class ocean dive sites with certified guides near Tulum, Playa del Carmen and Cozumel."
        imgAlt="Reef diving in the Riviera Maya — colorful coral and marine life"
      />

      {/* Intro */}
      <section className="py-16 bg-[#061A2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Ocean Diving</span>
          <h2 className="mt-4 font-serif text-white text-3xl sm:text-4xl tracking-tight">
            Choose Your Reef Diving Experience
          </h2>
          <p className="mt-5 text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
            From shallow coral gardens near Tulum to world-famous drift dives in Cozumel and legendary bull shark encounters — we guide certified divers through the best reef sites in the Riviera Maya.
          </p>
        </div>
      </section>

      {/* Reef Cards */}
      <section className="pb-20 bg-[#061A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reefItems.map((item, i) => (
              <TourCard key={item.name} item={item} index={i} />
            ))}
            {snorkelItem && <TourCard key={snorkelItem.name} item={snorkelItem} index={reefItems.length} />}
          </div>
        </div>
      </section>

      {/* Combo upsell */}
      {comboItem && (
        <section className="py-16 bg-[#020B14]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-10">
              <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Best of Both Worlds</span>
              <h2 className="mt-3 font-serif text-white text-2xl sm:text-3xl">Combine Reef + Cenote in One Day</h2>
            </Reveal>
            <div className="max-w-sm mx-auto">
              <TourCard item={comboItem} index={0} />
            </div>
          </div>
        </section>
      )}

      {/* Why us */}
      <section className="py-20 bg-[#061A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Why Choose Us</span>
            <h2 className="mt-3 font-serif text-white text-3xl sm:text-4xl tracking-tight">
              Certified Reef Diving Guides in the Riviera Maya
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

      {/* Cenote upsell */}
      <section className="py-16 bg-[#020B14]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-2xl p-8">
            <p className="text-[#00B4D8] text-xs font-semibold tracking-widest uppercase mb-2">Our Main Specialty</p>
            <h3 className="font-serif text-white text-2xl mb-3">Also Try Cenote Diving in Tulum</h3>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Reef diving is great — but cenote diving is our main specialty. Crystal-clear freshwater caves, extraordinary visibility and an experience unlike any ocean dive.
            </p>
            <Link
              to="/cenote-diving"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-semibold px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5"
            >
              Explore Cenote Diving <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#061A2B] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-white text-3xl sm:text-4xl mb-4">Ready to Dive the Caribbean Reefs?</h2>
          <p className="text-white/60 mb-8">Message us on WhatsApp to check availability and book your reef diving experience.</p>
          <a
            href={waLink("Hi Free Way Scuba Diving, I'd like to book a reef diving experience in the Riviera Maya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30"
          >
            <WaIcon className="w-5 h-5" /> Book Reef Diving on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
