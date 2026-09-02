import { GOOGLE_REVIEW_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

const GoogleG = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Stars = ({ n = 5 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill={i <= n ? "#fbbc05" : "#3a3f45"} aria-hidden="true">
        <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
      </svg>
    ))}
  </div>
);

function ReviewCard({ r }) {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 w-[300px] sm:w-[340px] bg-white/5 border border-white/10 rounded-2xl px-5 py-5 hover:bg-white/[0.08] hover:border-[#00B4D8]/30 transition-colors flex flex-col"
    >
      <div className="flex items-center justify-between mb-3">
        <Stars n={r.rating || 5} />
        <GoogleG />
      </div>
      <p className="text-white/80 text-sm leading-relaxed italic line-clamp-5 flex-1">"{r.quote}"</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00B4D8]/15 text-[#00B4D8] text-xs font-bold shrink-0">
          {(r.name || "?").charAt(0)}
        </span>
        <span className="text-white font-semibold text-xs">{r.name}</span>
        {r.location && <span className="text-white/40 text-xs truncate">· {r.location}</span>}
      </div>
    </a>
  );
}

export const ReviewCarousel = ({ topic }) => {
  const { t, lang } = useLanguage();
  const all = (t.testimonials && t.testimonials.items) || [];
  if (!all.length) return null;

  // reviews relevant to this page (topic match, "general", or untagged) — fallback to all
  const relevant = all.filter(
    (r) => !r.topics || r.topics.length === 0 || r.topics.includes(topic) || r.topics.includes("general")
  );
  const reviews = relevant.length ? relevant : all;

  // duplicate so the marquee loops seamlessly
  const loop = reviews.length < 5 ? [...reviews, ...reviews, ...reviews, ...reviews] : [...reviews, ...reviews];
  const heading = lang === "es" ? "Lo que dicen nuestros buzos" : "What our divers say";
  const cta = lang === "es" ? "Déjanos una reseña en Google" : "Leave us a Google review";

  return (
    <section className="py-14 bg-[#020B14] overflow-hidden">
      <style>{`@keyframes fwmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .fw-marquee{animation:fwmarquee 45s linear infinite;width:max-content}
        .fw-marquee:hover{animation-play-state:paused}
        @media (prefers-reduced-motion: reduce){.fw-marquee{animation:none}}`}</style>

      <div className="text-center px-4 mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <GoogleG className="w-5 h-5" />
          <span className="text-white font-bold text-lg">{GOOGLE_RATING.toFixed(1)}</span>
          <Stars n={5} />
          <span className="text-white/50 text-sm">({GOOGLE_REVIEW_COUNT})</span>
        </div>
        <h2 className="font-serif text-white text-2xl sm:text-3xl tracking-tight">{heading}</h2>
      </div>

      {/* marquee */}
      <div className="relative">
        <div className="flex gap-4 fw-marquee px-2">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020B14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020B14] to-transparent" />
      </div>

      <div className="text-center mt-8 px-4">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#3c4043] font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-shadow text-sm"
        >
          <GoogleG className="w-4 h-4" /> {cta}
        </a>
      </div>
    </section>
  );
};
