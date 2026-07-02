import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { waLink, IMAGES } from "@/data/content";
import { WaIcon, iconMap } from "@/components/icons";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Clock, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

const tagColors = {
  Beginner:      "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Principiante:  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Certification: "bg-[#00B4D8]/20 text-[#00B4D8] border-[#00B4D8]/30",
  Certificación: "bg-[#00B4D8]/20 text-[#00B4D8] border-[#00B4D8]/30",
  Specialty:     "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Especialidad:  "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Refresh:       "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Repaso:        "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

const whyPoints = [
  { icon: "Award", title: "PADI certified instructors", desc: "All courses taught by certified, patient and experienced dive instructors." },
  { icon: "ShieldCheck", title: "Safety first", desc: "We prioritise your comfort and safety at every stage of your course." },
  { icon: "Users", title: "Small class sizes", desc: "Personal attention throughout — never a crowded class." },
  { icon: "Compass", title: "Cenote ready on completion", desc: "Finish your course and go straight to a cenote dive in Tulum." },
  { icon: "Heart", title: "Beginner friendly", desc: "Zero experience needed. We take you from nervous to confident." },
  { icon: "Fish", title: "Real ocean dives", desc: "All courses include real open water dives — not just pool sessions." },
];

function CourseCard({ item, index }) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <div className="group h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-colors hover:border-[#00B4D8]/40">
        {/* Image */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={item.image || IMAGES.course}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/85 to-transparent" />
          <span className={`absolute top-3 left-3 text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${tagColors[item.tag] || "bg-white/10 text-white/70 border-white/10"}`}>
            {item.tag}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-serif text-xl text-white leading-snug">{item.name}</h3>
          <p className="mt-2 text-sm text-white/65 leading-relaxed flex-1">{item.desc}</p>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            {item.duration && (
              <div className="flex items-center gap-1.5 text-white/60">
                <Clock className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.duration}
              </div>
            )}
            {item.level && (
              <div className="flex items-center gap-1.5 text-white/60">
                <BookOpen className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.level}
              </div>
            )}
            {item.sessions && (
              <div className="flex items-center gap-1.5 text-white/60 col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] shrink-0" /> {item.sessions}
              </div>
            )}
          </div>

          {/* Highlights */}
          {item.highlights && (
            <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-[#00B4D8] mt-0.5">✦</span> {h}
                </li>
              ))}
            </ul>
          )}

          {/* Included */}
          {item.included && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.included.map((inc) => (
                <span key={inc} className="inline-flex items-center gap-1 text-[10px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#00B4D8]" /> {inc}
                </span>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-white/50">From</div>
              <div className="font-serif text-2xl text-[#00B4D8]">{item.price}</div>
            </div>
            <a
              href={waLink(`Hi Free Way Scuba Diving, I'd like information about the ${item.name} course in Tulum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-4 py-2.5 rounded-full text-sm transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <WaIcon className="w-4 h-4" /> Ask
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function DivingCourses() {
  const { t } = useLanguage();
  const c = t.courses;

  return (
    <>
      <Helmet>
        <title>Diving Courses in Tulum | Learn to Scuba Dive — Free Way Scuba Diving</title>
        <meta name="description" content="Learn to dive in Tulum with professional diving courses, beginner training, refresher dives and certified instructors. PADI courses available." />
        <link rel="canonical" href="https://www.freewayscubadiving.com/diving-courses" />
      </Helmet>

      <PageHeader
        image={IMAGES.course}
        badge="PADI Courses · Tulum"
        title="Diving Courses in Tulum"
        subtitle="Learn to dive or advance your skills with certified professional instructors in the Riviera Maya."
        imgAlt="Diving courses in Tulum — certified scuba instructor teaching students"
      />

      {/* Intro */}
      <section className="py-16 bg-[#061A2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">{c.label}</span>
          <h2 className="mt-4 font-serif text-white text-3xl sm:text-4xl tracking-tight">{c.title}</h2>
          <p className="mt-5 text-white/65 text-base leading-relaxed max-w-2xl mx-auto">{c.subtitle}</p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="pb-20 bg-[#061A2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.items.map((item, i) => (
              <CourseCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-[#020B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#00B4D8] text-xs tracking-[0.2em] uppercase font-semibold">Why Learn With Us</span>
            <h2 className="mt-3 font-serif text-white text-3xl sm:text-4xl tracking-tight">
              Diving Courses in Tulum With Certified Instructors
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 shrink-0">
                    <Icon className="w-4 h-4 text-[#00B4D8]" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{p.title}</p>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cenote upsell */}
      <section className="py-16 bg-[#061A2B]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-2xl p-8">
            <p className="text-[#00B4D8] text-xs font-semibold tracking-widest uppercase mb-2">After Your Course</p>
            <h3 className="font-serif text-white text-2xl mb-3">Ready to Dive a Cenote?</h3>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Once certified, your next step should be a cenote dive in Tulum — our main specialty. Crystal-clear freshwater caves that every diver should experience at least once.
            </p>
            <Link
              to="/cenote-diving"
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0099BB] text-white font-semibold px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5"
            >
              Explore Cenote Diving in Tulum <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#020B14] text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-white text-3xl sm:text-4xl mb-4">Ready to Start Diving?</h2>
          <p className="text-white/60 mb-8">Message us on WhatsApp to ask about course dates, availability and the right course for your level.</p>
          <a
            href={waLink("Hi Free Way Scuba Diving, I'd like information about diving courses in Tulum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-full transition-transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30"
          >
            <WaIcon className="w-5 h-5" /> Ask About Courses on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
