import "./credit-suite-section.css";
import phoneFrame from "../../../assets/phone-frame-2.png";

function CreditSuiteSection() {
  return (
    <section className="section credit-suite" id="suite-credito">
      <div className="credit-inner parallax-item" data-parallax="-0.06">
        

        <div className="credit-phone" data-aos="fade-right">
          <div className="credit-phone-wrap">
            <img className="credit-frame" src={phoneFrame} alt="" />
          </div>
        </div>

        <div className="credit-copy" data-aos="fade-left">
          <h2>Originacion de Credito End-to-End</h2>
          <p>
            Plataforma especializada que procesa, traduce (MT-MX), enriquece y
            enruta mensajeria financiera entre sistemas internos y redes
            externas, cumpliendo con el estandar ISO 20022 y los requerimientos
            de migracion CBPR+ de Bre-B.
          </p>
        </div>
      </div>
      <div className="credit-accent left" aria-hidden="true" />
      <div className="credit-accent right" aria-hidden="true" />
    </section>
  );
}

export default CreditSuiteSection;
