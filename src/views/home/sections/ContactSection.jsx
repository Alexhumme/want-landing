import { useState } from "react";
import "./contact-section.css";
import iconMail from "../../../assets/icon-mail.svg";
import iconWeb from "../../../assets/icon-web.svg";
import iconPhone from "../../../assets/icon-phone.svg";

function ContactSection() {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("");
    const formData = new FormData(event.target);
    formData.append("access_key", "5aada8e7-5dde-4ed1-8d92-3a50ac108794");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "¡Listo! Te contactaremos pronto." : "Error");
      if (data.success) event.target.reset();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResult("Error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contacto">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="contact-kicker">Contáctanos</p>
          <h2>Canales oficiales de contacto</h2>
          <p className="contact-lead">
            Estamos listos para ayudarte con una propuesta clara, tecnica y
            accionable.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <img src={iconMail} alt="Email" />
              </div>
              <div>
                <h3>Email</h3>
                <p>amunoz@wantnget.com.co</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <img src={iconWeb} alt="Web" />
              </div>
              <div>
                <h3>Web</h3>
                <p>www.wantnget.com.co</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <img src={iconPhone} alt="Telefono" />
              </div>
              <div>
                <h3>Telefono</h3>
                <p>+57 300 855 9200</p>
              </div>
            </div>
          </div>

        </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-head">
              <h3>Conversemos sobre tu proyecto</h3>
              <p>Cuéntanos lo que necesitas y te contactaremos en breve.</p>
            </div>
            <div className="contact-form-row">
              <label>
                Nombre
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
            </div>
            <label>
              Mensaje
              <textarea name="message" rows="4" required />
            </label>
            <button type="submit" disabled={submitting}>
              {submitting ? "Enviando..." : "Enviar"}
            </button>
            {result && <p className="contact-result">{result}</p>}
          </form>
      </div>
    </section>
  );
}

export default ContactSection;
