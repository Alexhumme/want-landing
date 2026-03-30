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
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer-links">
            <h4>Conectar</h4>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/want-n-get/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.35V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.927-2.063-2.07 0-1.143.919-2.07 2.063-2.07 1.14 0 2.062.927 2.062 2.07 0 1.143-.922 2.07-2.062 2.07zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://wa.me/573008559200?text=Hola%21%20Quiero%20saber%20mas%20sobre%20su%20servicio."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16 3C9.383 3 4 8.383 4 15c0 2.386.695 4.68 2.01 6.65L4 29l7.584-1.976A12.93 12.93 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 21.5a9.46 9.46 0 0 1-4.826-1.324l-.346-.205-4.5 1.172 1.203-4.385-.225-.352A9.43 9.43 0 0 1 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.262-6.275c-.287-.143-1.7-.84-1.963-.935-.263-.096-.455-.143-.648.143-.191.287-.742.935-.91 1.127-.168.191-.336.215-.623.072-.287-.143-1.214-.447-2.312-1.427-.854-.762-1.43-1.704-1.598-1.99-.168-.287-.018-.442.125-.586.129-.128.287-.336.431-.504.144-.168.192-.287.287-.478.096-.191.048-.359-.024-.502-.072-.144-.648-1.56-.887-2.139-.232-.556-.468-.48-.648-.49-.168-.008-.359-.01-.551-.01s-.502.072-.767.359c-.263.287-1.006.984-1.006 2.4s1.03 2.78 1.174 2.973c.144.191 2.023 3.09 4.9 4.332.684.295 1.217.47 1.634.603.686.218 1.31.187 1.804.113.55-.082 1.7-.695 1.942-1.366.239-.67.239-1.245.168-1.366-.072-.12-.263-.191-.55-.334z" />
                </svg>
              </a>
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
