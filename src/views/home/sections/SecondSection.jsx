import "./second-section.css";
import isotipo from "../../../assets/isotipo.png";
import bgBlur from "../../../assets/bg-blur.jpg";
import bgWave from "../../../assets/bg-wave.jpg";
import heroPerson from "../../../assets/hero-person.png";

function SecondSection() {
  return (
    <section className="section focus-section" id="enfoque">
      <div className="focus-inner">
        <img className="focus-watermark" src={isotipo} alt="" aria-hidden="true" />

        <div className="focus-header parallax-item" data-parallax="0.07" data-aos="fade-up">
          <h2 className="focus-title">
            Nuestro <span>Enfoque</span>
          </h2>
          <p className="focus-subtitle">
            Empresa colombiana especializada en soluciones tecnologicas para el
            sector financiero.
          </p>
        </div>

        <div className="focus-grid parallax-item" data-parallax="-0.06">
          <article className="focus-item" data-aos="fade-up" data-aos-delay="50">
            <div className="focus-circle">
              <img src={bgWave} alt="Arquitecturas modernas" />
            </div>
            <h3>Arquitecturas modernas y Escalables</h3>
          </article>

          <article className="focus-item" data-aos="fade-up" data-aos-delay="120">
            <div className="focus-circle">
              <img src={bgBlur} alt="Co-construccion con negocio y tecnologia" />
            </div>
            <h3>Co-construccion con negocio y tecnologia</h3>
          </article>

          <article className="focus-item" data-aos="fade-up" data-aos-delay="190">
            <div className="focus-circle">
              <img src={heroPerson} alt="Acompanamiento post-implementacion" />
            </div>
            <h3>Acompanamiento Post-Implementacion</h3>
          </article>
        </div>

        <p className="focus-tagline parallax-item" data-parallax="0.05" data-aos="fade-up" data-aos-delay="220">
          No solo implementamos software; co-construimos soluciones
        </p>

        <div className="focus-arc" aria-hidden="true" />
      </div>
    </section>
  );
}

export default SecondSection;
