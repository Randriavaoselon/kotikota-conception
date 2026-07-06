import { useEffect, useRef, useState } from "react";
import "../styles/EtapeDevenirKotikoteur.css";

const EtapeDevenirKotikoteur = () => {
  const steps = [
    { title: "Créez", desc: "Créez votre cagnotte en 30 secondes",  bgColor: "#fef3c7"},
    { title: "Invitez", desc: "Invitez participants via vos réseaux sociaux", bgColor: "#fef3c7" },
    { title: "Participez", desc: "Participez en quelques clics depuis l’onglet participer à une cagnotte ", bgColor: "#fef3c7" },
    { title: "Transférez", desc: "les sommes collectées au bénéficiaire", bgColor: "#fef3c7" },
  ];

  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const rowRef = useRef(null);
  const itemRefs = useRef([]);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);

  // ===== Ligne qui se dessine selon la position de scroll =====
  useEffect(() => {
    const handleScroll = () => {
      if (!rowRef.current) return;

      const rect = rowRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.85;
      const total = rect.height + windowHeight * 0.4;
      const scrolled = start - rect.top;

      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== Chaque étape apparaît individuellement à son entrée dans le viewport =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleSteps((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
          }
        });
      },
      { threshold: 0.7 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ===== Effet parallaxe sur l'arrière-plan =====
  useEffect(() => {
    const handleParallax = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = rect.top * 0.3;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section className="etape-devenir" ref={sectionRef}>
      <div className="etape-devenir__bg" ref={bgRef}></div>

      <div className="container">
        <div className="etape-devenir__row" ref={rowRef}>
          <div className="etape-devenir__line"></div>
          <div
            className="etape-devenir__line-progress"
            style={{ height: `${lineProgress * 100}%` }}
          ></div>

          <span className="etape-devenir__line-start">
            Les étapes à suivre
          </span>

          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`etape-devenir__item ${
                  index % 2 === 0
                    ? "etape-devenir__item--left"
                    : "etape-devenir__item--right"
                } ${isVisible ? "etape-devenir__item--visible" : ""}`}
              >
                <div className="etape-devenir__card" style={{ backgroundColor: step.bgColor }}>
                  <h4 className="etape-devenir__title">{step.title}</h4>
                  <p className="etape-devenir__desc">{step.desc}</p>
                </div>

                <span className="etape-devenir__number">{index + 1}</span>
              </div>
            );
          })}

          <span className="etape-devenir__line-end"></span>
        </div>
      </div>
    </section>
  );
};

export default EtapeDevenirKotikoteur;