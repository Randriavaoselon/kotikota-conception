import "../styles/FormContact.css";

const FormContact = () => {
  return (
    <section className="form-contact">
      <div className="container">
        <div className="form-row">
          <span className="form-eyebrow">Contact</span>
          <h2 className="form-title">Discutons de votre projet</h2>
          <p className="form-subtitle">
            Décrivez-nous votre besoin, nous revenons vers vous sous 24h.
          </p>

          <form className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Votre nom</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Votre email</label>
              </div>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                placeholder=" "
                rows="4"
                required
              ></textarea>
              <label htmlFor="message">Votre message</label>
            </div>

            <button type="submit" className="btn-send">
              <span>Envoyer</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContact;