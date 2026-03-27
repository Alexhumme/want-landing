import "./contact-section.css";

function ContactSection() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="contact-kicker">Contactanos</p>
          <h2>Hablemos de tu proximo proyecto</h2>
          <p className="contact-lead">
            Agenda una llamada o dejanos tus datos y te respondemos con una
            propuesta clara, tecnica y accionable.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <h3>Soporte Comercial</h3>
              <p>ventas@want.com</p>
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="contact-card">
              <h3>Alianzas</h3>
              <p>partners@want.com</p>
              <span>Integraciones y co-creacion</span>
            </div>
            <div className="contact-card">
              <h3>Operaciones</h3>
              <p>+57 311 000 0000</p>
              <span>Linea directa regional</span>
            </div>
          </div>
        </div>

        <form className="contact-form glass-panel">
          <h3>Get in touch</h3>
          <p>Te respondemos en el mismo dia habil.</p>
          <div className="contact-field-grid">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <input type="email" placeholder="Correo corporativo" />
          <div className="contact-field-grid">
            <input type="text" placeholder="Pais" />
            <input type="text" placeholder="Telefono" />
          </div>
          <textarea placeholder="Cuentanos sobre tu reto" rows={4} />
          <button type="submit">Enviar solicitud</button>
          <small>
            Al enviar aceptas nuestra politica de privacidad y el tratamiento de
            datos.
          </small>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
