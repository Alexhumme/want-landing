import "./who-section.css";
import manImage from "../../../assets/man-with-laptop.png";
import iconBusiness from "../../../assets/icon-business.svg";
import iconArchitecture from "../../../assets/icon-architecture.svg";
import iconHandshake from "../../../assets/icon-handshake.svg";
import iconSupport from "../../../assets/icon-support.svg";
import iconPeople from "../../../assets/icon-people.svg";
import iconCloud from "../../../assets/icon-cloud.svg";
import iconBolt from "../../../assets/icon-bolt.svg";

function WhoSection() {
  return (
    <section className="section who-section" id="quienes-somos">
      <div className="who-rect orange parallax-item" data-parallax="0.05" aria-hidden="true" />
      <div className="who-rect blue parallax-item" data-parallax="-0.05" aria-hidden="true" />
      <div className="who-line parallax-item" data-parallax="0.04" aria-hidden="true" />

      <div className="who-shell parallax-item" data-parallax="0.08">
        <div className="who-content">
          <div className="who-left" data-aos="fade-right">
            <p className="who-kicker">QUIENES SOMOS</p>
            <h2>
              Entendemos el Negocio Financiero <span>desde adentro</span>
            </h2>
            <div className="who-divider" />
            <p>
              <strong>WANT</strong> es una empresa colombiana especializada en
              soluciones tecnológicas para el sector financiero. Combinamos más
              de dos décadas de experiencia en banca y tecnología para entregar
              plataformas que transforman la operación de nuestros clientes.
            </p>
            <p>
              Nuestra propuesta de valor se basa en un enfoque único:
              <span className="who-highlight">
                tecnología + conocimiento profundo del negocio
              </span>
              . No solo implementamos software;
              <span className="who-highlight">
                {" "}
                co-construimos{" "}
              </span>
              soluciones que entienden las particularidades del crédito, los
              pagos y la mensajería financiera en Latinoamérica.
            </p>

            <div className="who-metrics">
              <div className="who-metric">
                <div className="who-metric-icon">
                  <img src={iconPeople} alt="Experiencia" />
                </div>
                <div>
                  <strong>+20</strong>
                  <span>Años de experiencia</span>
                  <small>En banca y tecnología</small>
                </div>
              </div>
              <div className="who-metric">
                <div className="who-metric-icon">
                  <img src={iconCloud} alt="AWS" />
                </div>
                <div>
                  <strong>Cloud Services</strong>
                  <span>Estructura</span>
                </div>
              </div>
              <div className="who-metric">
                <div className="who-metric-icon">
                  <img src={iconBolt} alt="24/7" />
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Decisiones en</span>
                  <small>Línea</small>
                </div>
              </div>
            </div>
          </div>

          <div className="who-right" data-aos="fade-left">
            <div className="who-card">
              <img src={iconBusiness} alt="Negocio desde adentro" />
              <div>
                <h3>Negocio desde adentro</h3>
                <p>
                  Entendemos el sector financiero porque lo hemos vivido, no solo
                  lo programamos.
                </p>
              </div>
            </div>
            <div className="who-card">
              <img src={iconArchitecture} alt="Arquitecturas modernas" />
              <div>
                <h3>Arquitecturas modernas y escalables</h3>
                <p>
                  Plataformas que crecen con tu operación sin sacrificar
                  rendimiento ni seguridad.
                </p>
              </div>
            </div>
            <div className="who-card">
              <img src={iconHandshake} alt="Co-construcción" />
              <div>
                <h3>Co-construcción</h3>
                <p>
                  Tus equipos de negocio y tecnología participan activamente en
                  cada etapa.
                </p>
              </div>
            </div>
            <div className="who-card">
              <img src={iconSupport} alt="Acompañamiento continuo" />
              <div>
                <h3>Acompañamiento continuo</h3>
                <p>
                  No terminamos en el go-live. Evolucionamos contigo
                  postimplementación.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    <img
          className="who-man parallax-item"
          data-parallax="0.12"
          src={manImage}
          alt="Equipo WANT"
        />
    </section>
  );
}

export default WhoSection;
