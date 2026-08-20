import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Scissors } from "lucide-react";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const PHONE = "0718 904059";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const renderLinks = (onNavigate) =>
    LINKS.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        end={to === "/"}
        className={({ isActive }) =>
          "navbar__link" + (isActive ? " navbar__link--active" : "")
        }
        onClick={onNavigate}
      >
        {label}
      </NavLink>
    ));

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <Scissors size={18} strokeWidth={2} className="navbar__brand-icon" />
          <span className="navbar__brand-text">
            Bernadette <em>Spa &amp; Barbershop</em>
          </span>
        </NavLink>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {renderLinks()}
        </nav>

        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="navbar__cta">
          <Phone size={15} strokeWidth={2} />
          <span>{PHONE}</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        className={`navbar__links--mobile ${open ? "is-open" : ""}`}
        aria-label="Primary mobile"
      >
        {renderLinks(() => setOpen(false))}
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="navbar__cta navbar__cta--mobile">
          <Phone size={15} strokeWidth={2} />
          <span>Call {PHONE}</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;