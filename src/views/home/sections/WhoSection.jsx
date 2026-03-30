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
              soluciones tecnologicas para el sector financiero. Combinamos mas
              de dos decadas de experiencia en banca y tecnologia para entregar
              plataformas que transforman la operacion de nuestros clientes.
            </p>
            <p>
              Nuestra propuesta de valor se basa en un enfoque unico:
              <span className="who-highlight">
                tecnologia + conocimiento profundo del negocio
              </span>
              . No solo implementamos software;
              <span className="who-highlight">
                {" "}
                co-construimos{" "}
              </span>
              soluciones que entienden las particularidades del credito, los
              pagos y la mensajeria financiera en Latinoamerica.
            </p>

            <div className="who-metrics">
              <div className="who-metric">
                <div className="who-metric-icon">
                  <img src={iconPeople} alt="Experiencia" />
                </div>
                <div>
                  <strong>+20</strong>
                  <span>Anos de experiencia</span>
                  <small>En banca y tecnologia</small>
                </div>
              </div>
              <div className="who-metric">
                <div className="who-metric-icon">
                  <img src={iconCloud} alt="AWS" />
                </div>
                <div>
                  <strong>AWS</strong>
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
                  <small>Linea</small>
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
                  Plataformas que crecen con tu operacion sin sacrificar
                  rendimiento ni seguridad.
                </p>
              </div>
            </div>
            <div className="who-card">
              <img src={iconHandshake} alt="Co-construccion" />
              <div>
                <h3>Co-construccion</h3>
                <p>
                  Tus equipos de negocio y tecnologia participan activamente en
                  cada etapa.
                </p>
              </div>
            </div>
            <div className="who-card">
              <img src={iconSupport} alt="Acompanamiento continuo" />
              <div>
                <h3>Acompanamiento continuo</h3>
                <p>
                  No terminamos en el go-live. Evolucionamos contigo
                  postimplementacion.
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
