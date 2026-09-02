// PADI courses (Diving Courses page).
export default {
  name: "course",
  title: "PADI Course",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "localeString", validation: (Rule) => Rule.required() },
    { name: "tag", title: "Badge", type: "localeString", description: 'e.g. "Beginner", "Certification", "Specialty".' },
    { name: "desc", title: "Description", type: "localeText" },
    { name: "price", title: "Price", type: "string", validation: (Rule) => Rule.required() },
    { name: "duration", title: "Duration", type: "localeString" },
    { name: "sessions", title: "Sessions", type: "localeString" },
    { name: "level", title: "Level required", type: "localeString" },
    { name: "image", title: "Cover photo", type: "image", options: { hotspot: true } },
    { name: "highlights", title: "Highlights", type: "array", of: [{ type: "localeString" }] },
    { name: "included", title: "Included", type: "array", of: [{ type: "localeString" }] },
    { name: "order", title: "Sort order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name.en", tag: "tag.en", price: "price", media: "image" },
    prepare({ title, tag, price, media }) {
      return { title: title || "(untitled course)", subtitle: [tag, price].filter(Boolean).join(" · "), media };
    },
  },
};
