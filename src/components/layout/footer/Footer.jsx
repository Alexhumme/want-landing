import "./footer.css";
import logoTexto from "../../../assets/logo-texto.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <img className="footer-logo" src={logoTexto} alt="WANT" />
            <p>
              Soluciones tecnológicas que convierten operaciones financieras en
              experiencias seguras, rápidas y escalables.
            </p>
            <button className="footer-cta">Agenda un Proyecto →</button>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#transformador">Transformador</a>
          </div>

          <div className="footer-links">
            <h4>Conectar</h4>
            <div className="footer-socials">
              <button aria-label="LinkedIn">in</button>
              <button aria-label="X">x</button>
              <button aria-label="Correo">@</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 WANT. Todos los derechos reservados.</span>
          <span>Crafted with ♥ and lots of coffee</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
