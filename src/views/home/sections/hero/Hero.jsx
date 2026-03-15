import "./hero.css";
import heroImage from "../../../../assets/hero-person.png";

function Hero() {
  return (
    <section className="hero">
      <svg className="hero-flow-bg" viewBox="0 0 1200 420" aria-hidden="true">
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

        <div className="hero-content glass-panel" data-aos="fade-right">

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
            Mensajería SWIFT/ISO 20022 |
            Pagos & Cash Management
          </div>

          <div className="hero-buttons">
            <button className="btn-primary">
              Agendar llamada
            </button>

            <button className="btn-secondary">
              Ver portafolio
            </button>
          </div>

        </div>

        <div className="hero-image" data-aos="fade-left">
          <img src={heroImage} alt="cliente usando móvil" />
        </div>

      </div>

    </section>
  );
}

export default Hero;
