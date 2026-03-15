import "./transform-section.css";
import isotipo from "../../../assets/isotipo.png";

function TransformSection() {
  return (
    <section className="section transform-section" id="transformador">
      <div className="transform-inner" data-aos="fade-up">
        <h2 className="transform-title">
          TRANSFORMADOR
          <span>SWIFT/ISO 20022</span>
        </h2>
        <p className="transform-copy">
          Plataforma especializada que procesa, traduce (MT - MX), enriquece y
          enruta mensajeria financiera entre sistemas internos y redes externas,
          cumpliendo con el estandar ISO 20022 y los requerimientos de migracion
          CBPR+ de SWIFT.
        </p>
        <img
          className="transform-logo"
          src={isotipo}
          alt="WANT isotipo"
        />
      </div>
      <div className="transform-separator left" aria-hidden="true" />
      <div className="transform-separator right" aria-hidden="true" />
    </section>
  );
}

export default TransformSection;
