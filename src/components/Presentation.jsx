import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaShieldAlt, FaBullseye, FaHandsHelping } from "react-icons/fa";

import BoutonSavoirPlus from "./BouttonSavoirPlus";
import "../styles/Presentation.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Presentation = ({ onOpenSidebar }) => {

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
                onClick={() => onOpenSidebar("contact")}
                className="feature-card__link"
              />
            </div>
          </motion.div>

          <motion.div
            className="presentation__col-right"
            variants={containerVariants}
          >
            <motion.div className="info-card-first" variants={itemVariants}>
              <FaBullseye className="info-card__icon" />
              <h5>Mission</h5>
              <p>
                Nous transformons les élans de générosité en soutien réel et
                immédiat.
              </p>
            </motion.div>

            <motion.div
              className="info-card card-bg-transparent"
              variants={itemVariants}
            >
              <FaHandsHelping className="info-card__icon" />
              <h5>Solidarité</h5>
              <p style={{ color: "#f8fcfd" }}>
                Transformez la solidarité en aide rapide et accessible à tous.
              </p>
            </motion.div>

            <motion.div
              className="info-card card-bg-transparent"
              variants={itemVariants}
            >
              <FaShieldAlt className="info-card__icon" />
              <h5>Sécurité</h5>
              <p style={{ color: "#f8fcfd" }}>
                Garantissons la sécurité de vos fonds avec des systèmes de
                protection avancés.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Presentation;
