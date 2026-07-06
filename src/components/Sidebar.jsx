import { FiX } from "react-icons/fi";
import FormContact from "./FormContact";
import Connexion from "./Connexion";
import "../styles/Sidebar.css";
import "../styles/FormContact.css";
import "../styles/Connexion.css";

const Sidebar = ({ isOpen, onClose, contentType }) => {
  const titles = {
    contact: "Nous contacter",
    auth: "Connexion",
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "is-visible" : ""}`}
        onClick={onClose}
      />

      <div className={`sidebar ${isOpen ? "is-open" : ""}`}>
        <div className="sidebar__header">
          <h3 className="sidebar__title">{titles[contentType] || ""}</h3>
          <button
            className="sidebar__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <FiX />
          </button>
        </div>

        <div className="sidebar__container">
          <div className="sidebar__content">
            {contentType === "contact" ? (
              <FormContact />
            ) : contentType === "auth" ? (
              <Connexion />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;