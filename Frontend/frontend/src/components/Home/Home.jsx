import { Link } from "react-router-dom";
import {
  Scissors,
  Sparkles,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Flame,
  Waves,
} from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import TestimonialCard from "../TestimonialCard/TestimonialCard.jsx";
import image1 from '../../src/assets/hero1.Webp';
import image2 from '../../src/assets/hero 2.Webp';
import image3 from '../../src/assets/hero3.Webp';
import image4 from '../../src/assets/hero 4.Webp';
import "./Home.css";


const HIGHLIGHT_SERVICES = [
  { icon: Scissors, name: "Fade Cut", price: "From KSh 500", tone: "ink" },
  { icon: Flame, name: "Hot Towel Shave", price: "From KSh 600", tone: "ink" },
  { icon: Sparkles, name: "Signature Facial", price: "From KSh 1,500", tone: "sage" },
  { icon: Waves, name: "Full Body Massage", price: "From KSh 2,000", tone: "sage" },
];

const TESTIMONIALS = [
  {
    name: "Erastus M. Muhiu",
    role: "Google review",
    quote: "I'd tried other places before, but Bernadette stands out — friendly team, clean environment, and quality service every visit.",
  },
  {
    name: "Jacob M.",
    role: "Google review",
    quote: "The perfect blend of a top-tier barbershop and a relaxing spa. Calming from the moment you walk in, and the cut was exactly what I asked for.",
  },
  {
    name: "Okello Global Fitness",
    role: "Google review",
    quote: "The hot towel shave was impeccable — no nicks, just a perfect finish. Followed it with a facial massage and it was pure bliss.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero: real work up front — a feature shot plus a strip of the room */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Kimathi Street · Nairobi CBD</span>
            <h1>
              Where a sharp fade
              <br />
              meets a slow exhale.
            </h1>
            <p>
              Bernadette Spa &amp; Barbershop pairs precision grooming with
              genuine relaxation — haircuts, shaves and colour on one side,
              facials and massage on the other, under one roof at Lyric House.
            </p>

            <div className="hero__actions">
              <a
                className="btn btn--brass"
                href="https://wa.me/254718904059?text=Hi%20Bernadette%20Spa%20%26%20Barbershop%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp <ArrowRight size={16} />
              </a>
              <Link className="btn btn--ghost" to="/services">
                View services &amp; prices
              </Link>
            </div>

            <div className="hero__meta">
              <span>
                <Star size={14} fill="currentColor" strokeWidth={0} /> 5.0 (33 Google reviews)
              </span>
              <span>
                <Clock size={14} /> Open today · closes 9:30 pm
              </span>
            </div>
          </div>

          <div className="hero__divider" aria-hidden="true" />

          <div className="hero__gallery">
            <div className="hero__gallery-feature">
              <img src={image1} alt="Barber giving a precise fade cut at Bernadette Spa & Barbershop" loading="eager" />
              <span className="hero__gallery-tag">Fade Cut</span>
            </div>
            <div className="hero__gallery-strip">
              <div className="hero__gallery-thumb">
                <img src={image2} alt="Hot towel shave in progress" loading="lazy" />
                <span className="hero__gallery-tag">Hot Towel Shave</span>
              </div>
              <div className="hero__gallery-thumb">
                <img src={image3} alt="Signature facial treatment at the spa side" loading="lazy" />
                <span className="hero__gallery-tag">Signature Facial</span>
              </div>
              <div className="hero__gallery-thumb">
                <img src={image4} alt="Full body massage treatment room" loading="lazy" />
                <span className="hero__gallery-tag">Full Body Massage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight services */}
      <section className="home-section">
        <div className="container">
          <SectionHeading
            eyebrow="Fan favourites"
            title="What clients book first"
            description="A quick look at our most-requested treatments from both sides of the shop — see the full menu for everything else we offer."
          />
          <div className="home-highlights">
            {HIGHLIGHT_SERVICES.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
          <div className="home-highlights__cta">
            <Link className="btn btn--outline" to="/services">
              See full menu <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us strip */}
      <section className="home-section home-section--dark">
        <div className="container why-us">
          <div className="why-us__text">
            <SectionHeading
              light
              eyebrow="Why Bernadette"
              title="One address, two disciplines, zero compromise"
              description="We built Bernadette so you don't have to choose between a proper barber and a proper spa — book one appointment and get both, back to back if you like."
            />
          </div>
          <ul className="why-us__list">
            <li>
              <span className="why-us__num">01</span>
              <div>
                <h4>Skilled, consistent barbers</h4>
                <p>The same steady hand for your fade, beard line and shave, every visit.</p>
              </div>
            </li>
            <li>
              <span className="why-us__num">02</span>
              <div>
                <h4>Real spa treatments</h4>
                <p>Facials and massages performed with proper technique, not an afterthought.</p>
              </div>
            </li>
            <li>
              <span className="why-us__num">03</span>
              <div>
                <h4>Book in seconds</h4>
                <p>Call or WhatsApp 0718 904059 and we'll confirm your slot right away.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-section">
        <div className="container">
          <SectionHeading
            eyebrow="33 five-star reviews"
            title="What Nairobi is saying"
            align="center"
          />
          <div className="home-testimonials">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Location / CTA banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <span className="eyebrow">Visit us today</span>
            <h2>Lyric House, 1st Floor, Kimathi Street</h2>
            <p>
              <MapPin size={15} /> Two minutes from Kimathi Street's main
              junction, in Nairobi CBD.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a className="btn btn--brass" href="tel:0718904059">
              Call 0718 904059
            </a>
            <Link className="btn btn--ghost-dark" to="/contact">
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
