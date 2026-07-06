import { useEffect, useState, useCallback, useRef } from "react";
import { PiArrowUpBold } from "react-icons/pi";
import "../styles/BoutonUp.css";

const BoutonUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 400);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      className={`bouton-up ${isVisible ? "bouton-up--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Remonter en haut de la page"
    >
      <PiArrowUpBold />
    </button>
  );
};

export default BoutonUp;