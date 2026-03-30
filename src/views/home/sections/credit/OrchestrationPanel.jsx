import "./orchestration-panel.css";
import iconChain from "../../../../assets/icon-chain.svg";
import iconSpark from "../../../../assets/icon-spark.svg";
import iconLink from "../../../../assets/icon-link.svg";
import iconShield from "../../../../assets/icon-shield.svg";
import iconPulse from "../../../../assets/icon-pulse.svg";
import iconCheck from "../../../../assets/icon-check.svg";

function OrchestrationPanel() {
  return (
    <div className="credit-panel orchestration-panel">
      <div className="orch-orbits parallax-item" data-parallax="0.04" aria-hidden="true">
        <span className="orbit orbit-1" />
        <span className="orbit orbit-2" />
        <span className="orbit orbit-3" />
        <span className="orbit orbit-4" />
      </div>
      <div className="orch-shell parallax-item" data-parallax="0.08">
        <div className="orch-header parallax-item" data-parallax="0.06" data-aos="fade-up">
          <img src={iconChain} alt="" />
          <h2>
            Capa de <span>Orquestacion</span>
          </h2>
        </div>

        <div className="orch-cards parallax-item" data-parallax="-0.08" data-aos="fade-up" data-aos-delay="80">
          <div className="orch-card">
            <div className="orch-card-icon">
              <img src={iconLink} alt="" />
            </div>
            <p>
              <strong>Integracion segura</strong>
              <span>con Core Bancario</span>
            </p>
          </div>
          <div className="orch-card">
            <div className="orch-card-icon">
              <img src={iconShield} alt="" />
            </div>
            <p>
              <strong>Bureaus</strong>
              <span>(Experian, Transunion, ACH, Mereigua)</span>
            </p>
          </div>
          <div className="orch-card">
            <div className="orch-card-icon">
              <img src={iconPulse} alt="" />
            </div>
            <p>
              <strong>KYC,ACH,</strong>
              <span>Firma electronica</span>
            </p>
          </div>
          <div className="orch-card">
            <div className="orch-card-icon">
              <img src={iconCheck} alt="" />
            </div>
            <p>
              <strong>Gestion documental</strong>
              <span>completa</span>
            </p>
          </div>
        </div>

        <div className="orch-highlight parallax-item" data-parallax="0.06" data-aos="fade-up" data-aos-delay="160">
          <div className="orch-highlight-top">
            <div className="orch-highlight-title">
              <img src={iconSpark} alt="" />
              <div>
                <span>B. NUESTRO VALOR AGREGADO</span>
                <h3>Co-construccion de Politica</h3>
              </div>
            </div>
            <span className="orch-pill">DIFERENCIADOR</span>
          </div>
          <p>
            No solo instalamos tecnologia,{" "}
            <strong>construimos estrategia con ustedes</strong>
          </p>
          <div className="orch-steps">
            <div>
              <span>1</span>
              <p>Analisis de Portafolio</p>
            </div>
            <div>
              <span>2</span>
              <p>Segmentacion Optima</p>
            </div>
            <div>
              <span>3</span>
              <p>Politica de Credito</p>
            </div>
            <div>
              <span>4</span>
              <p>Politica de Pricing</p>
            </div>
            <div>
              <span>5</span>
              <p>Config. Motor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrchestrationPanel;
