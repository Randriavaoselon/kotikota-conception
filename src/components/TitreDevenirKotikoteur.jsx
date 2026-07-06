import { useEffect, useRef, useState } from "react";
import "../styles/TitreDevenirKotikoteur.css";

const TitreDevenirKotikoteur = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ===== Effet parallaxe sur l'arrière-plan =====
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = rect.top * 0.3;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={`titre-devenir ${isVisible ? "titre-devenir--visible" : ""}`}
        ref={sectionRef}
      >
        <div className="titre-devenir__bg" ref={bgRef}></div>

        <div className="container">
          <div className="titre-devenir__row">
            <span className="titre-devenir__badge titre-devenir__reveal titre-devenir__reveal--1">
              Rejoignez-nous
            </span>
            <h2 className="titre-devenir__title titre-devenir__reveal titre-devenir__reveal--2">
              4 Raisons de devenir un Koti-Koteur
            </h2>
            <p className="titre-devenir__text titre-devenir__reveal titre-devenir__reveal--3">
              Rejoignez une communauté engagée, portée par l'innovation et le
              partage, et contribuez à façonner ensemble les solutions de
              demain.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitreDevenirKotikoteur;
