import { Scissors, Flame, Palette, Sparkles, Waves, Building2 } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Gallery.css";

// Swap the `tone` gradients below for real <img> photos once available —
// each tile is set up so a background-image can simply replace the gradient.
const TILES = [
  { icon: Scissors, label: "Fresh fades", tone: "tone-a", span: "tall" },
  { icon: Flame, label: "Hot towel shaves", tone: "tone-b" },
  { icon: Palette, label: "Beard & colour work", tone: "tone-c" },
  { icon: Sparkles, label: "Facial treatments", tone: "tone-d" },
  { icon: Waves, label: "Massage room", tone: "tone-e", span: "tall" },
  { icon: Building2, label: "Inside Lyric House", tone: "tone-f" },
];

const  Gallery=()=> {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <span className="eyebrow">A look inside</span>
          <h1>Gallery</h1>
          <p>
            A preview of the work and space at Bernadette Spa &amp;
            Barbershop. Follow{" "}
            <a
              href="https://www.instagram.com/bernadette_spa_barbershop/"
              target="_blank"
              rel="noreferrer"
            >
              @bernadette_spa_barbershop
            </a>{" "}
            on Instagram for the latest cuts and treatments.
          </p>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {TILES.map((t) => (
              <div className={`gallery-tile ${t.tone} ${t.span === "tall" ? "gallery-tile--tall" : ""}`} key={t.label}>
                <t.icon size={28} strokeWidth={1.5} />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container">
          <SectionHeading
            eyebrow="See it for yourself"
            title="Best seen in person"
            description="Photos only tell half the story — pop into Lyric House on Kimathi Street or book a slot below."
            align="center"
          />
        </div>
      </section>
    </div>
  );
}
export default Gallery;
