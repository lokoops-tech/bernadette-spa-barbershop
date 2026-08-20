import "./ServiceCard.css";

export default function ServiceCard({ icon: Icon, name, description, price, tone = "ink" }) {
  return (
    <div className={`service-card service-card--${tone}`}>
      <div className="service-card__main">
        <div className="service-card__icon">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className="service-card__text">
          <h3>{name}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>
      <div className="service-card__stub">
        <span className="service-card__price">{price}</span>
      </div>
    </div>
  );
}
