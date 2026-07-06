import { useEffect, useRef, useState } from "react";
import "../styles/TitreNosCagnottes.css";

const TitreNosCagnottes = () => {
  const sectionRef = useRef(null);
  const hasActivatedRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasActivatedRef.current) {
          hasActivatedRef.current = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`titre-cagnottes ${
        isVisible ? "titre-cagnottes--visible" : ""
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="titre-cagnottes__row">
          <span className="titre-cagnottes__badge titre-cagnottes__reveal titre-cagnottes__reveal--1">
            Nos Cagnottes
          </span>

          <h2 className="titre-cagnottes__title titre-cagnottes__reveal titre-cagnottes__reveal--2">
            Toutes{" "}
            <span className="titre-cagnottes__highlight">nos ca</span>
            gnottes
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TitreNosCagnottes;