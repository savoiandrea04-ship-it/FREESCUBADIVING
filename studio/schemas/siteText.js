// Editable page texts (titles, hero, About, Book). One single document,
// organized in tabs so the client finds everything in one place.
export default {
  name: "siteText",
  title: "Site Texts (pages)",
  type: "document",
  groups: [
    { name: "home", title: "🏠 Home", default: true },
    { name: "pages", title: "📄 Page titles" },
    { name: "about", title: "👤 About" },
    { name: "book", title: "📅 Book" },
  ],
  fields: [
    // HOME
    { name: "heroBadge", title: "Home — hero badge", type: "localeString", group: "home" },
    { name: "heroTitle", title: "Home — main title (H1)", type: "localeString", group: "home" },
    { name: "heroSubtitle", title: "Home — subtitle", type: "localeText", group: "home" },
    { name: "heroSupport", title: "Home — small line under subtitle", type: "localeString", group: "home" },
    { name: "introP1", title: "Home — intro paragraph 1", type: "localeText", group: "home" },
    { name: "introP2", title: "Home — intro paragraph 2", type: "localeText", group: "home" },

    // PAGE TITLES
    { name: "cenoteTitle", title: "Cenote page — title", type: "localeString", group: "pages" },
    { name: "cenoteSubtitle", title: "Cenote page — subtitle", type: "localeText", group: "pages" },
    { name: "reefTitle", title: "Reef page — title", type: "localeString", group: "pages" },
    { name: "reefSubtitle", title: "Reef page — subtitle", type: "localeText", group: "pages" },
    { name: "coursesTitle", title: "Courses page — title", type: "localeString", group: "pages" },
    { name: "coursesSubtitle", title: "Courses page — subtitle", type: "localeText", group: "pages" },
    { name: "packagesTitle", title: "Packages page — title", type: "localeString", group: "pages" },
    { name: "packagesSubtitle", title: "Packages page — subtitle", type: "localeText", group: "pages" },
    { name: "faqTitle", title: "FAQ page — title", type: "localeString", group: "pages" },
    { name: "faqSubtitle", title: "FAQ page — subtitle", type: "localeText", group: "pages" },

    // ABOUT
    { name: "aboutTitle", title: "About — title", type: "localeString", group: "about" },
    { name: "aboutP1", title: "About — paragraph 1", type: "localeText", group: "about" },
    { name: "aboutP2", title: "About — paragraph 2", type: "localeText", group: "about" },
    { name: "aboutP3", title: "About — paragraph 3", type: "localeText", group: "about" },
    { name: "aboutP4", title: "About — paragraph 4", type: "localeText", group: "about" },
    { name: "aboutP5", title: "About — paragraph 5", type: "localeText", group: "about" },

    // BOOK
    { name: "bookingTitle", title: "Book — section title", type: "localeString", group: "book" },
    { name: "bookingSubtitle", title: "Book — section subtitle", type: "localeText", group: "book" },
  ],
  preview: { prepare: () => ({ title: "Site Texts — pages" }) },
};
