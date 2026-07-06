import { useEffect, useRef, useState } from "react";
import {
  FiTrendingUp,
  FiChevronRight,
  FiActivity,
  FiGlobe,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

import imgService1 from "../assets/ImageBacgroundHero1.webp";
import imgService2 from "../assets/service-international.webp";
import imgService3 from "../assets/service-collectFond.webp";
import imgService4 from "../assets/service-solidaire.webp";
import imgService5 from "../assets/service-rapide.webp";
import "../styles/ServiceImage.css";

const ServiceImage = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      img: imgService1,
      icon: <FiActivity />,
      title: "Aide d'urgence",
      desc: "Collectez des fonds rapidement pour soutenir les victimes.",
    },
    {
      img: imgService2,
      icon: <FiGlobe />,
      title: "Solidarité Sans Frontières",
      desc: "Connectez vos proches partout dans le monde pour soutenir vos projets et vos moments de vie.",
    },
    {
      img: imgService3,
      icon: <FiTrendingUp />,
      title: "Impact Social ⭐",
      desc: "Favorisons l'entraide en donnant à chacun les moyens de soutenir les causes et les personnes qui comptent.",
    },
    {
      img: imgService4,
      icon: <FiHeart />,
      title: "Aide à la Naissance",
      desc: "Organisez une cagnotte simple et sécurisée pour accompagner les premiers moments de vie.",
    },
    {
      img: imgService5,
      icon: <FiShare2 />,
      title: "Nos Réseaux",
      desc: "Connectez les communautés partout dans le monde pour soutenir chaque moment important de la vie.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);
  const lastIndex = visibleServices.length - 1;

  return (
    <section
      className={`service-image ${isVisible ? "service-image--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="service-image__row">
          {visibleServices.map((service, index) => (
            <div
              className="service-image__col service-image__stack"
              key={index}
              style={{ transitionDelay: `${0.12 * index}s` }}
            >
              <div className="service-image__card">
                <div className="service-image__media">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-image__img"
                  />
                  <div className="service-image__overlay">
                    <div className="service-image__head">
                      <span className="service-image__icon">
                        {service.icon}
                      </span>
                      <h4 className="service-image__title">{service.title}</h4>
                    </div>
                    <p className="service-image__desc">{service.desc}</p>
                  </div>
                </div>

                {!showAll && index === lastIndex && (
                  <button
                    className="service-image__more-btn"
                    onClick={() => setShowAll(true)}
                    aria-label="Voir plus de services"
                  >
                    <span className="service-image__more-text">Voir plus</span>
                    <FiChevronRight />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceImage;
