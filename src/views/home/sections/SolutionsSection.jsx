import "./solutions-section.css";
import phoneFrame from "../../../assets/phone-frame-4.png";
import iconCredit from "../../../assets/icon-credit-card.svg";
import iconSync from "../../../assets/icon-sync.svg";
import iconPos from "../../../assets/icon-pos.svg";
import iconLink from "../../../assets/icon-link.svg";

function SolutionsSection() {
  return (
    <section className="section solutions-section" id="soluciones">
      <span
        className="solutions-shape shape-top-left parallax-item"
        data-parallax="0.06"
        aria-hidden="true"
      />
      <span
        className="solutions-shape shape-bottom-right parallax-item"
        data-parallax="-0.05"
        aria-hidden="true"
      />
      <div className="solutions-inner">
        <div className="solutions-header parallax-item" data-parallax="0.1" data-aos="fade-up">
          <h2 className="solutions-title">
            Nuestras <span>Soluciones</span>
          </h2>
          <p className="solutions-subtitle">
            Cada producto puede implementarse de forma independiente o como parte
            de una solución integrada según sus necesidades.
          </p>
        </div>

        <div className="solutions-body">
          <div className="solutions-col left parallax-item" data-parallax="0.12" data-aos="fade-right">
            <article className="solution-card align-right" data-aos="fade-up" data-aos-delay="50">
              <div className="solution-icon">
                <img src={iconCredit} alt="Crédito digital" />
              </div>
              <p className="solution-desc">
                Originación multicanal + orquestación de integraciones + motor de
                decisión para segmentación, capacidad y pricing.
              </p>
              <div className="solution-features">
                <span>
                  <img src={iconLink} alt="" />
                  Integraciones
                </span>
                <span>
                  <img src={iconPos} alt="" />
                  Canales
                </span>
                <span>
                  <img src={iconSync} alt="" />
                  Motor
                </span>
              </div>
              <h3 className="solution-title">Crédito Digital</h3>
              <p className="solution-subtitle">End-to-End</p>
            </article>
          </div>

          <div className="solutions-center parallax-item" data-parallax="-0.16" data-aos="zoom-in">
            <div className="phone-wrap">
              <span className="phone-glow" aria-hidden="true" />
              <img className="phone-frame-img" src={phoneFrame} alt="" />
            </div>
          </div>

          <div className="solutions-col right parallax-item" data-parallax="0.12" data-aos="fade-left">
            <article className="solution-card" data-aos="fade-up" data-aos-delay="80">
              <div className="solution-icon">
                <img src={iconSync} alt="Transformador Bre-B ISO 20022" />
              </div>
              <p className="solution-desc">
                Plataforma para procesar, traducir MT-MX, enriquecer y rutear
                mensajería financiera bajo estándar ISO 20022.
              </p>
              <div className="solution-features">
                <span>
                  <img src={iconLink} alt="" />
                  Orquestación
                </span>
                <span>
                  <img src={iconCredit} alt="" />
                  Traducción
                </span>
                <span>
                  <img src={iconPos} alt="" />
                  Observabilidad
                </span>
              </div>
              <h3 className="solution-title">Transformador</h3>
              <p className="solution-subtitle">Pagos (CASH, bre-b, Swift)/ISO 20022</p>
            </article>

           
          </div>
        </div>

        <div
          className="solutions-accent accent-left parallax-item"
          data-parallax="0.05"
          aria-hidden="true"
        />
        <div
          className="solutions-accent accent-right parallax-item"
          data-parallax="-0.05"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default SolutionsSection;
