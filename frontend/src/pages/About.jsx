import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, IMAGES } from "@/data/content";
import { WaIcon } from "@/components/icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <Helmet>
        <title>About Us | Cenote Diving Specialists in Tulum — Free Way Scuba Diving</title>
        <meta name="description" content="Free Way Scuba Diving — certified cenote diving specialists in Tulum. Local knowledge, small groups, safety-first approach and personalized experiences." />
        <link rel="canonical" href="https://www.freewayscubadiving.com/about" />
      </Helmet>

      <PageHeader
        image={IMAGES.aboutDiver}
        badge="Tulum · Riviera Maya"
        title="About Free Way Scuba Diving"
        subtitle="Certified cenote diving specialists in Tulum, passionate about sharing the magic of Mexico's freshwater caves."
        imgAlt="Free Way Scuba Diving — certified cenote dive guides in Tulum"
      />

      <section className="py-20 lg:py-28 bg-[#061A2B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">{a.label}</span>
            <h2 className="mt-4 font-serif text-white text-3xl sm:text-4xl tracking-tight leading-tight">{a.title}</h2>
            <p className="mt-6 text-white/70 text-base leading-relaxed">{a.p1}</p>
            <p className="mt-4 text-white/60 text-base leading-relaxed">{a.p2}</p>
            <ul className="mt-8 space-y-3">
              {a.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" /> {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/cenote-diving"
                className="inline-flex items-center justify-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-semibold px-6 py-3.5 rounded-full transition-transform hover:-translate-y-1"
              >
                Explore Cenote Diving <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={waLink("Hi Free Way Scuba Diving, I'd like to learn more about your cenote diving experiences.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3.5 rounded-full transition-transform hover:-translate-y-1"
              >
                <WaIcon className="w-5 h-5" /> Message Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {a.stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <p className="font-serif text-[#00B4D8] text-3xl font-bold">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
