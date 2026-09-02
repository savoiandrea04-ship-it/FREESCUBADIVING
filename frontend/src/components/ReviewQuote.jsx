import { GOOGLE_REVIEW_URL } from "@/data/content";

export const ReviewQuote = ({ quote, name, location }) => (
  <a
    href={GOOGLE_REVIEW_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="block max-w-xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-left hover:bg-white/8 transition-colors group"
  >
    <div className="flex items-start gap-3">
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-2">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#fbbc05" aria-hidden="true">
              <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
            </svg>
          ))}
        </div>
        <p className="text-white/80 text-sm leading-relaxed italic">"{quote}"</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-white font-semibold text-xs">{name}</span>
          {location && <span className="text-white/40 text-xs">· {location}</span>}
        </div>
      </div>
    </div>
  </a>
);
