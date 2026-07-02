import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, EMAIL, PHONE } from "@/data/content";
import { WaIcon } from "@/components/icons";
import { WaveDivider } from "@/components/WaveDivider";

const links = [
  { to: "/cenote-diving", key: "cenote" },
  { to: "/reef-diving", key: "reef" },
  { to: "/diving-courses", key: "courses" },
  { to: "/packages", key: "packages" },
  { to: "/about", key: "about" },
  { to: "/faq", key: "faq" },
  { to: "/contact", key: "contact" },
];

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-[#061A2B] text-white" data-testid="main-footer">
      <WaveDivider color="#061A2B" flip className="bg-transparent -mt-1" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-4 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl tracking-tight">
            Free Way <span className="text-[#00B4D8]">Scuba Diving</span>
          </div>
          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-[#00B4D8]/90">
            {t.footer.spanish}
          </span>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mb-4">{t.footer.explore}</h4>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.key}>
                <Link to={l.to} data-testid={`footer-link-${l.key}`} className="text-white/75 hover:text-[#00B4D8] text-sm transition-colors">
                  {t.nav[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mb-4">{t.footer.contactTitle}</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp" className="flex items-center gap-3 text-white/75 hover:text-[#25D366] transition-colors">
                <WaIcon className="w-4 h-4 text-[#25D366]" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`tel:+${PHONE.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 text-white/75 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#00B4D8]" /> {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} data-testid="footer-email" className="flex items-center gap-3 text-white/75 hover:text-white transition-colors break-all">
                <Mail className="w-4 h-4 text-[#00B4D8]" /> {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/75">
              <MapPin className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" /> {t.contact.area}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-white/45 text-xs">
          © {new Date().getFullYear()} Free Way Scuba Diving. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
