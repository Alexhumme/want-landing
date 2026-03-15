import "./hero.css";
import heroImage from "../../../../assets/hero-person.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

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

        <div className="hero-image">
          <img src={heroImage} alt="cliente usando móvil" />
        </div>

      </div>

    </section>
  );
}

export default Hero;
