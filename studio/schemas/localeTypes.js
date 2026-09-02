// Bilingual field types (English + Spanish) used across every content type.
// The website reads `.en` / `.es` from each of these objects.

export const localeString = {
  name: "localeString",
  title: "Text (EN / ES)",
  type: "object",
  fields: [
    { name: "en", title: "🇬🇧 English", type: "string" },
    { name: "es", title: "🇪🇸 Español", type: "string" },
  ],
  options: { columns: 2 },
};

export const localeText = {
  name: "localeText",
  title: "Paragraph (EN / ES)",
  type: "object",
  fields: [
    { name: "en", title: "🇬🇧 English", type: "text", rows: 4 },
    { name: "es", title: "🇪🇸 Español", type: "text", rows: 4 },
  ],
  options: { columns: 1 },
};
