import "./hub-section.css";
import isotipo from "../../../assets/isotipo.png";
import iconServers from "../../../assets/icon-servers.svg";
import iconGlobe from "../../../assets/icon-globe.svg";
import iconShield from "../../../assets/icon-shield.svg";
import iconPulse from "../../../assets/icon-pulse.svg";
import iconCheck from "../../../assets/icon-check.svg";

function HubSection() {
  return (
    <section className="section hub-section" id="hub-want">
      <div className="hub-inner glass-panel parallax-item" data-parallax="0.08">
        <div className="hub-header" data-aos="fade-up">
          <p className="hub-kicker">TRANSFORMADOR</p>
          <h2 className="hub-title">Bre-B/ISO 20022</h2>
          <p className="hub-subtitle">Hub WANT</p>
        </div>

        <div className="hub-flow" data-aos="fade-up" data-aos-delay="120">
          <div className="hub-card left">
            <div className="hub-icon">
              <img src={iconServers} alt="Sistemas internos" />
            </div>
            <h3>Sistemas Internos</h3>
            <p>Core, ERP, TMS</p>
          </div>

          <div className="hub-connector left">
            <div className="hub-arrow">→</div>
            <span>MT/MX</span>
          </div>

          <div className="hub-center">
            <div className="hub-mark">
              <img src={isotipo} alt="Transformador WANT" />
            </div>
          </div>

          <div className="hub-connector right">
            <div className="hub-arrow">→</div>
            <span>ISO20022</span>
          </div>

          <div className="hub-card right">
            <div className="hub-icon globe">
              <img src={iconGlobe} alt="Bre-B y externos" />
            </div>
            <h3>Bre-B & Externos</h3>
            <p>CBPR+, Bancos</p>
          </div>
        </div>

        <div
          className="hub-capabilities parallax-item"
          data-parallax="-0.08"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          <h3 className="hub-cap-title">
            <span>Capacidades</span> Principales
          </h3>
          <div className="hub-cap-grid">
            <div className="hub-cap-card">
              <img src={iconShield} alt="Disponibilidad" />
              <h4>99.99%</h4>
              <p>Disponibilidad</p>
              <ul>
                <li>Validacion de mensajes MT y MX según estandares Bre-B</li>
                <li>Enriquecimiento automatico de datos (BIC, LEI, referencias)</li>
              </ul>
            </div>
            <div className="hub-cap-card">
              <img src={iconPulse} alt="Latencia promedio" />
              <h4>&lt;100ms</h4>
              <p>Latencia promedio</p>
              <ul>
                <li>Ruteo inteligente basado en reglas de negocio configurables</li>
                <li>Gestión de colas y excepciones con alertas en tiempo real</li>
              </ul>
            </div>
            <div className="hub-cap-card">
              <img src={iconCheck} alt="CBPR+ compliance" />
              <h4>CBPR+</h4>
              <p>Compliance listo</p>
              <ul>
                <li>Trazabilidad completa y auditoria para cumplimiento regulatorio</li>
                <li>Alta disponibilidad, escalabilidad y seguridad empresarial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubSection;
