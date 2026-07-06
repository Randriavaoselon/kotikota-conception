
const BoutonSavoirPlus = ({
  text = "Savoir plus",
  onClick,
  style,
  className = "",
  icon: Icon,
  iconPosition = "right",
}) => {
  return (
    <a
      href="#"
      className={`btn-savoir-plus ${className}`.trim()}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
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

export default BoutonSavoirPlus;