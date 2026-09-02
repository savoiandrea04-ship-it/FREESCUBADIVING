/**
 * One-time migration: copies every tour / package / course / FAQ / review
 * from frontend/src/data/content.js into the Sanity dataset, bilingual,
 * uploading each image that is reachable by URL.
 *
 * Run AFTER the Sanity project exists:
 *   cd studio
 *   SANITY_STUDIO_PROJECT_ID=xxxx SANITY_TOKEN=yyyy npm run import
 *
 * SANITY_TOKEN must be an Editor token (Manage → API → Tokens).
 * The script is idempotent per run only if you wipe first; by default it
 * creates fresh documents, so run it once on an empty dataset.
 */
import { createClient } from "@sanity/client";
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const token = process.env.SANITY_TOKEN;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
if (!projectId || !token) {
  console.error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_TOKEN env vars.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

// --- load content.js (ESM) by bundling it first (frontend is CommonJS) ---
async function loadContent() {
  const out = await build({
    entryPoints: ["../frontend/src/data/content.js"],
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
  });
  const dir = mkdtempSync(join(tmpdir(), "fw-"));
  const file = join(dir, "content.mjs");
  writeFileSync(file, out.outputFiles[0].text);
  return import(pathToFileURL(file).href);
}

// --- helpers ---
const loc = (en, es) => ({ _type: "localeString", en: en || "", es: es || es === "" ? es : en || "" });
const locT = (en, es) => ({ _type: "localeText", en: en || "", es: es || en || "" });
const locArr = (enArr = [], esArr = []) =>
  enArr.map((en, i) => ({ _type: "localeString", _key: `k${i}`, en, es: esArr[i] || en }));

const imageCache = new Map();
async function uploadImage(url) {
  if (!url || typeof url !== "string" || !url.startsWith("http")) return undefined;
  if (imageCache.has(url)) return imageCache.get(url);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buf, { filename: url.split("/").pop().slice(0, 60) });
    const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
    imageCache.set(url, ref);
    console.log("  ✓ image", url.slice(0, 60));
    return ref;
  } catch (e) {
    console.warn("  ⚠ image skipped (not reachable):", url.slice(0, 60), "-", e.message);
    imageCache.set(url, undefined);
    return undefined;
  }
}

async function run() {
  const { content } = await loadContent();
  const en = content.en;
  const es = content.es;
  const tx = [];

  // Dive tours (cenote + reef/wreck/cozumel)
  const enTours = [...(en.cenoteTours?.items || []), ...(en.packages?.items || []).filter((i) => i.cenote === null && i.type && !/(snorkel|package|paquete|retreat|retiro)/i.test(i.type))];
  const esTours = [...(es.cenoteTours?.items || []), ...(es.packages?.items || []).filter((i) => i.cenote === null && i.type && !/(snorkel|package|paquete|retreat|retiro)/i.test(i.type))];

  let order = 0;
  for (let i = 0; i < enTours.length; i++) {
    const e = enTours[i], s = esTours[i] || {};
    const category = e.cenote ? "cenote" : /wreck|naufragio/i.test(e.type || "") ? "wreck" : /drift|deriva|cozumel/i.test((e.type || "") + (e.name || "")) ? "cozumel" : "reef";
    tx.push({
      _type: "diveTour", category,
      name: loc(e.name, s.name), desc: locT(e.desc, s.desc), price: e.price,
      duration: loc(e.duration, s.duration), level: loc(e.level, s.level),
      depth: e.depth, distance: loc(e.distance, s.distance), groupSize: loc(e.groupSize, s.groupSize),
      image: await uploadImage(e.image), highlight: !!e.highlight,
      highlights: locArr(e.highlights, s.highlights), included: locArr(e.included, s.included),
      notIncluded: locArr(e.notIncluded, s.notIncluded), waMsg: locT(e.waMsg, s.waMsg),
      order: (order += 10),
    });
  }

  // Packages (multi-day + snorkel)
  const enPk = (en.packages?.items || []).filter((i) => i.cenote !== null || /(snorkel|package|paquete|retreat|retiro|seasonal|temporada)/i.test(i.type || i.tag || ""));
  const esPk = (es.packages?.items || []).filter((i) => i.cenote !== null || /(snorkel|package|paquete|retreat|retiro|seasonal|temporada)/i.test(i.type || i.tag || ""));
  order = 0;
  for (let i = 0; i < enPk.length; i++) {
    const e = enPk[i], s = esPk[i] || {};
    tx.push({
      _type: "divePackage",
      name: loc(e.name, s.name), type: loc(e.type, s.type), tag: loc(e.tag, s.tag), desc: locT(e.desc, s.desc),
      price: e.price, duration: loc(e.duration, s.duration), level: loc(e.level, s.level),
      depth: e.depth, distance: loc(e.distance, s.distance), groupSize: loc(e.groupSize, s.groupSize),
      image: await uploadImage(e.image), highlight: !!e.highlight, seasonMonths: e.seasonMonths || undefined,
      itinerary: locArr(e.itinerary, s.itinerary), highlights: locArr(e.highlights, s.highlights),
      included: locArr(e.included, s.included), notIncluded: locArr(e.notIncluded, s.notIncluded),
      waMsg: locT(e.waMsg, s.waMsg), order: (order += 10),
    });
  }

  // Courses
  const enC = en.courses?.items || [], esC = es.courses?.items || [];
  order = 0;
  for (let i = 0; i < enC.length; i++) {
    const e = enC[i], s = esC[i] || {};
    tx.push({
      _type: "course",
      name: loc(e.name, s.name), tag: loc(e.tag, s.tag), desc: locT(e.desc, s.desc), price: e.price,
      duration: loc(e.duration, s.duration), sessions: loc(e.sessions, s.sessions), level: loc(e.level, s.level),
      image: await uploadImage(e.image), highlights: locArr(e.highlights, s.highlights),
      included: locArr(e.included, s.included), order: (order += 10),
    });
  }

  // FAQ
  const enF = en.faq?.items || [], esF = es.faq?.items || [];
  order = 0;
  for (let i = 0; i < enF.length; i++) {
    const e = enF[i], s = esF[i] || {};
    tx.push({ _type: "faqItem", question: loc(e.q, s.q), answer: locT(e.a, s.a), order: (order += 10) });
  }

  // Reviews
  const enR = en.testimonials?.items || [], esR = es.testimonials?.items || [];
  order = 0;
  for (let i = 0; i < enR.length; i++) {
    const e = enR[i], s = esR[i] || {};
    tx.push({ _type: "review", quote: locT(e.quote, s.quote), name: e.name, location: loc(e.location, s.location), order: (order += 10) });
  }

  console.log(`Creating ${tx.length} documents…`);
  let t = client.transaction();
  tx.forEach((doc) => { t = t.create(doc); });
  await t.commit();
  console.log("✅ Import complete.");
}

run().catch((e) => { console.error(e); process.exit(1); });
