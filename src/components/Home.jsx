import { FiPlay, FiX } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";

import NombreGeneral from "./NombreGeneral";
import Apropos from "./Apropos";
import Presentation from "./Presentation";
import ButtonStandar from "./ButtonStandar";
import heroImage from "../assets/heroImage.webp";
import "../styles/Home.css";

const Home = ({ onOpenKotiKotaModal, onOpenSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasOpenedOnce(true);
    }

    if (isOpen && window.innerWidth <= 992) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home__row">
            <div className="home__col-left">
              <span className="home__subtitle">Confiance & Solidarité</span>
              <h1 className="home__title">Ensemble, tout devient possible</h1>
              <p className="home__description">
                Découvrez une solution solidaire pour concrétiser vos projets de
                vie à Madagascar. Nous facilitons l'entraide grâce à une
                plateforme de cagnotte sécurisée et inclusive.
              </p>

              <div className="home__buttons">
                <ButtonStandar
                  text="Koti kota c'est quoi ?"
                  onClick={onOpenKotiKotaModal}
                />

                <button className="btn btn--secondary" onClick={handleToggle}>
                  <span>
                    {isOpen ? "Fermer la présentation" : "Voir la présentation"}
                  </span>
                  <FiPlay className="btn__icon" />
                </button>
              </div>
            </div>

            <div className="home__col-right">
              <img
                src={heroImage}
                alt="Expertise illustration"
                className="home__image"
                fetchPriority="high"
                loading="eager"
              />

              <div
                className={`parchment-overlay ${isOpen ? "is-visible" : ""}`}
                onClick={handleClose}
                aria-hidden="true"
              />

              <div
                ref={cardRef}
                className={`parchment-card ${isOpen ? "is-visible" : ""}`}
              >
                <button
                  className="parchment-close"
                  onClick={handleClose}
                  aria-label="Fermer"
                >
                  <FiX />
                </button>

                <div className="parchment-content">
                  <h2 className="parchment-title">Découvrez notre approche</h2>
                  <div className="video-wrapper">
                    {hasOpenedOnce && (
                      <iframe
                        src="https://www.youtube.com/embed/bxOwznec3g4?si=tBfgs9U6ys_UTe_G"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  <p className="parchment-text">
                    Rassemblez votre communauté et transformez chaque moment de
                    vie en un élan de solidarité grâce à une cagnotte simple,
                    rapide et sécurisée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Presentation onOpenSidebar={onOpenSidebar} />
        <Apropos openSidebarApropos={onOpenSidebar} />
        <NombreGeneral />
      </section>
    </>
  );
};

export default Home;