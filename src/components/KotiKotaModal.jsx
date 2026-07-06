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
import { useEffect, useState, useCallback, memo } from "react";
import BoutonSavoirPlus from "./BouttonSavoirPlus";
import logoKoti from "../assets/logo.webp";
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

const AccordionItem = memo(function AccordionItem({ title, Icon }) {
  return (
    <div className="kotikota-accordion__item">
      <div className="kotikota-accordion__item-icon-wrap">
        <Icon className="kotikota-accordion__item-icon" />
      </div>
      <p className="kotikota-accordion__item-title">{title}</p>
    </div>
  );
});

const AccordionCategory = memo(function AccordionCategory({
  category,
  isActive,
  onToggle,
}) {
  return (
    <div className={`kotikota-accordion ${isActive ? "is-open" : ""}`}>
      <button
        type="button"
        className="kotikota-accordion__trigger"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`panel-${category.id}`}
      >
        <span className="kotikota-accordion__label">{category.label}</span>
        <FiChevronDown className="kotikota-accordion__chevron" />
      </button>

      <div
        id={`panel-${category.id}`}
        className="kotikota-accordion__panel"
        role="region"
      >
        <div className="kotikota-accordion__panel-inner">
          <div className="kotikota-accordion__grid">
            {category.items.map((item, i) => (
              <AccordionItem key={i} title={item.title} Icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const KotiKotaModal = ({
  isOpen,
  onClose,
  onContactClick,
  onConnexionClick,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    if (!isOpen) {
      setActiveCategory(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fermeture au clavier (Échap) — listener attaché uniquement
  // quand le modal est ouvert.
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const toggleCategory = useCallback((id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  }, []);

  const handleCreateClick = useCallback(() => {
    onConnexionClick("auth");
  }, [onConnexionClick]);

  const handleContactClick = useCallback(() => {
    if (onContactClick) onContactClick();
  }, [onContactClick]);

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
              {categories.map((cat) => (
                <AccordionCategory
                  key={cat.id}
                  category={cat}
                  isActive={activeCategory === cat.id}
                  onToggle={() => toggleCategory(cat.id)}
                />
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="kotikota-modal__actions">
              <BoutonSavoirPlus
                text="Créez votre cagnotte"
                onClick={handleCreateClick}
                className="kotikota-btn kotikota-btn--primary"
              />

              <button
                type="button"
                className="kotikota-btn kotikota-btn--secondary"
                onClick={handleContactClick}
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

export default memo(KotiKotaModal);