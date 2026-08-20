import { Scissors, Sparkles, Users, Award, MapPin } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./About.css";

const VALUES = [
  {
    icon: Scissors,
    title: "Craft over shortcuts",
    text: "Every cut, shave and colour job is done at a proper pace — we'd rather you leave looking right than leave quickly.",
  },
  {
    icon: Sparkles,
    title: "Spa treatments that work",
    text: "Our facials and massages follow real technique, not a rushed add-on service.",
  },
  {
    icon: Users,
    title: "Regulars, not just clients",
    text: "Most of our chairs are filled by people who've been coming back for years — that's the standard we hold ourselves to.",
  },
];

const  About =()=> {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div>
            <span className="eyebrow">Our story</span>
            <h1>Two crafts, one standard.</h1>
            <p>
              Bernadette Spa &amp; Barbershop sits on the 1st floor of Lyric
              House on Kimathi Street, right in Nairobi's CBD. We started as a
              barbershop with a simple idea: give Nairobi's professionals a
              place to get a proper cut without rushing. The spa side grew
              naturally from the same idea — grooming shouldn't stop at the
              hairline.
            </p>
            <p>
              Today we run both under one roof, one team, one standard of
              care — whether you're in for a five-minute shape-up or a full
              hour of massage.
            </p>
          </div>
          <div className="about-hero__stat-card">
            <div className="about-stat">
              <span className="about-stat__num">5.0</span>
              <span className="about-stat__label">Google rating · 33 reviews</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">120+</span>
              <span className="about-stat__label">Instagram community</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">16+</span>
              <span className="about-stat__label">Barbershop &amp; spa services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <SectionHeading
            eyebrow="What we hold ourselves to"
            title="The standard behind every appointment"
            align="center"
          />
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon">
                  <v.icon size={20} strokeWidth={1.75} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-location">
        <div className="container about-location__inner">
          <Award size={26} strokeWidth={1.5} />
          <div>
            <h2>Find us at Lyric House</h2>
            <p>
              <MapPin size={15} /> Kimathi Street, Lyric House, 1st Floor — Nairobi CBD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
