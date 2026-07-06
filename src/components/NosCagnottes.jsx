import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/NosCagnottes.css";

import imgCagnotte1 from "../assets/cagnotte-1.webp";
import imgCagnotte2 from "../assets/cagnotte-2.webp";
import imgCagnotte3 from "../assets/cagnotte-3.webp";
import imgCagnotte4 from "../assets/cagnotte-4.webp";
import imgCagnotte5 from "../assets/cagnotte-5.webp";
import imgCagnotte6 from "../assets/cagnotte-6.webp";

const AnimatedNumber = ({ value, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <>{count}</>;
};

const NosCagnottes = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cagnottes = [
    {
      img: imgCagnotte1,
      title: "BAREA U23 Miara milalao",
      desc: "Miarahaba atsika rehetra mpitia baolina kitra Malagasy",
      jours: 12,
      participants: 48,
      montant: 850000,
    },
    {
      img: imgCagnotte2,
      title: "UN COUP de POUCE en pleine CRISE pour les POTES",
      desc: "TeenKetrika.com est un site web qui a pour mission d'accompagner les jeunes",
      jours: 20,
      participants: 63,
      montant: 1200000,
    },
    {
      img: imgCagnotte3,
      title: "URGENT: Soutenons Antsa pour sa greffe de moelle",
      desc: "Je m'appelle Naly Antsaniaina RAZAFINDRALAMBO et j'ai 27 ans.",
      jours: 8,
      participants: 25,
      montant: 430000,
    },
    {
      img: imgCagnotte4,
      title: "100 Livres anglais attentand à la bibliotheque à Tana !",
      desc: "85% des jeunes malgache n'ont jamais tune un livre Ecrit entierement anglais",
      jours: 15,
      participants: 37,
      montant: 610000,
    },
    {
      img: imgCagnotte5,
      title: "Sortie récréative SC",
      desc: "On organise une petite sortie en collegue pour partager un bon moment ensemble.",
      jours: 5,
      participants: 19,
      montant: 275000,
    },
    {
      img: imgCagnotte6,
      title: "Cagnotte Gazela",
      desc: "Projet Tanora il Batir independance de la jeunesse malgache par la formation",
      jours: 3,
      participants: 52,
      montant: 940000,
    },
  ];

  return (
    <section
      id="funds"
      className={`nos-cagnottes ${isVisible ? "nos-cagnottes--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="nos-cagnottes__row">
          <button
            className="nos-cagnottes__nav nos-cagnottes__nav--prev"
            aria-label="Cagnotte précédente"
            ref={(node) => setPrevEl(node)}
          >
            <FiChevronLeft />
          </button>

          {prevEl && nextEl && (
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={24}
              navigation={{ prevEl, nextEl }}
              breakpoints={{
                0: { slidesPerView: 1 },
                700: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
              className="nos-cagnottes__slider"
            >
              {cagnottes.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="cagnotte-card cagnotte-card__reveal"
                    style={{ transitionDelay: `${0.1 * index}s` }}
                  >
                    <div className="cagnotte-card__image-wrap">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="cagnotte-card__image"
                      />
                    </div>
                    <div className="cagnotte-card__body">
                      <h4 className="cagnotte-card__title">{item.title}</h4>
                      <p className="cagnotte-card__desc">{item.desc}</p>
                    </div>

                    <div className="cagnotte-card__footer">
                      <div className="cagnotte-card__stat">
                        <FiCalendar className="cagnotte-card__icon" />
                        <span>
                          <AnimatedNumber
                            value={item.jours}
                            isVisible={isVisible}
                          />{" "}
                          J
                        </span>
                      </div>
                      <div className="cagnotte-card__stat">
                        <FiUsers className="cagnotte-card__icon" />
                        <span>
                          <AnimatedNumber
                            value={item.participants}
                            isVisible={isVisible}
                          />
                        </span>
                      </div>
                      <div className="cagnotte-card__stat">
                        <FiDollarSign className="cagnotte-card__icon" />
                        <span>
                          <AnimatedNumber
                            value={item.montant}
                            isVisible={isVisible}
                          />{" "}
                          Ar
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            className="nos-cagnottes__nav nos-cagnottes__nav--next"
            aria-label="Cagnotte suivante"
            ref={(node) => setNextEl(node)}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NosCagnottes;
