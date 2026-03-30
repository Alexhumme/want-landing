import "./transform-section.css";
import "./transform-logo.css";

function TransformSection() {
  return (
    <section className="section transform-section" id="transformador">
      <div className="transform-rain" aria-hidden="true">
        <span className="rain-line line-a" />
        <span className="rain-line line-b" />
        <span className="rain-line line-c" />
        <span className="rain-line line-d" />
        <span className="rain-line line-e" />
        <span className="rain-line line-f" />
      </div>
      <div className="transform-inner parallax-item" data-parallax="0.1" data-aos="fade-up">
        <h2 className="transform-title">
          TRANSFORMADOR
          <span>Bre-B/ISO 20022</span>
        </h2>
        <p className="transform-copy">
          Plataforma especializada que procesa, traduce (MT - MX), enriquece y
          enruta mensajeria financiera entre sistemas internos y redes externas,
          cumpliendo con el estandar ISO 20022 y los requerimientos de migracion
          CBPR+ de Bre-B.
        </p>
        <div className="transform-logo" aria-hidden="true">
          <span className="transform-bar top" />
          <span className="transform-bar right" />
          <span className="transform-bar inner-right" />
          <span className="transform-bar left" />
          <span className="transform-bar inner-left" />
          <span className="transform-bar bottom" />
          <span className="transform-bar inner-top" />
          <span className="transform-bar inner-bottom" />
        </div>
      </div>
      <div className="transform-separator left" aria-hidden="true" />
      <div className="transform-separator right" aria-hidden="true" />
    </section>
  );
}

export default TransformSection;
