import { useState, useEffect } from "react";
import { FiLogIn, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

import "../styles/Navbar.css";
import logoKoti from "../assets/logo.png";

const Navbar = ({ onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleOpenSidebar = (type) => {
    onOpenSidebar(type);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar__row">
            {/* Logo */}
            <div className="navbar__logo">
              <a href="/">
                <img src={logoKoti} alt="Logo Koti Kota" />
              </a>
            </div>

            {/* Navigation Desktop */}
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="#about" className="navbar__link">
                  Qui sommes-nous ?
                </a>
              </li>

              <li className="navbar__item">
                <a href="#funds" className="navbar__link">
                Toutes les cagnottes
                </a>
              </li>

              <li className="navbar__item">
                <a
                  href="#create"
                  className="navbar__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenSidebar("auth");
                  }}
                > 
                  Créer ma cagnotte
                </a>
              </li>
            </ul>

            {/* Actions Desktop */}
            <div className="navbar__action">
              <a
                href="#contact"
                className="btn btn--outline-contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenSidebar("contact");
                }}
              >
                <FiPhoneCall className="btn__icon" />
                Contact
              </a>

              <button
                type="button"
                className="btn btn--primary-login"
                onClick={() => handleOpenSidebar("auth")}
              >
                <FiLogIn className="btn__icon" />
                Connexion
              </button>
            </div>

            {/* Bouton menu mobile */}
            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`navbar__mobile-overlay ${
          isMobileMenuOpen ? "is-visible" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Menu Mobile */}
      <div
        className={`navbar__mobile-menu ${
          isMobileMenuOpen ? "is-open" : ""
        }`}
      >
        <div className="navbar__mobile-header">
          <img
            src={logoKoti}
            alt="Logo Koti Kota"
            className="navbar__mobile-logo"
          />

          <button
            type="button"
            className="navbar__mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <FiX />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          <li>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              Qui sommes-nous ?
            </a>
          </li>

          <li>
            <a
              href="#funds"
            >
              Toutes les cagnottes
            </a>
          </li>

          <li>
            <a
              href="#create"
              onClick={(e) => {
                e.preventDefault();
                handleOpenSidebar("auth");
              }}
            >
              Créer ma cagnotte
            </a>
          </li>
        </ul>

        <div className="navbar__mobile-actions">
          <a
            href="#contact"
            className="btn btn--outline-contact"
            onClick={(e) => {
              e.preventDefault();
              handleOpenSidebar("contact");
            }}
          >
            <FiPhoneCall className="btn__icon" />
            Contact
          </a>

          <button
            type="button"
            className="btn btn--primary-login"
            onClick={() => handleOpenSidebar("auth")}
          >
            <FiLogIn className="btn__icon" />
            Connexion
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;