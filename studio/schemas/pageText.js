// Every editable text of the site, one document per text.
// The website applies these over its built-in texts, so the client can change
// ANY text from the panel. Grouped by page/section for easy searching.
export default {
  name: "pageText",
  title: "Site Text",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Page / Section",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Cenote page", value: "cenote" },
          { title: "Reef page", value: "reef" },
          { title: "Courses page", value: "courses" },
          { title: "Packages page", value: "packages" },
          { title: "About page", value: "about" },
          { title: "Book / Contact", value: "contact" },
          { title: "Navigation / General", value: "general" },
        ],
      },
    },
    { name: "label", title: "Where it appears", type: "string", readOnly: true, description: "Description of where this text shows on the site." },
    { name: "path", title: "Technical id", type: "string", readOnly: true, hidden: true },
    { name: "en", title: "🇬🇧 English", type: "text", rows: 2 },
    { name: "es", title: "🇪🇸 Español", type: "text", rows: 2 },
    { name: "order", title: "Order", type: "number", hidden: true },
  ],
  orderings: [{ title: "By order", name: "o", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "label", subtitle: "en" },
    prepare({ title, subtitle }) {
      return { title: title || "(text)", subtitle: (subtitle || "").slice(0, 70) };
    },
  },
};
