import SimpleCounter from "./SimpleCounter";
import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import "../styles/NombreGeneral.css";

const NombreGeneral = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <FiAward />, title: <SimpleCounter end={489} text="" isVisible={isVisible} />, desc: "CAGNOTTES" },
    { icon: <FiUsers />, title: <SimpleCounter end={2090} text="" isVisible={isVisible} />, desc: "PARTICIPANTS" },
    { icon: <FiCheckCircle />, title: <SimpleCounter end={50} text="" isVisible={isVisible} />, desc: "CAGNOTTES EN COURS" },
  ];

  return (
    <section className="evaluation-section" ref={sectionRef}>
      <div className="evaluation-container-bg">
        <div className="row evaluation-row">
          {stats.map((stat, index) => (
            <div key={index} className="eval-card">
              <div className="icon-side">{stat.icon}</div>
              <div className="text-side">
                <h4>{stat.title}</h4>
                <p>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NombreGeneral;