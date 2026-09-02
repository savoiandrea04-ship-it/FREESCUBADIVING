# Freeway Scuba Diving — Content Panel (Sanity Studio)

This is the admin panel where the client edits **tours, packages, courses, FAQ and reviews**
(prices, texts, images) without touching code. Content is bilingual (English + Spanish).

## What the client can edit here
- **Dive Tours** — cenote, reef, wreck, Cozumel cards
- **Packages & Tours** — multi-day packages, snorkeling tours
- **PADI Courses**
- **FAQ**
- **Reviews**

Each editable text has an 🇬🇧 English and 🇪🇸 Español box. Prices are single values.
Images are uploaded/cropped directly (no more Google Drive links).

---

## First-time setup (once)

1. Create a free Sanity project at https://sanity.io → note the **Project ID**.
2. In this `studio/` folder:
   ```bash
   cp .env.example .env
   # put SANITY_STUDIO_PROJECT_ID in .env
   npm install
   ```
3. Run locally to check it works:
   ```bash
   npm run dev        # opens http://localhost:3333
   ```
4. Migrate the current website content into Sanity (one time, on an empty dataset):
   ```bash
   # get an Editor token: Manage → API → Tokens
   SANITY_STUDIO_PROJECT_ID=xxxx SANITY_TOKEN=yyyy npm run import
   ```
5. Publish the panel so the client can reach it online:
   ```bash
   npm run deploy     # → https://freewayscuba.sanity.studio
   ```

## Connecting the website
In `frontend/`, set these env vars (locally in `.env`, and in Vercel):
```
REACT_APP_SANITY_PROJECT_ID=xxxx
REACT_APP_SANITY_DATASET=production
```
When these are present the site reads content from Sanity; when absent it falls back
to `src/data/content.js`, so nothing breaks before the CMS is connected.
