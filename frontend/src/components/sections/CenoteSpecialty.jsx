import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { iconMap } from "@/components/icons";
import { IMAGES } from "@/data/content";

export const CenoteSpecialty = () => {
  const { t } = useLanguage();
  const s = t.cenoteSpecialty;

  return (
    <section className="py-20 lg:py-28 bg-[#061A2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">
              {s.label}
            </span>
            <h2 className="mt-4 font-serif text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-balance">
              {s.title}
            </h2>
            <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
              {s.text}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {s.points.map((point) => {
                const Icon = iconMap[point.icon];
                return (
                  <div key={point.title} className="flex gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#00B4D8]" />
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm">{point.title}</p>
                      <p className="text-white/60 text-sm mt-0.5 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/cenote-diving"
                className="inline-flex items-center justify-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-semibold px-7 py-3.5 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-[#00B4D8]/20"
              >
                Explore Cenote Diving
              </Link>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={IMAGES.cenoteDive}
                alt="Cenote diving in Tulum — certified divers exploring freshwater cave"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/60 to-transparent rounded-2xl" />
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6 bg-[#061A2B]/80 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <p className="text-[#00B4D8] text-xs font-semibold tracking-widest uppercase mb-1">Our main specialty</p>
              <p className="text-white font-serif text-lg leading-snug">Cenote Diving in Tulum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
