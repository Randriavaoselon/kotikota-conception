import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FiAward, FiUsers, FiCheckCircle } from "react-icons/fi";
import SimpleCounter from "./SimpleCounter";
import "../styles/NombreGeneral.css";

const NombreGeneral = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Configuration des statistiques centralisée
  const stats = useMemo(() => [
    { icon: <FiAward />, end: 489, desc: "CAGNOTTES" },
    { icon: <FiUsers />, end: 2090, desc: "PARTICIPANTS" },
    { icon: <FiCheckCircle />, end: 50, desc: "CAGNOTTES EN COURS" },
  ], []);

  // Callback stable pour l'intersection observer
  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      entry.target.classList.add("is-visible");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [handleIntersection]);

  return (
    <section className="evaluation-section" ref={sectionRef}>
      <div className="evaluation-container-bg">
        <div className="row evaluation-row">
          {stats.map((stat, index) => (
            <div key={index} className="eval-card">
              <div className="icon-side">{stat.icon}</div>
              <div className="text-side">
                <h4>
                  <SimpleCounter end={stat.end} text="" isVisible={isVisible} />
                </h4>
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