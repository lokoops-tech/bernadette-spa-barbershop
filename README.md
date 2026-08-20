# Bernadette Spa & Barbershop — website

A React + Vite marketing site for Bernadette Spa & Barbershop (Kimathi
Street, Lyric House, Nairobi CBD), built to turn visitors into WhatsApp/call
bookings.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

This creates a `dist/` folder you can upload to any static host (Netlify,
Vercel, cPanel, GitHub Pages, etc).

## Project structure

```
src/
  components/
    Navbar/Navbar.jsx, Navbar.css
    Footer/Footer.jsx, Footer.css
    WhatsAppButton/WhatsAppButton.jsx, WhatsAppButton.css
    SectionHeading/SectionHeading.jsx, SectionHeading.css
    ServiceCard/ServiceCard.jsx, ServiceCard.css
    TestimonialCard/TestimonialCard.jsx, TestimonialCard.css
    Home/Home.jsx, Home.css
    Services/Services.jsx, Services.css
    About/About.jsx, About.css
    Gallery/Gallery.jsx, Gallery.css
    Reviews/Reviews.jsx, Reviews.css
    Contact/Contact.jsx, Contact.css
  App.jsx, App.css
  main.jsx
  index.css   (colour, type & button tokens shared by every page)
```

Every page and every reusable piece lives in its own folder with a matching
`.jsx` and `.css` file, so you (or a developer) can find and edit anything
quickly.

## Things to update with real business details

- **Prices** — in `src/components/Services/Services.jsx`, every service has
  a placeholder `price`. Swap these for your real menu prices.
- **Photos** — `src/components/Gallery/Gallery.jsx` currently uses styled
  colour tiles as placeholders. Replace the tile `<div>`s with real
  `<img src="..." />` photos of the shop, cuts, and treatments once you have
  them (drop image files in `public/` and reference them as `/your-photo.jpg`).
- **Reviews** — `src/components/Reviews/Reviews.jsx` and
  `src/components/Home/Home.jsx` contain sample quotes. Replace with your
  actual Google review text once you've copied client permission-safe quotes.
- **WhatsApp number** — the number `254718904059` is used in
  `WhatsAppButton.jsx`, `Home.jsx`, `Services.jsx`, and `Contact.jsx`. Update
  all four if the number changes.
- **Hours** — set in `Footer.jsx` and `Contact.jsx`.

## Notes on design

- Colour and type tokens live at the top of `src/index.css` — change a
  colour there and it updates everywhere.
- The split "Barbershop / Spa" hero on the homepage and the ticket-stub
  service cards are the site's signature visual elements, tying the two
  sides of the business together.
- The floating WhatsApp button (bottom-right on every page) is the primary
  conversion path — most first-time visitors will book through it rather
  than calling.
