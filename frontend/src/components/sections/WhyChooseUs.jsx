import { useLanguage } from "@/context/LanguageContext";
import { iconMap } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export const WhyChooseUs = () => {
  const { t } = useLanguage();
  const w = t.why;
  return (
    <section className="py-20 sm:py-28 bg-[#020B14] text-white relative overflow-hidden" data-testid="why-section">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00B4D8]/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#00B4D8]">{w.label}</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">{w.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {w.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.06}>
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#00B4D8]/40 hover:bg-white/[0.07] transition-colors" data-testid={`why-card-${i}`}>
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#00B4D8]/15 text-[#00B4D8]">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
