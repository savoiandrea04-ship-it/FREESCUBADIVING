// Customer reviews shown under the Google Review buttons.
export default {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    { name: "quote", title: "Review text", type: "localeText", validation: (Rule) => Rule.required() },
    { name: "name", title: "Author name", type: "string", validation: (Rule) => Rule.required() },
    { name: "location", title: "Location / label", type: "localeString", description: 'e.g. "France · Local Guide".' },
    {
      name: "topics",
      title: "Topics (which pages it shows on)",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Cenote Diving", value: "cenote" },
          { title: "Reef Diving", value: "reef" },
          { title: "Courses", value: "course" },
          { title: "Packages", value: "package" },
          { title: "General (all pages)", value: "general" },
        ],
      },
      description: "Pick one or more. The review appears in the carousel of those pages. Leave empty = shows everywhere.",
    },
    { name: "rating", title: "Stars", type: "number", initialValue: 5, options: { list: [1, 2, 3, 4, 5] } },
    { name: "order", title: "Sort order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "quote.en" },
    prepare({ title, subtitle }) {
      return { title: title || "(no name)", subtitle };
    },
  },
};
