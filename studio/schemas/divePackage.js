// Multi-day packages and snorkeling tours (Packages & Tours page).
export default {
  name: "divePackage",
  title: "Package / Tour",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "localeString", validation: (Rule) => Rule.required() },
    { name: "type", title: "Type label", type: "localeString", description: 'Small label above the name, e.g. "Multi-day Package".' },
    { name: "tag", title: "Badge", type: "localeString", description: 'Corner badge, e.g. "Best Value".' },
    { name: "desc", title: "Description", type: "localeText" },
    { name: "price", title: "Price", type: "string", validation: (Rule) => Rule.required() },
    { name: "duration", title: "Duration", type: "localeString" },
    { name: "level", title: "Level required", type: "localeString" },
    { name: "depth", title: "Max depth", type: "string" },
    { name: "distance", title: "Distance", type: "localeString" },
    { name: "groupSize", title: "Group size", type: "localeString" },
    { name: "image", title: "Cover photo", type: "image", options: { hotspot: true } },
    { name: "highlight", title: "Featured (Top Pick)", type: "boolean", initialValue: false },
    { name: "seasonMonths", title: "Season months", type: "array", of: [{ type: "number" }], description: "Months (1–12) when this tour is in season. Leave empty if year-round." },
    { name: "itinerary", title: "Itinerary (multi-day)", type: "array", of: [{ type: "localeString" }] },
    { name: "highlights", title: "Highlights", type: "array", of: [{ type: "localeString" }] },
    { name: "included", title: "Included", type: "array", of: [{ type: "localeString" }] },
    { name: "notIncluded", title: "Not included", type: "array", of: [{ type: "localeString" }] },
    { name: "waMsg", title: "WhatsApp message", type: "localeText" },
    { name: "order", title: "Sort order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name.en", tag: "tag.en", price: "price", media: "image" },
    prepare({ title, tag, price, media }) {
      return { title: title || "(untitled)", subtitle: [tag, price].filter(Boolean).join(" · "), media };
    },
  },
};
