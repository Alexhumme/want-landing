import "./credit-suite-panel.css";
import iconSolicitud from "../../../../assets/icon-phase-solicitud.svg";
import iconValidacion from "../../../../assets/icon-phase-validacion.svg";
import iconMotor from "../../../../assets/isotipo.png";
import iconDesembolso from "../../../../assets/icon-phase-desembolso.svg";
import isotipo from "../../../../assets/isotipo.png";

function CreditSuitePanel() {
  return (
    <div className="credit-panel credit-suite">
      <div className="credit-inner parallax-item" data-parallax="-0.1">
        <div className="credit-cycle-wrap" data-aos="fade-right">
          <img className="credit-cycle-watermark" src={isotipo} alt="" aria-hidden="true" />
          <div className="credit-cycle" aria-hidden="true">
            <div className="cycle-node node-top">
              <img src={iconSolicitud} alt="" />
              <span>Solicitud</span>
            </div>
            <div className="cycle-node node-right">
              <img src={iconValidacion} alt="" />
              <span>Validacion</span>
            </div>
            <div className="cycle-node node-bottom">
              <img src={iconMotor} alt="" />
              <span>Motor</span>
            </div>
            <div className="cycle-node node-left">
              <img src={iconDesembolso} alt="" />
              <span>Desembolso</span>
            </div>
            <span className="cycle-arrow arrow-top" />
            <span className="cycle-arrow arrow-right" />
            <span className="cycle-arrow arrow-bottom" />
           
          </div>
        </div>

        <div className="credit-copy glass-panel" data-aos="fade-left">
          <span className="credit-kicker">Suite de credito WANT</span>
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
    </div>
  );
}

export default CreditSuitePanel;
