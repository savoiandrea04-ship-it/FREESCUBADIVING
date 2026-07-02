import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Destinations = ({ showHeader = true }) => {
  const { t } = useLanguage();
  const d = t.destinations;
  return (
    <section className="py-20 sm:py-28 bg-[#F4F1EB]" data-testid="destinations-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <Reveal className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#00B4D8]">{d.label}</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">{d.title}</h2>
            <p className="mt-5 text-[#4B5563] leading-relaxed">{d.subtitle}</p>
          </Reveal>
        )}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[15rem]">
          {d.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.07} className={item.span || ""}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-lg" data-testid={`destination-card-${i}`}>
                <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B14]/90 via-[#020B14]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl sm:text-2xl text-white">{item.name}</h3>
                    <ArrowUpRight className="w-5 h-5 text-[#00B4D8] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="mt-1.5 text-sm text-white/75 leading-snug max-w-md">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
