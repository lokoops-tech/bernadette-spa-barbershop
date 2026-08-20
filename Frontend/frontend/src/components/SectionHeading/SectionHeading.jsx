import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? "section-heading--light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
