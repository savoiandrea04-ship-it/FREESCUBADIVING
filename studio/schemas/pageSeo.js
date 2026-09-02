// SEO: the title and description that appear in Google results, per page.
export default {
  name: "pageSeo",
  title: "SEO (Google title & description)",
  type: "document",
  fields: [
    { name: "label", title: "Page", type: "string", readOnly: true },
    { name: "page", title: "page id", type: "string", readOnly: true, hidden: true },
    {
      name: "metaTitle",
      title: "Google title (aim for ~60 characters)",
      type: "object",
      fields: [
        { name: "en", title: "🇬🇧 English", type: "string" },
        { name: "es", title: "🇪🇸 Español", type: "string" },
      ],
      options: { columns: 2 },
    },
    {
      name: "metaDescription",
      title: "Google description (aim for ~155 characters)",
      type: "object",
      fields: [
        { name: "en", title: "🇬🇧 English", type: "text", rows: 3 },
        { name: "es", title: "🇪🇸 Español", type: "text", rows: 3 },
      ],
    },
    { name: "order", title: "order", type: "number", hidden: true },
  ],
  orderings: [{ title: "By order", name: "o", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "label", subtitle: "metaTitle.en" },
    prepare({ title, subtitle }) {
      return { title: "SEO · " + (title || ""), subtitle };
    },
  },
};
