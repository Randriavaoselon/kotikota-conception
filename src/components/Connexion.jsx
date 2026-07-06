import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../styles/Connexion.css";

const Connexion = () => {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  return (
    <section className="auth-form">
      <div className="auth-tabs">
        <button
          type="button"
          className={`auth-tab ${isLogin ? "active" : ""}`}
          onClick={() => setMode("login")}
        >
          Connexion
        </button>
        <button
          type="button"
          className={`auth-tab ${!isLogin ? "active" : ""}`}
          onClick={() => setMode("signup")}
        >
          Inscription
        </button>
        <span className={`auth-tab-indicator ${isLogin ? "left" : "right"}`} />
      </div>

      <div className="auth-header">
        <h2 className="auth-title">
          {isLogin ? "Content de vous revoir" : "Créer votre compte"}
        </h2>
        <p className="auth-subtitle">
          {isLogin
            ? "Connectez-vous pour accéder à votre espace."
            : "Rejoignez-nous en quelques secondes."}
        </p>
      </div>

      <form className="auth-form-fields" key={mode}>
        {!isLogin && (
          <div className="form-group">
            <input type="text" id="fullname" placeholder=" " required />
            <label htmlFor="fullname">Nom complet</label>
          </div>
        )}

        <div className="form-group">
          <input type="email" id="auth-email" placeholder=" " required />
          <label htmlFor="auth-email">Adresse email</label>
        </div>

        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            id="auth-password"
            placeholder=" "
            required
          />
          <label htmlFor="auth-password">Mot de passe</label>
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={
              showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"
            }
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {!isLogin && (
          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder=" "
              required
            />
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
          </div>
        )}

        {isLogin && (
          <div className="auth-extra">
            <label className="auth-checkbox">
              <input type="checkbox" />
              <span>Se souvenir de moi</span>
            </label>
            <a href="#" className="auth-link">
              Mot de passe oublié ?
            </a>
          </div>
        )}

        <button type="submit" className="btn-send">
          <span>{isLogin ? "Se connecter" : "S'inscrire"}</span>
        </button>
      </form>

      <p className="auth-switch">
        {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
        <button
          type="button"
          className="auth-switch-link"
          onClick={() => setMode(isLogin ? "signup" : "login")}
        >
          {isLogin ? "Inscrivez-vous" : "Connectez-vous"}
        </button>
      </p>
    </section>
  );
};

export default Connexion;