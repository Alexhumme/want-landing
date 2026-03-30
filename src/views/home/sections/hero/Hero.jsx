import "./hero.css";
import heroImage from "../../../../assets/smiling-woman-hero.png";
import portfolioPdf from "../../../../assets/WANT portfolio.pdf";
import iconPeople from "../../../../assets/icon-people.svg";
import iconCloud from "../../../../assets/icon-cloud.svg";
import iconPulse from "../../../../assets/icon-pulse.svg";
import isotipo from "../../../../assets/isotipo.png";
import logo from "../../../../assets/logo.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        className="hero-watermark parallax-item"
        data-parallax="-0.08"
        src={isotipo}
        alt=""
        aria-hidden="true"
      />
      <span
        className="hero-dots hero-dots-top-left parallax-item"
        data-parallax="0.06"
        aria-hidden="true"
      />
      <svg
        className="hero-flow-bg parallax-item"
        data-parallax="0.04"
        viewBox="0 0 1200 420"
        aria-hidden="true"
      >
        <path
          className="hero-flow-path path-one"
          d="M40,310 C200,120 420,100 520,210 S760,330 930,120 1180,120 1160,80"
        />
        <path
          className="hero-flow-path path-two"
          d="M20,360 C180,230 340,240 480,300 S760,370 1000,260 1180,210 1180,160"
        />
        <path
          className="hero-flow-path path-three"
          d="M60,120 C240,40 420,40 540,130 S780,240 1000,160 1180,120 1180,90"
        />
      </svg>

      <div className="hero-container">

        <div className="hero-content parallax-item" data-parallax="0.12" data-aos="fade-right">
          <div className="hero-brand">
            <img className="hero-logo" src={logo} alt="WANT" />
          </div>

          <h1 className="hero-title">
            <span className="hero-highlight">
              Soluciones Tecnológicas
            </span>
            <br />
            para el
            <span className="hero-dark"> Sector Financiero</span>
          </h1>

          <p className="hero-subtitle">
            Tecnología + Conocimiento de Negocio
          </p>

          <div className="hero-tags">
            Crédito digital |
            Mensajería Bre-B/ISO 20022 |
            Pagos & Cash Management
          </div>

          <div className="hero-snack glass-panel">
            <div>
              <span className="hero-snack-label">Experiencia</span>
              <strong className="hero-snack-value">
                <img src={iconPeople} alt="" />
                +20 años
              </strong>
            </div>
            <div>
              <span className="hero-snack-label">SaaS</span>
              <strong className="hero-snack-value">
                <img src={iconCloud} alt="" />
                Solución nube
              </strong>
            </div>
            <div>
              <span className="hero-snack-label">24/7</span>
              <strong className="hero-snack-value">
                <img src={iconPulse} alt="" />
                Decisiones
              </strong>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contacto">
              <button className="btn-primary hero-cta">
                Agendar llamada
              </button> 
            </a>

            <a href={portfolioPdf} target="_blank" rel="noreferrer">
              <button className="btn-secondary">
                Ver portafolio
              </button>
            </a>
          </div>

        </div>

        <div className="hero-image parallax-item" data-parallax="-0.16" data-aos="fade-left">
          <img src={heroImage} alt="cliente usando móvil" />
        </div>

      </div>

    </section>
  );
}

export default Hero;
