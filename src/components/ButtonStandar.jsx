import { FiHelpCircle } from "react-icons/fi";
import '../styles/ButtonStandar.css';

const ButtonStandar = ({ text, onClick }) => (
  <button className="btn btn--primary" onClick={onClick}>
    <FiHelpCircle className="btn__icon" />
    <span className="btn__text">{text}</span>
  </button>
);

export default ButtonStandar;