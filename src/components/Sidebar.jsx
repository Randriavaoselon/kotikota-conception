import { memo, useMemo } from "react";
import { FiX } from "react-icons/fi";

import FormContact from "./FormContact";
import Connexion from "./Connexion";

import "../styles/Sidebar.css";
import "../styles/FormContact.css";
import "../styles/Connexion.css";

const Sidebar = ({ isOpen, onClose, contentType }) => {
  const titles = useMemo(
    () => ({
      contact: "Nous contacter",
      auth: "Connexion",
    }),
    []
  );

  const content = useMemo(() => {
    const components = {
      contact: <FormContact />,
      auth: <Connexion />,
    };

    return components[contentType] || null;
  }, [contentType]);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "is-visible" : ""}`}
        onClick={onClose}
      />

      <div className={`sidebar ${isOpen ? "is-open" : ""}`}>
        <div className="sidebar__header">
          <h3 className="sidebar__title">
            {titles[contentType] || ""}
          </h3>

          <button
            className="sidebar__close"
            onClick={onClose}
            aria-label="Fermer"
          >
            <FiX />
          </button>
        </div>

        <div className="sidebar__container">
          <div className="sidebar__content">{content}</div>
        </div>
      </div>
    </>
  );
};

export default memo(Sidebar);