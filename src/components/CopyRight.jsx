import { PiHeartFill, PiLightningFill } from "react-icons/pi";
import "../styles/CopyRight.css";

const CopyRight = () => {
  return (
    <section className="copyright">
      <div className="container">
        <div className="copyright__row">
          
          <div className="copyright__col-left">
            <span className="copyright__text">© Koti Kota 2026</span>

            <a
              href="https://koti-kota.com/cgu/"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright__link"
            >
              CGU
            </a>

            <a
              href="https://koti-kota.com/politique-de-confidentialite/"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright__link"
            >
              Politique de confidentialité
            </a>

            <a
              href="https://koti-kota.com/mentions-legales/"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright__link"
            >
              Mentions légales
            </a>

            <a
              href="https://koti-kota.com/sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="copyright__link"
            >
              Site map
            </a>
          </div>

          <div className="copyright__col-right">
            <span className="copyright__credit">
              Réalisé avec
              <PiHeartFill className="copyright__icon copyright__icon--heart" />
              par{" "}
              <a
                href="https://maki-agency.mg/"
                target="_blank"
                rel="noopener noreferrer"
                className="copyright__link"
              >
                Maki Agency
              </a>
            </span>

            <span className="copyright__separator">&</span>

            <span className="copyright__credit">
              Propulsé
              <PiLightningFill className="copyright__icon copyright__icon--bolt" />
              par{" "}
              <a
                href="https://www.linkedin.com/company/sakalava-capital/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="copyright__link"
              >
                Sakalava Capital
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyRight;