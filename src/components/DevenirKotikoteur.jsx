import { useEffect, useRef, useState, useMemo } from "react";
import imgKotikoteur from "../assets/imgDevenirKotikota.webp";
import imgFlexibilite from "../assets/picto-acteur.webp";
import imgRemuneration from "../assets/picto-connect.webp";
import imgCommunaute from "../assets/picto-eco.webp";
import imgAccompagnement from "../assets/picto-zero.webp";
import "../styles/DevenirKotikoteur.css";

const DevenirKotikoteur = () => {
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
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // useMemo : ces tableaux ne changent jamais, on évite de les recréer à chaque render
  const leftCards = useMemo(
    () => [
      {
        title: "Soyez acteur du changement",
        desc: "Changez la vie des autres",
        img: imgFlexibilite,
      },
      {
        title: "Des projets vérifiés",
        desc: "Rassurez vos contributeurs",
        img: imgRemuneration,
      },
    ],
    []
  );

  const rightCards = useMemo(
    () => [
      {
        title: "Zéro empreinte carbone",
        desc: "Opérations 100% en ligne",
        img: imgCommunaute,
      },
      {
        title: "Mobile money ou Carte bancaire",
        desc: "C’est vous qui choisissez",
        img: imgAccompagnement,
      },
    ],
    []
  );

  const badges = useMemo(() => ["Solidarité", "Confiance", "Simplicité"], []);

  return (
    <section
      id="create"
      className={`devenir-kotikoteur ${
        isVisible ? "devenir-kotikoteur--visible" : ""
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="devenir-kotikoteur__row">
          <div className="devenir-kotikoteur__col-side">
            {leftCards.map((card, index) => (
              <div
                className="devenir-kotikoteur__card devenir-kotikoteur__converge devenir-kotikoteur__converge--left"
                key={index}
                style={{ transitionDelay: `${0.15 + index * 0.15}s` }}
              >
                <div className="devenir-kotikoteur__card-content">
                  <h4 className="devenir-kotikoteur__card-title">
                    {card.title}
                  </h4>
                  <p className="devenir-kotikoteur__card-desc">{card.desc}</p>
                </div>
                <img
                  src={card.img}
                  alt={card.title}
                  className="devenir-kotikoteur__card-img"
                  width="64"
                  height="64"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="devenir-kotikoteur__col-center">
            <div className="devenir-kotikoteur__image-wrap devenir-kotikoteur__converge devenir-kotikoteur__converge--center">
              <img
                src={imgKotikoteur}
                alt="Devenir Kotikoteur"
                className="devenir-kotikoteur__image"
                width="420"
                height="420"
                loading="lazy"
              />
              <div className="devenir-kotikoteur__badges">
                {badges.map((badge, index) => (
                  <span
                    className="devenir-kotikoteur__badge devenir-kotikoteur__badge-pop"
                    key={index}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="devenir-kotikoteur__col-side">
            {rightCards.map((card, index) => (
              <div
                className="devenir-kotikoteur__card devenir-kotikoteur__converge devenir-kotikoteur__converge--right"
                key={index}
                style={{ transitionDelay: `${0.15 + index * 0.15}s` }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="devenir-kotikoteur__card-img"
                  width="64"
                  height="64"
                  loading="lazy"
                />
                <div className="devenir-kotikoteur__card-content">
                  <h4 className="devenir-kotikoteur__card-title">
                    {card.title}
                  </h4>
                  <p className="devenir-kotikoteur__card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevenirKotikoteur;