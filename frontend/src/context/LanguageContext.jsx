import { createContext, useContext, useState, useCallback } from "react";
import { content } from "@/data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("fws-lang") || "en";
    return "en";
  });
  const apply = useCallback((value) => {
    setLang(value);
    if (typeof window !== "undefined") localStorage.setItem("fws-lang", value);
  }, []);
  const toggle = useCallback(() => apply(lang === "en" ? "es" : "en"), [lang, apply]);
  const t = content[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang: apply, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
