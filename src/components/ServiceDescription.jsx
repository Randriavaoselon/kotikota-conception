import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import BoutonSavoirPlus from "./BouttonSavoirPlus";
import ServiceImage from "./ServiceImage";

import "../styles/ServiceDescription.css";

const ServiceDescription = ({ ServiceOpenSideBarContact }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const rafRef = useRef(null);
  const isVisibleRef = useRef(false);

  /* =========================
     VISIBILITY OBSERVER
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          isVisibleRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =========================
     PARALLAX OPTIMISÉ (RAF)
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current || !isVisibleRef.current)
        return;

      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = rect.top * 0.3;
          bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
                Nous mettons à votre disposition une plateforme de cagnotte en
                ligne simple, rapide et sécurisée, pour vous accompagner dans
                tous les moments importants de la vie et faciliter la solidarité
                entre proches, où qu'ils se trouvent.
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