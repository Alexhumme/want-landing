import "./credit-suite-section.css";
import phoneFrame from "../../../assets/phone-frame.svg";
import isotipo from "../../../assets/isotipo.png";
import meshGrid from "../../../assets/mesh-grid.svg";

function CreditSuiteSection() {
  return (
    <section className="section credit-suite" id="suite-credito">
      <div className="credit-inner parallax-item" data-parallax="-0.06">
        <div className="credit-bg" aria-hidden="true">
          <img src={meshGrid} alt="" />
        </div>

        <div className="credit-phone" data-aos="fade-right">
          <div className="credit-phone-wrap">
            <img className="credit-frame" src={phoneFrame} alt="" />
            <div className="credit-screen glass-panel">
              <p className="credit-screen-title">Suite de Credito</p>
              <h3>WANT</h3>
              <img src={isotipo} alt="WANT isotipo" />
            </div>
          </div>
        </div>

        <div className="credit-copy" data-aos="fade-left">
          <h2>Originacion de Credito End-to-End</h2>
          <p>
            Plataforma especializada que procesa, traduce (MT-MX), enriquece y
            enruta mensajeria financiera entre sistemas internos y redes
            externas, cumpliendo con el estandar ISO 20022 y los requerimientos
            de migracion CBPR+ de SWIFT.
          </p>
        </div>
      </div>
      <div className="credit-accent left" aria-hidden="true" />
      <div className="credit-accent right" aria-hidden="true" />
    </section>
  );
}

export default CreditSuiteSection;
