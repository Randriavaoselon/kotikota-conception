import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaShieldAlt, FaBullseye, FaHandsHelping } from "react-icons/fa";

import BoutonSavoirPlus from "./BouttonSavoirPlus";
import "../styles/Presentation.css";

const Presentation = ({ onOpenSidebar }) => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.25,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  const handleOpenSidebar = useCallback(() => {
    onOpenSidebar("contact");
  }, [onOpenSidebar]);

  const cards = useMemo(
    () => [
      {
        icon: FaBullseye,
        title: "Mission",
        text: "Nous transformons les élans de générosité en soutien réel et immédiat.",
        className: "info-card-first",
      },
      {
        icon: FaHandsHelping,
        title: "Solidarité",
        text: "Transformez la solidarité en aide rapide et accessible à tous.",
        className: "info-card card-bg-transparent",
        textStyle: { color: "#f8fcfd" },
      },
      {
        icon: FaShieldAlt,
        title: "Sécurité",
        text: "Garantissons la sécurité de vos fonds avec des systèmes de protection avancés.",
        className: "info-card card-bg-transparent",
        textStyle: { color: "#f8fcfd" },
      },
    ],
    []
  );

  return (
    <motion.section
      className="presentation"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="presentation__row">
          <motion.div
            className="presentation__col-left"
            variants={itemVariants}
          >
            <div className="feature-card">
              <h4 className="feature-card__title">
                Notre Vision de l’Impact Social
              </h4>

              <BoutonSavoirPlus
                icon={FiArrowRight}
                onClick={handleOpenSidebar}
                className="feature-card__link"
              />
            </div>
          </motion.div>

          <motion.div
            className="presentation__col-right"
            variants={containerVariants}
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  className={card.className}
                  variants={itemVariants}
                >
                  <Icon className="info-card__icon" />

                  <h5>{card.title}</h5>

                  <p style={card.textStyle}>{card.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Presentation);