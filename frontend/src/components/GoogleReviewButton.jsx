import { GOOGLE_REVIEW_URL } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export const GoogleReviewButton = ({ className = "" }) => {
  const { lang } = useLanguage();
  const label = lang === "es"
    ? "Déjanos una Reseña en Google — nos ayuda muchísimo"
    : "Leave us a Google Review — it means the world to us";
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm ${className}`}
    >
      <svg viewBox="0 0 20 20" className="w-4 h-4 text-yellow-400 shrink-0" fill="currentColor" aria-hidden="true">
        <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
      </svg>
      {label}
    </a>
  );
};
