import { motion } from "framer-motion";

export const PageHeader = ({ badge, label, title, subtitle, image, imgAlt }) => (
  <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#061A2B]" data-testid="page-header">
    <div className="absolute inset-0">
      <img src={image} alt={imgAlt || ""} className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B] via-[#061A2B]/80 to-[#061A2B]/50" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.span
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-[#00B4D8] text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold"
      >
        <span className="w-8 h-px bg-[#00B4D8]" /> {badge || label}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-serif text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight text-balance max-w-3xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);
