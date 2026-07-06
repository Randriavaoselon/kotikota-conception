import BoutonSavoirPlus from "./BouttonSavoirPlus";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import ServiceImage from "./ServiceImage";

import "../styles/ServiceDescription.css";

const ServiceDescription = ({ ServiceOpenSideBarContact }) => {
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
        id="services"
        className={`service-description ${
          isVisible ? "service-description--visible" : ""
        }`}
        ref={sectionRef}
      >
        <div className="service-description__bg" ref={bgRef}></div>

        <div className="container">
          <div className="service-description__row">
            <div className="service-description__col-left service-description__slide-left">
              <span className="service-description__badge">
                Nos Services
              </span>
              <h2 className="service-description__title">
              Une solution de collecte de fonds simple, rapide et sécurisée.
              </h2>
            </div>

            <div className="service-description__col-right service-description__slide-right">
              <p className="service-description__text">
              Nous mettons à votre disposition une plateforme de cagnotte en ligne simple, rapide et sécurisée, pour vous accompagner dans tous les moments importants de la vie et faciliter la solidarité entre proches, où qu'ils se trouvent.
              </p>

              <BoutonSavoirPlus
                icon={FiArrowRight}
                onClick={() => ServiceOpenSideBarContact("contact")}
                className="service-description__btn"
              />

            </div>
          </div>
        </div>
      </section>
      <ServiceImage />
    </>
  );
};

export default ServiceDescription;