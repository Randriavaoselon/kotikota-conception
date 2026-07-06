import { FiX, FiChevronDown } from "react-icons/fi";
import {
  FaBirthdayCake,
  FaRing,
  FaGem,
  FaBaby,
  FaHome,
  FaGraduationCap,
  FaSuitcase,
  FaEllipsisH,
  FaCross,
  FaBriefcaseMedical,
  FaPlaneDeparture,
  FaGlassCheers,
  FaHandsHelping,
  FaBuilding,
  FaPiggyBank,
  FaLeaf,
  FaPaw,
  FaPray,
  FaVenus,
  FaHouseDamage,
  FaChild,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import BoutonSavoirPlus from "./BouttonSavoirPlus";
import logoKoti from "../assets/logo.png";
import "../styles/KotiKotaModal.css";

const categories = [
  {
    id: "cadeau",
    label: "Offrir un cadeau",
    items: [
      { title: "Anniversaire", icon: FaBirthdayCake },
      { title: "Mariage", icon: FaRing },
      { title: "Fiançailles", icon: FaGem },
      { title: "Naissance", icon: FaBaby },
      { title: "Crémaillère", icon: FaHome },
      { title: "Diplôme", icon: FaGraduationCap },
      { title: "Pot de départ", icon: FaSuitcase },
      { title: "Autre", icon: FaEllipsisH },
    ],
  },
  {
    id: "depense",
    label: "Organiser une Dépense",
    items: [
      { title: "Obsèques", icon: FaCross },
      { title: "Soins médicaux", icon: FaBriefcaseMedical },
      { title: "Voyage en groupe", icon: FaPlaneDeparture },
      { title: "Soirée ou sortie de groupe", icon: FaGlassCheers },
      { title: "Autres", icon: FaEllipsisH },
    ],
  },
  {
    id: "projet",
    label: "Financer un Projet",
    items: [
      { title: "Action humanitaire", icon: FaHandsHelping },
      { title: "Création d'entreprise", icon: FaBuilding },
      { title: "Investissement associatif", icon: FaPiggyBank },
      { title: "Action environnementale", icon: FaLeaf },
      { title: "Cause animale", icon: FaPaw },
      { title: "Action religieuse", icon: FaPray },
      { title: "Autonomisation de la femme", icon: FaVenus },
      { title: "Catastrophes naturelles", icon: FaHouseDamage },
      { title: "Éducation des enfants", icon: FaChild },
      { title: "Lutte contre la pauvreté", icon: FaHandHoldingHeart },
      { title: "Autre", icon: FaEllipsisH },
    ],
  },
];

const KotiKotaModal = ({
  isOpen,
  onClose,
  onContactClick,
  onConnexionClick,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Bloque le scroll du body pendant que le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fermeture au clavier (Échap)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setActiveCategory(null);
  }, [isOpen]);

  const toggleCategory = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div
        className={`kotikota-modal-overlay ${isOpen ? "is-visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`kotikota-modal ${isOpen ? "is-visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="kotikota-modal-title"
      >
        <div className="kotikota-modal__header">
          <button
            className="kotikota-modal__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <FiX />
          </button>

          <div className="kotikota-modal__logo-wrap">
            <img
              src={logoKoti}
              alt="Logo Koti Kota"
              className="kotikota-modal__logo"
            />
          </div>
        </div>

        <div className="kotikota-modal__scroll">
          <div className="kotikota-modal__content">
            <h2 id="kotikota-modal-title" className="kotikota-modal__title">
              KOTI KOTA, LA PREMIÈRE CAGNOTTE EN LIGNE À MADAGASCAR
            </h2>

            <div className="kotikota-modal__body">
              <p className="kotikota-modal__question">
                Une cagnotte, qu'est-ce que c'est ?
              </p>

              <p className="kotikota-modal__text">
                Une cagnotte est une collecte d'argent pour soutenir et financer
                un projet, une cause ou un événement.
              </p>

              <div className="kotikota-modal__steps-text">
                <p className="kotikota-modal__text kotikota-modal__text--tight">
                  Avec Koti Kota, créez votre cagnotte en ligne en seulement 30
                  secondes.
                </p>

                <p className="kotikota-modal__text kotikota-modal__text--tight">
                  Partagez-la à votre entourage sur vos réseaux sociaux en 2
                  clics.
                </p>

                <p className="kotikota-modal__text kotikota-modal__text--tight">
                  Invitez-les à participer via Mobile Money ou Virement bancaire
                  et Paypal.
                </p>

                <p className="kotikota-modal__text kotikota-modal__text--tight">
                  Collectez immédiatement les sommes en ligne depuis le monde
                  entier.
                </p>
              </div>
            </div>

            {/* Accordéon des 3 catégories */}
            <div className="kotikota-modal__tabs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <div
                    key={cat.id}
                    className={`kotikota-accordion ${
                      isActive ? "is-open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="kotikota-accordion__trigger"
                      onClick={() => toggleCategory(cat.id)}
                      aria-expanded={isActive}
                      aria-controls={`panel-${cat.id}`}
                    >
                      <span className="kotikota-accordion__label">
                        {cat.label}
                      </span>
                      <FiChevronDown className="kotikota-accordion__chevron" />
                    </button>

                    <div
                      id={`panel-${cat.id}`}
                      className="kotikota-accordion__panel"
                      role="region"
                    >
                      <div className="kotikota-accordion__panel-inner">
                        <div className="kotikota-accordion__grid">
                          {cat.items.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <div className="kotikota-accordion__item" key={i}>
                                <div className="kotikota-accordion__item-icon-wrap">
                                  <Icon className="kotikota-accordion__item-icon" />
                                </div>
                                <p className="kotikota-accordion__item-title">
                                  {item.title}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Boutons d'action */}
            <div className="kotikota-modal__actions">
              <BoutonSavoirPlus
                text="Créez votre cagnotte"
                onClick={() => onConnexionClick("auth")}
                className="kotikota-btn kotikota-btn--primary"
              />

              <button
                type="button"
                className="kotikota-btn kotikota-btn--secondary"
                onClick={() => {
                  if (onContactClick) onContactClick();
                }}
              >
                Contactez-nous
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KotiKotaModal;
