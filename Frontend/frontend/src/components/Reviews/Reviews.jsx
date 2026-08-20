import { Star, ExternalLink } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import TestimonialCard from "../TestimonialCard/TestimonialCard.jsx";
import "./Reviews.css";

const REVIEWS = [
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
  {
    name: "Jescah Musima",
    role: "Google review",
    quote: "I'll always recommend Bernadette to anyone looking for a shave, massage, scrub, pedicure or manicure within the CBD.",
  },
  {
    name: "Universe Energy",
    role: "Google review",
    quote: "The best barbershop with a classic style at an affordable price for a classy man — give them a chance.",
  },
  {
    name: "David Kimani",
    role: "Google review",
    quote: "I haven't had such a great experience in Nairobi for a really long time. Keep it up!",
  },
  {
    name: "Regina Mwangi",
    role: "Google review",
    quote: "The most elegant beauty spa I've visited — the best experience, from loving and caring people.",
  },
  {
    name: "Caloz Gad",
    role: "Google review",
    quote: "Wonderful experience from start to finish. The team was welcoming and the service was top-notch.",
  },
  {
    name: "Francis Wanderi",
    role: "Google review",
    quote: "Excellent services, professional staff.",
  },
];

// Split into two rows and duplicate each so the loop is seamless
const ROW_1 = REVIEWS.slice(0, 5);
const ROW_2 = REVIEWS.slice(5);
const MARQUEE_ROW_1 = [...ROW_1, ...ROW_1];
const MARQUEE_ROW_2 = [...ROW_2, ...ROW_2];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <section className="reviews-hero">
        <div className="container reviews-hero__inner">
          <div>
            <span className="eyebrow">Client feedback</span>
            <h1>Reviews</h1>
            <p>Real feedback from clients who've sat in our chairs and on our treatment beds.</p>
          </div>
          <div className="reviews-score">
            <span className="reviews-score__num">5.0</span>
            <div className="reviews-score__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="reviews-score__count">33 Google reviews</span>
            <a
              className="reviews-score__link"
              href="https://www.google.com/search?q=Bernadette+Spa+%26+Barbershop+Nairobi"
              target="_blank"
              rel="noreferrer"
            >
              Leave a review <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <SectionHeading eyebrow="From Google & Instagram" title="In our clients' words" />
        </div>

        <div className="reviews-marquee">
          <div className="marquee-row">
            <div className="marquee-track marquee-track--left">
              {MARQUEE_ROW_1.map((r, i) => (
                <TestimonialCard key={`${r.name}-${i}`} {...r} />
              ))}
            </div>
          </div>

          <div className="marquee-row">
            <div className="marquee-track marquee-track--right">
              {MARQUEE_ROW_2.map((r, i) => (
                <TestimonialCard key={`${r.name}-${i}`} {...r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;