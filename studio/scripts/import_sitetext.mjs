import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const PID = "4fuznbul", DS = "production";
const TOKEN = process.env.SANITY_TOKEN;

async function loadContent() {
  const out = await build({ entryPoints: ["/Users/andreasavoi/FREESCUBADIVING/frontend/src/data/content.js"], bundle: true, format: "esm", platform: "node", write: false });
  const dir = mkdtempSync(join(tmpdir(), "fw-"));
  const f = join(dir, "c.mjs"); writeFileSync(f, out.outputFiles[0].text);
  return (await import(pathToFileURL(f).href)).content;
}

const LS = (en, es) => ({ _type: "localeString", en: en || "", es: es || en || "" });
const LT = (en, es) => ({ _type: "localeText", en: en || "", es: es || en || "" });

const c = await loadContent();
const en = c.en, es = c.es;

// Page titles: courses/packages/faq come from content.js; cenote/reef are set here.
const doc = {
  _id: "siteText",
  _type: "siteText",
  // HOME
  heroBadge: LS(en.hero.badge, es.hero.badge),
  heroTitle: LS(en.hero.title, es.hero.title),
  heroSubtitle: LT(en.hero.subtitle, es.hero.subtitle),
  heroSupport: LS(en.hero.support, es.hero.support),
  introP1: LT(en.homeIntro.p1, es.homeIntro.p1),
  introP2: LT(en.homeIntro.p2, es.homeIntro.p2),
  // PAGE TITLES
  cenoteTitle: LS("Cenote Diving in Tulum", "Buceo en Cenotes en Tulum"),
  cenoteSubtitle: LT("Explore the most unique cenote diving experiences in Tulum & Playa del Carmen with certified local guides.",
    "Explora las experiencias de buceo en cenotes más únicas en Tulum y Playa del Carmen con guías locales certificados."),
  reefTitle: LS("Reef Diving Tours in Tulum, Playa del Carmen & Cozumel", "Tours de Buceo en Arrecife en Tulum, Playa del Carmen y Cozumel"),
  reefSubtitle: LT("Private, small-group reef diving along the Mesoamerican Barrier Reef and Cozumel's Marine National Park.",
    "Buceo en arrecife privado y en grupos pequeños a lo largo del Gran Arrecife Mesoamericano y el Parque Nacional Marino de Cozumel."),
  coursesTitle: LS(en.courses.title, es.courses.title),
  coursesSubtitle: LT(en.courses.subtitle, es.courses.subtitle),
  packagesTitle: LS(en.packages.title, es.packages.title),
  packagesSubtitle: LT(en.packages.subtitle, es.packages.subtitle),
  faqTitle: LS(en.faq.title, es.faq.title),
  faqSubtitle: LT(en.faq.subtitle, es.faq.subtitle),
  // ABOUT
  aboutTitle: LS(en.about.title, es.about.title),
  aboutP1: LT(en.about.p1, es.about.p1),
  aboutP2: LT(en.about.p2, es.about.p2),
  aboutP3: LT(en.about.p3, es.about.p3),
  aboutP4: LT(en.about.p4, es.about.p4),
  aboutP5: LT(en.about.p5, es.about.p5),
  // BOOK
  bookingTitle: LS(en.booking.title, es.booking.title),
  bookingSubtitle: LT(en.booking.subtitle, es.booking.subtitle),
};

const res = await fetch(`https://${PID}.api.sanity.io/v2024-01-01/data/mutate/${DS}`, {
  method: "POST",
  headers: { "Authorization": `Bearer ${TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({ mutations: [{ createOrReplace: doc }] }),
});
const j = await res.json();
console.log(res.ok ? "✅ siteText imported" : "❌ " + JSON.stringify(j).slice(0, 300));
