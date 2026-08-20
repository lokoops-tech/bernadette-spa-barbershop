import { MapPin, Phone, Clock, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer=() =>{
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <Scissors size={18} />
            <span>Bernadette Spa &amp; Barbershop</span>
          </div>
          <p>
            Sharp fades, hot towel shaves and restorative spa treatments on
            Kimathi Street — five-star grooming in the heart of Nairobi CBD.
          </p>
          <div className="footer__rating">★★★★★ <span>5.0 · 33 Google reviews</span></div>
        </div>

        <div className="footer__col">
          <h4>Find us</h4>
          <ul>
            <li>
              <MapPin size={15} />
              <span>Kimathi Street, Lyric House, 1st Floor, Nairobi CBD</span>
            </li>
            <li>
              <Phone size={15} />
              <a href="tel:0718904059">0718 904059</a>
            </li>
            {/* <li>
              <Instagram size={15} />
              <a
                href="https://www.instagram.com/bernadette_spa_barbershop/"
                target="_blank"
                rel="noreferrer"
              >
                @bernadette_spa_barbershop
              </a>
            </li> */}
          </ul>
        </div>

        <div className="footer__col">
          <h4>
            <Clock size={15} /> Hours
          </h4>
          <ul className="footer__hours">
            <li><span>Mon – Sat</span><span>8:00 am – 9:30 pm</span></li>
            <li><span>Sunday</span><span>10:00 am – 6:00 pm</span></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul className="footer__nav">
            <li><Link to="/services">Services &amp; pricing</Link></li>
            <li><Link to="/about">Our story</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Book a slot</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} Bernadette Spa &amp; Barbershop. All rights reserved.</span>
        <span>Kimathi St, Lyric House 1F · Nairobi</span>
      </div>
    </footer>
  );
}
export default Footer;
