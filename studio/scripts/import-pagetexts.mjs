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

// paths / keys we do NOT expose as editable text
const SKIP_TOP = new Set(["cenoteTours"]); // tours managed as documents
const SKIP_KEYS = new Set(["icon", "image", "formUrl", "waMsg", "price", "subjectLine", "seasonMonths", "value", "code", "href", "reelUrl", "cenote"]);
const skipPath = (p) => p.includes(".items") || /\.(image|icon|href)(\.|$)/.test(p);

function sectionOf(path) {
  const t = path.split(".")[0];
  if (["hero", "homeIntro", "services", "cenoteSpecialty", "reefPassion", "why"].includes(t)) return "home";
  if (path.startsWith("ui.cenote")) return "cenote";
  if (path.startsWith("ui.courses")) return "courses";
  if (path.startsWith("ui.packages")) return "packages";
  if (path.startsWith("ui.shared")) return "general";
  if (t === "about") return "about";
  if (t === "contact" || t === "booking") return "contact";
  if (t === "packages") return "packages";
  if (t === "courses") return "courses";
  if (t === "faq") return "cenote";
  return "general"; // nav, footer, testimonials, other, ui misc
}

function label(path) {
  return path.split(".").map((s) => (/^\d+$/.test(s) ? "#" + (Number(s) + 1) : s.replace(/([A-Z])/g, " $1"))).join(" · ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const rows = [];
function walk(enNode, esNode, path) {
  if (typeof enNode === "string") {
    if (!enNode.trim()) return;
    const lastKey = path.split(".").pop();
    if (SKIP_KEYS.has(lastKey) || skipPath(path)) return;
    rows.push({ path, en: enNode, es: typeof esNode === "string" ? esNode : enNode });
    return;
  }
  if (Array.isArray(enNode)) {
    enNode.forEach((v, i) => walk(v, esNode?.[i], `${path}.${i}`));
    return;
  }
  if (enNode && typeof enNode === "object") {
    for (const k of Object.keys(enNode)) walk(enNode[k], esNode?.[k], path ? `${path}.${k}` : k);
  }
}

const c = await loadContent();
for (const top of Object.keys(c.en)) {
  if (SKIP_TOP.has(top)) continue;
  walk(c.en[top], c.es[top], top);
}

let order = 0;
const docs = rows.map((r) => ({
  _id: "pt-" + r.path.replace(/[^a-zA-Z0-9]/g, "-"),
  _type: "pageText",
  section: sectionOf(r.path),
  label: label(r.path),
  path: r.path,
  en: r.en,
  es: r.es,
  order: (order += 1),
}));

console.log(`Extracted ${docs.length} editable texts.`);
// send in batches
const client = { async mutate(muts) {
  const res = await fetch(`https://${PID}.api.sanity.io/v2024-01-01/data/mutate/${DS}`, {
    method: "POST", headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ mutations: muts }),
  });
  if (!res.ok) throw new Error((await res.text()).slice(0, 300));
}};
for (let i = 0; i < docs.length; i += 40) {
  await client.mutate(docs.slice(i, i + 40).map((d) => ({ createOrReplace: d })));
  process.stdout.write(".");
}
console.log("\n✅ All site texts imported.");
