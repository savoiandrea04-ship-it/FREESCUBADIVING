import { Star, Quote, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Testimonials = ({ dark = false }) => {
  const { t } = useLanguage();
  const r = t.testimonials;
  const bg = dark ? "bg-[#061A2B] text-white" : "bg-[#F4F1EB]";
  return (
    <section className={`py-20 sm:py-28 ${bg}`} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#00B4D8]">{r.label}</span>
          <h2 className={`mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance ${dark ? "text-white" : ""}`}>{r.title}</h2>
          <div className="mt-5 inline-flex items-center gap-2 text-[#00B4D8]">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {r.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 4) * 0.07}>
              <figure className={`h-full flex flex-col rounded-2xl p-6 shadow-sm ${dark ? "bg-white/5 border border-white/10" : "bg-white border border-black/5"}`} data-testid={`testimonial-card-${i}`}>
                <Quote className="w-7 h-7 text-[#00B4D8]/40" />
                <blockquote className={`mt-3 text-sm leading-relaxed flex-1 ${dark ? "text-white/80" : "text-[#374151]"}`}>"{item.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4D8]/15 text-[#00B4D8] font-serif text-lg">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <div className={`text-sm font-semibold ${dark ? "text-white" : "text-[#061A2B]"}`}>{item.name}</div>
                    <div className={`text-xs ${dark ? "text-white/50" : "text-[#6B7280]"}`}>{item.location}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-[#00B4D8]/10 text-[#0a7a93] px-5 py-3 rounded-full text-sm font-medium" data-testid="trust-badge">
            <BadgeCheck className="w-5 h-5 text-[#00B4D8]" /> {r.badge}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
