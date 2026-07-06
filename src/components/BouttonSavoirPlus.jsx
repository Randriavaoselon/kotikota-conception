import { memo } from "react";

const BoutonSavoirPlus = ({
  text = "Savoir plus",
  onClick,
  style,
  className = "",
  icon: Icon,
  iconPosition = "right",
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href="#"
      className={`btn-savoir-plus ${className}`.trim()}
      style={style}
      onClick={handleClick}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="btn-savoir-plus__icon" />
      )}

      <span>{text}</span>

      {Icon && iconPosition === "right" && (
        <Icon className="btn-savoir-plus__icon" />
      )}
    </a>
  );
};

export default memo(BoutonSavoirPlus);