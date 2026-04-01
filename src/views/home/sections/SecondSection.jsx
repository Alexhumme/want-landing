import "./second-section.css";
import isotipo from "../../../assets/isotipo.png";
import handshake from "../../../assets/handshake.png";
import arquitecture from "../../../assets/arquitecture.jpg";
import businessTech from "../../../assets/business-tech.jpg";

function SecondSection() {
  return (
    <section className="section focus-section" id="enfoque">
      <div className="focus-inner">
        <img className="focus-watermark" src={isotipo} alt="" aria-hidden="true" />

        <div className="focus-header parallax-item" data-parallax="0.1" data-aos="fade-up">
          <h2 className="focus-title">
            Nuestro <span>Enfoque</span>
          </h2>
          <p className="focus-subtitle">
            Empresa colombiana especializada en soluciones tecnológicas para el
            sector financiero.
          </p>
        </div>

        <div className="focus-grid parallax-item" data-parallax="-0.1">
          <article className="focus-item" data-aos="fade-up" data-aos-delay="50">
            <div className="focus-circle">
              <img src={arquitecture} alt="Arquitecturas modernas" />
            </div>
            <h3>Arquitecturas modernas y Escalables</h3>
          </article>

          <article className="focus-item" data-aos="fade-up" data-aos-delay="120">
            <div className="focus-circle">
              <img src={businessTech} alt="Co-construcción con negocio y tecnología" />
            </div>
            <h3>Co-construcción con negocio y tecnología</h3>
          </article>

          <article className="focus-item" data-aos="fade-up" data-aos-delay="190">
            <div className="focus-circle">
              <img src={handshake} alt="Acompañamiento post-implementación" />
            </div>
            <h3>Acompañamiento Post-Implementación</h3>
          </article>
        </div>

        <p className="focus-tagline parallax-item" data-parallax="0.08" data-aos="fade-up" data-aos-delay="220">
          No solo implementamos software; co-construimos soluciones
        </p>

        <div className="focus-arc" aria-hidden="true" />
      </div>
    </section>
  );
}

export default SecondSection;
