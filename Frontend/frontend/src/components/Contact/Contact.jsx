import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./Contact.css";

const SERVICES = [
  "Fade Cut",
  "Beard Trim",
  "Hot Towel Shave",
  "Hair Colouring",
  "Groom Package",
  "Facial",
  "Massage",
  "Something else",
];

const Contact=()=> {
  const [form, setForm] = useState({ name: "", service: SERVICES[0], message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const waLink = () => {
    const text = `Hi Bernadette Spa & Barbershop, I'm ${form.name || "a client"} and I'd like to book: ${form.service}.${
      form.message ? " Note: " + form.message : ""
    }`;
    return `https://wa.me/254718904059?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(waLink(), "_blank", "noreferrer");
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Book your appointment</h1>
          <p>Fill in a few details and we'll open WhatsApp with your booking ready to send.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <SectionHeading eyebrow="Quick booking" title="Tell us what you need" />

            <label className="field">
              <span>Your name</span>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="e.g. Wanjiru Kamau"
                required
              />
            </label>

            <label className="field">
              <span>Service</span>
              <select value={form.service} onChange={update("service")}>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Anything we should know? (optional)</span>
              <textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Preferred day, time, or barber"
                rows={4}
              />
            </label>

            <button className="btn btn--brass" type="submit">
              Send via WhatsApp <Send size={16} />
            </button>
            <p className="contact-form__hint">
              Prefer to call? Ring <a href="tel:0718904059">0718 904059</a> directly.
            </p>
          </form>

          <div className="contact-details">
            <div className="contact-card">
              <MapPin size={18} />
              <div>
                <h4>Visit us</h4>
                <p>Kimathi Street, Lyric House, 1st Floor, Nairobi CBD</p>
              </div>
            </div>
            <div className="contact-card">
              <Phone size={18} />
              <div>
                <h4>Call or WhatsApp</h4>
                <p><a href="tel:0718904059">0718 904059</a></p>
              </div>
            </div>
            <div className="contact-card">
              <Clock size={18} />
              <div>
                <h4>Hours</h4>
                <p>Mon – Sat: 8:00 am – 9:30 pm</p>
                <p>Sunday: 10:00 am – 6:00 pm</p>
              </div>
            </div>
            <div className="contact-card">
              {/* <Instagram size={18} /> */}
              <div>
                <h4>Instagram</h4>
                <p>
                  <a
                    href="https://www.instagram.com/bernadette_spa_barbershop/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @bernadette_spa_barbershop
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Bernadette Spa & Barbershop location"
                src="https://www.google.com/maps?q=Lyric+House+Kimathi+Street+Nairobi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
