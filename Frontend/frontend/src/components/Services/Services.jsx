import {
  Scissors,
  Flame,
  Droplets,
  Baby,
  Shield,
  Palette,
  Crown,
  Wind,
  Sun,
  Sparkles,
  Waves,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import "./Services.css";

const BARBER_SERVICES = [
  { icon: Scissors, name: "Fade Cut", description: "Skin, mid or low fade, shaped to you", price: "KSh 500" },
  { icon: Wind, name: "Hair Shape-Up", description: "Quick line-up between full cuts", price: "KSh 300" },
  { icon: Scissors, name: "Razor Cut", description: "Precision cut finished with a straight razor", price: "KSh 600" },
  { icon: Baby, name: "Children's Cuts", description: "Patient, gentle cuts for younger clients", price: "KSh 400" },
  { icon: Shield, name: "Military Haircut", description: "Sharp, regulation-style short back and sides", price: "KSh 500" },
  { icon: Scissors, name: "Beard Trim", description: "Shaped and lined for a clean finish", price: "KSh 300" },
  { icon: Palette, name: "Beard Dyeing", description: "Even, natural-looking beard colour", price: "KSh 800" },
  { icon: Scissors, name: "Beard Maintenance", description: "Ongoing shaping to keep your beard sharp", price: "KSh 350" },
  { icon: Flame, name: "Hot Towel Shave", description: "Classic straight-razor shave with hot towel prep", price: "KSh 600" },
  { icon: Flame, name: "Head Shave", description: "Full clean shave, finished smooth", price: "KSh 500" },
  { icon: Palette, name: "Hair Colouring", description: "Full colour or grey coverage", price: "KSh 1,200" },
  { icon: Droplets, name: "Capillary Hair Treatment", description: "Scalp and hair restoration treatment", price: "KSh 1,500" },
  { icon: Droplets, name: "Shampoo & Conditioning", description: "Wash and condition before or after your cut", price: "KSh 200" },
  { icon: Sun, name: "Male Body Hair Removal", description: "Waxing for chest, back or arms", price: "From KSh 800" },
  { icon: Sun, name: "Waxing", description: "Precision waxing for face and body", price: "From KSh 500" },
  { icon: Crown, name: "Groom Packages", description: "Cut, shave and beard care bundled together", price: "From KSh 1,800" },
];

const SPA_SERVICES = [
  { icon: Sparkles, name: "Signature Facial", description: "Cleanse, exfoliate and hydrate for tired skin", price: "KSh 1,500" },
  { icon: Sparkles, name: "Deep Cleanse Facial", description: "Targeted treatment for congested skin", price: "KSh 2,000" },
  { icon: Waves, name: "Full Body Massage", description: "60-minute full body relaxation massage", price: "KSh 2,000" },
  { icon: Waves, name: "Back, Neck & Shoulder Massage", description: "Focused release for desk-bound tension", price: "KSh 1,200" },
  { icon: Flame, name: "Hot Stone Massage", description: "Heated stones to ease deep muscle tension", price: "KSh 2,500" },
];

const Services=()=> {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="eyebrow">Full menu</span>
          <h1>Services &amp; pricing</h1>
          <p>
            Every treatment below is available by walk-in or appointment.
            Prices are a guide — confirm your exact total when you call or
            WhatsApp 0718 904059.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <SectionHeading
            eyebrow="Barbershop"
            title="Cuts, shaves & grooming"
            description="Precision barbering for every style, from a weekly fade to full grooming packages."
          />
          <div className="services-grid">
            {BARBER_SERVICES.map((s) => (
              <ServiceCard key={s.name} {...s} tone="ink" />
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Spa"
            title="Facials & massage"
            description="Slow down on the other side of the shop with treatments built to actually relax you."
          />
          <div className="services-grid">
            {SPA_SERVICES.map((s) => (
              <ServiceCard key={s.name} {...s} tone="sage" />
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__inner">
          <div>
            <h2>Not sure what to book?</h2>
            <p>Tell us what you're after on WhatsApp and we'll recommend the right treatment.</p>
          </div>
          <a
            className="btn btn--brass"
            href="https://wa.me/254718904059?text=Hi%20Bernadette%2C%20I%27d%20like%20some%20help%20choosing%20a%20service"
            target="_blank"
            rel="noreferrer"
          >
            Chat with us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
export default Services