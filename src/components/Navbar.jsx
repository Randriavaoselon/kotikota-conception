import { useState, useEffect, useCallback } from "react";
import { FiLogIn, FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

import "../styles/Navbar.css";
import logoKoti from "../assets/logo.webp";

const Navbar = ({ onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optimisation du scroll avec une vérification de rendu
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Gestion du scroll body pour le mobile
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Mémoïsation des actions
  const handleOpenSidebar = useCallback((type) => {
    onOpenSidebar(type);
    setMobileMenuOpen(false);
  }, [onOpenSidebar]);

  const toggleMenu = useCallback((isOpen) => {
    setMobileMenuOpen(isOpen);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar__row">
            <div className="navbar__logo">
              <a href="/">
                <img src={logoKoti} alt="Logo Koti Kota" />
              </a>
            </div>

            <ul className="navbar__menu">
              <li className="navbar__item"><a href="#about" className="navbar__link">Qui sommes-nous ?</a></li>
              <li className="navbar__item"><a href="#funds" className="navbar__link">Toutes les cagnottes</a></li>
              <li className="navbar__item">
                <a href="#create" className="navbar__link" onClick={(e) => { e.preventDefault(); handleOpenSidebar("auth"); }}>
                  Créer ma cagnotte
                </a>
              </li>
            </ul>

            <div className="navbar__action">
              <a href="#contact" className="btn btn--outline-contact" onClick={(e) => { e.preventDefault(); handleOpenSidebar("contact"); }}>
                <FiPhoneCall className="btn__icon" /> Contact
              </a>
              <button type="button" className="btn btn--primary-login" onClick={() => handleOpenSidebar("auth")}>
                <FiLogIn className="btn__icon" /> Connexion
              </button>
            </div>

            <button type="button" className="navbar__toggle" onClick={() => toggleMenu(true)} aria-label="Ouvrir le menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar__mobile-overlay ${isMobileMenuOpen ? "is-visible" : ""}`} onClick={() => toggleMenu(false)} />

      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        <div className="navbar__mobile-header">
          <img src={logoKoti} alt="Logo Koti Kota" className="navbar__mobile-logo" />
          <button type="button" className="navbar__mobile-close" onClick={() => toggleMenu(false)} aria-label="Fermer le menu">
            <FiX />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          <li><a href="#about" onClick={() => toggleMenu(false)}>Qui sommes-nous ?</a></li>
          <li><a href="#funds" onClick={() => toggleMenu(false)}>Toutes les cagnottes</a></li>
          <li><a href="#create" onClick={(e) => { e.preventDefault(); handleOpenSidebar("auth"); }}>Créer ma cagnotte</a></li>
        </ul>

        <div className="navbar__mobile-actions">
          <a href="#contact" className="btn btn--outline-contact" onClick={(e) => { e.preventDefault(); handleOpenSidebar("contact"); }}>
            <FiPhoneCall className="btn__icon" /> Contact
          </a>
          <button type="button" className="btn btn--primary-login" onClick={() => handleOpenSidebar("auth")}>
            <FiLogIn className="btn__icon" /> Connexion
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;