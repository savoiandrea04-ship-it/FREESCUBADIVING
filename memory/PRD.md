# PRD — FREE WAY SCUBA DIVING Website

## Original Problem Statement
Build a complete modern, premium, conversion-focused marketing website for a scuba diving center "FREE WAY SCUBA DIVING" (Tulum, Playa del Carmen, Cozumel, Riviera Maya, Mexico). Goal: more WhatsApp messages, more bookings, more trust from international tourists. Premium ocean/adventure aesthetic, mobile-first, strong CTAs, all booking buttons open WhatsApp. Mainly English with Spanish support.

Business: Email freewayscuba@gmail.com · Phone/WhatsApp +52 984 136 1212.

## User Choices
- Images: real stock photos (to be replaced later with client's own photos/videos).
- Scope: frontend-only, multi-page routed site.
- Contact: WhatsApp + email buttons only (no backend).
- Language: real EN/ES toggle.

## Architecture
- Frontend-only React (CRA + craco) + Tailwind + framer-motion + shadcn/ui. No backend, no DB.
- Routing: react-router-dom v7. Pages wrapped in shared `Layout` (Navbar + Outlet + Footer + FloatingWhatsApp).
- i18n: `LanguageContext` (EN/ES) with localStorage persistence; all copy in `src/data/content.js`.
- Fonts: Playfair Display (headings) + Outfit (body). Palette: Deep Ocean #061A2B, Turquoise #00B4D8, Sand #F4F1EB, WhatsApp Green #25D366.
- WhatsApp helper `waLink(message)` builds https://wa.me/529841361212?text=... ; every CTA opens WhatsApp.

## User Personas
- International tourist (EN) planning dives in the Riviera Maya — wants trust + easy mobile booking.
- Spanish-speaking visitor — uses ES toggle.

## Implemented (2026-06-27)
- Pages: Home, Tours, Courses, Destinations, Reviews, FAQ, Contact.
- Home sections: Hero (dual CTA + trust badges), About (stats), Tours grid (6 cards w/ prices), Why Choose Us, Destinations bento, Testimonials + trust badge, FAQ accordion (9), Contact/booking.
- Sticky floating WhatsApp button on all pages; per-tour/course prefilled WhatsApp messages.
- Real EN/ES toggle (persists across navigation + reload); SEO meta + keywords in index.html.
- Verified by testing agent: 100% frontend pass, zero console errors.

## Backlog / Next
- P1: Replace stock photos/videos with the client's real media (user will provide in next phase).
- P2: Add real Google reviews embed/widget; add a gallery/video section; add a simple booking form with backend if lead capture is desired.
- P2: Add a logo asset / favicon; structured data (LocalBusiness JSON-LD) for richer SEO.
