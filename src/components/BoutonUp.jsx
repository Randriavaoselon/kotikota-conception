import { useEffect, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi";
import "../styles/BoutonUp.css";

const BoutonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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