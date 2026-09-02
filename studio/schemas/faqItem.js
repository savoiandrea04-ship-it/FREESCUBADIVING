// FAQ entries.
export default {
  name: "faqItem",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "localeString", validation: (Rule) => Rule.required() },
    { name: "answer", title: "Answer", type: "localeText", validation: (Rule) => Rule.required() },
    { name: "order", title: "Sort order", type: "number", initialValue: 100 },
  ],
  orderings: [{ title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "question.en" },
    prepare({ title }) {
      return { title: title || "(empty question)" };
    },
  },
};
