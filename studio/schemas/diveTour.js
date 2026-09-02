// Dive tours: cenote, reef, wreck and Cozumel cards shown on the site.
export default {
  name: "diveTour",
  title: "Dive Tour",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Which section this tour belongs to.",
      options: {
        list: [
          { title: "Cenote Diving", value: "cenote" },
          { title: "Reef Diving", value: "reef" },
          { title: "Wreck Diving", value: "wreck" },
          { title: "Cozumel", value: "cozumel" },
          { title: "Snorkeling", value: "snorkel" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    { name: "name", title: "Name", type: "localeString", validation: (Rule) => Rule.required() },
    { name: "desc", title: "Description", type: "localeText" },
    {
      name: "price",
      title: "Price",
      type: "string",
      description: 'Shown exactly as typed, e.g. "$2,700 MXN (around $160 USD)".',
      validation: (Rule) => Rule.required(),
    },
    { name: "duration", title: "Duration", type: "localeString" },
    { name: "level", title: "Level required", type: "localeString" },
    { name: "depth", title: "Max depth", type: "string" },
    { name: "distance", title: "Distance", type: "localeString" },
    { name: "groupSize", title: "Group size", type: "localeString" },
    {
      name: "image",
      title: "Cover photo",
      type: "image",
      options: { hotspot: true },
      description: "Upload or drag a photo here. It replaces the card image on the site.",
    },
    {
      name: "highlight",
      title: "Featured (Top Pick)",
      type: "boolean",
      description: "Turn on to mark this tour as a highlighted 'Top Pick'.",
      initialValue: false,
    },
    { name: "highlights", title: "Highlights", type: "array", of: [{ type: "localeString" }] },
    { name: "included", title: "Included", type: "array", of: [{ type: "localeString" }] },
    { name: "notIncluded", title: "Not included", type: "array", of: [{ type: "localeString" }] },
    { name: "waMsg", title: "WhatsApp message", type: "localeText", description: "Pre-filled text when a visitor books this tour on WhatsApp." },
    { name: "order", title: "Sort order", type: "number", description: "Lower numbers appear first.", initialValue: 100 },
  ],
  orderings: [{ title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name.en", category: "category", price: "price", media: "image" },
    prepare({ title, category, price, media }) {
      return { title: title || "(untitled tour)", subtitle: `${category || "?"} · ${price || ""}`, media };
    },
  },
};
