import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// The Project ID comes from the environment so no secret is committed.
// Set SANITY_STUDIO_PROJECT_ID in studio/.env once the Sanity project exists.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "REPLACE_WITH_PROJECT_ID";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

// Groups the sidebar into clear, client-friendly sections.
const structure = (S) =>
  S.list()
    .title("Freeway Scuba Diving")
    .items([
      // Single editable document for page texts
      S.listItem()
        .title("✏️ All Site Texts")
        .child(
          S.list()
            .title("All Site Texts — by page")
            .items([
              ...["home", "cenote", "reef", "courses", "packages", "about", "contact", "general"].map((sec) =>
                S.listItem()
                  .title(sec.charAt(0).toUpperCase() + sec.slice(1))
                  .id("pt-" + sec)
                  .child(
                    S.documentList()
                      .title(sec.charAt(0).toUpperCase() + sec.slice(1) + " texts")
                      .filter('_type == "pageText" && section == $sec')
                      .params({ sec })
                      .defaultOrdering([{ field: "order", direction: "asc" }])
                  )
              ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("pageSeo").title("🔎 SEO (Google)"),
      S.documentTypeListItem("diveTour").title("Dive Tours"),
      S.documentTypeListItem("divePackage").title("Packages & Tours"),
      S.documentTypeListItem("course").title("PADI Courses"),
      S.documentTypeListItem("faqItem").title("FAQ"),
      S.documentTypeListItem("review").title("Reviews"),
    ]);

export default defineConfig({
  name: "freeway",
  title: "Freeway Scuba Diving",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
