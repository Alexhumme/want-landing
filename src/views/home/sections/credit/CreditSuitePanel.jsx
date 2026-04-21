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
          <img
            className="credit-cycle-watermark parallax-item"
            data-parallax="0.04"
            src={isotipo}
            alt=""
            aria-hidden="true"
          />
          <div className="credit-cycle" aria-hidden="true">
            <div className="cycle-node node-top">
              <img src={iconSolicitud} alt="" />
              <span>Solicitud</span>
            </div>
            <div className="cycle-node node-right">
              <img src={iconValidacion} alt="" />
              <span>Validación</span>
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
          <h2>Suite de crédito WANT</h2>
          <span className="credit-kicker">Originación de Crédito End-to-End</span>
          <p>
            Plataforma modular SaaS que integra canales digitales, motor de decisión
            inteligente y orquestación de servicios para transformar la colocación de
            crédito con control de riesgo y rentabilidad.
          </p>
        </div>
      </div>
      <div className="credit-accent left" aria-hidden="true" />
      <div className="credit-accent right" aria-hidden="true" />
    </div>
  );
}

export default CreditSuitePanel;
