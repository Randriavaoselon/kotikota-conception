import {
  PiMapPinBold,
  PiEnvelopeSimpleBold,
  PiPhoneBold,
  PiWhatsappLogoBold,
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiYoutubeLogoBold,
  PiStarBold,
  PiXLogoBold,
} from "react-icons/pi";
import logoKotikota from "../assets/logo.webp";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          {/* Colonne 1 : Logo + Adresse + Email */}
          <div className="footer__col">
            <a href="/" className="footer__logo-link">
              <img src={logoKotikota} alt="Kotikota" className="footer__logo" />
            </a>

            <a
              href="https://goo.gl/maps/shtULNF4dVQA8fd46"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__info-item"
            >
              <PiMapPinBold className="footer__icon" />
              <span>
                Immeuble Sakalava Capital Lot IIO 74B Anjanahary 101
                Antananarivo Madagascar
              </span>
            </a>

            <a href="mailto:hello@koti-kota.com" className="footer__info-item">
              <PiEnvelopeSimpleBold className="footer__icon" />
              <span>hello@koti-kota.com</span>
            </a>
          </div>

          {/* Colonne 2 : Contacts + WhatsApp */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>

            <a href="tel:+261343127343" className="footer__info-item">
              <PiPhoneBold className="footer__icon" />
              <span>(+261) 34 31 273 43</span>
            </a>

            <a href="tel:+261388029273" className="footer__info-item">
              <PiPhoneBold className="footer__icon" />
              <span>(+261) 38 80 292 73</span>
            </a>

            <a href="tel:+33754392042" className="footer__info-item">
              <PiPhoneBold className="footer__icon" />
              <span>(+33) 7 54 39 20 42</span>
            </a>

            <a
              href="https://wa.me/261388029273"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__info-item footer__info-item--whatsapp"
            >
              <PiWhatsappLogoBold className="footer__icon" />
              <span>(+261) 38 80 292 73</span>
            </a>
          </div>

          {/* Colonne 3 : Réseaux sociaux + Map + Trustpilot */}
          <div className="footer__col">
            <h4 className="footer__col-title">Suivez-nous</h4>

            <div className="footer__socials">
              <a
                href="https://www.facebook.com/share/17LDtUirJn/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="Facebook"
              >
                <PiFacebookLogoBold />
              </a>

              <a
                href="https://www.instagram.com/kotikota_officiel?igsh=cnBwZTZ6em43YmE1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="Instagram"
              >
                <PiInstagramLogoBold />
              </a>

              <a
                href="https://x.com/kotikotam?s=21&t=RFHJ2gmosyaCriS8bj2epQ"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="Twitter / X"
              >
                <PiXLogoBold />
              </a>

              <a
                href="https://www.youtube.com/channel/UCnSNp-wHuANe0kl6YRl4u3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="YouTube"
              >
                <PiYoutubeLogoBold />
              </a>
            </div>

            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps?q=Immeuble+Sakalava+Capital+Anjanahary+Antananarivo&output=embed"
                title="Localisation Kotikota"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://fr.trustpilot.com/review/koti-kota.com?utm_medium=trustbox&utm_source=MicroReviewCount"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__trustpilot"
            >
              <PiStarBold className="footer__icon" />
              <span>Voir nos 3 avis sur Trustpilot</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
