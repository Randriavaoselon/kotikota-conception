import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  FaUserTie,
  FaCheckCircle,
  FaArrowRight,
  FaBullseye,
} from "react-icons/fa";

import BoutonSavoirPlus from "./BouttonSavoirPlus";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/Apropos.css";

import imgTeam1 from "../assets/kotikota-team1.webp";
import imgTeam2 from "../assets/kotikota-team2.webp";
import imgTeam3 from "../assets/kotikota-team3.webp";

const Apropos = ({ openSidebarApropos }) => {
  const images = [imgTeam1, imgTeam2, imgTeam3];
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

  return (
    <section
      id="about"
      className={`apropos ${isVisible ? "apropos--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="apropos__row">
          <div className="apropos__col-left apropos__fade apropos__fade--1">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="apropos__slider"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="apropos__image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="apropos__sub-row">
              <div className="apropos__sub-col-left">
                <FaUserTie className="apropos__icon" />
                <h4 className="apropos__subtitle">Facilitateur</h4>
              </div>
              <div className="apropos__sub-col-right">
                <p className="apropos__text">
                  KOTI KOTA permet d’accompagner et soutenir chaque malagasy
                  dans les moments de vie importants pour lui. Depuis la
                  naissance d’un enfant au mariage d'un ami jusqu’à
                  l’hospitalisation ou le décès d’un proche... Avec KOTI KOTA
                  collectez des fonds dans le monde entier, de manière
                  instantanée et sécurisée.
                </p>
              </div>
            </div>
          </div>

          <div className="apropos__col-right">
            <div className="apropos__fade apropos__fade--2">
              <h2>Qui sommes-nous ?</h2>
              <p>
                Nous sommes convaincus que le digital permettra d’améliorer
                notre quotidien à Madagascar. En créant ensemble la 1ère
                plateforme de cagnotte en ligne sur Madagascar ce rêve
                d'inclusion numérique est devenu réalité.
              </p>
            </div>

            <div className="apropos__row-2 apropos__fade apropos__fade--3">
              <div className="apropos__row-2-col-left">
                <FaBullseye className="apropos__icon" />
                <h4 className="apropos__subtitle">Notre mission</h4>
              </div>
              <div className="apropos__row-2-col-right">
                <p className="apropos__text">
                  Rejoignez notre communauté de koti-koteurs et aidez-nous à
                  changer la vie de millions de malagasy. Ensemble nous allons
                  valoriser les deux plus grandes ressources africaines, la
                  COMMUNAUTÉ et L’ENTRAIDE.
                </p>
              </div>
            </div>

            <div className="apropos__row-3 apropos__fade apropos__fade--4">
              <p className="apropos__row-3-text" style={{ color: "white" }}>
                <FaCheckCircle className="apropos__check-icon" />
                Une communauté unie pour donner vie à la solidarité au
                quotidien.
              </p>

              <BoutonSavoirPlus
                icon={FaArrowRight}
                onClick={() => openSidebarApropos("contact")}
                className="apropos__btn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
