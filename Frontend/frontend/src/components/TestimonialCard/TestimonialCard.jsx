import { Star } from "lucide-react";
import "./TestimonialCard.css";

const TestimonialCard=({ name, role, quote, rating = 5 })=> {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-card__stars">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial-card__name">{name}</span>
        {role && <span className="testimonial-card__role">{role}</span>}
      </figcaption>
    </figure>
  );
}
export default TestimonialCard
