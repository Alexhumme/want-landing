import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import "./navbar.css";
import logo from "../../../assets/logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  const items = [
    { label: "Inicio", href: "#inicio", id: "inicio" },
    { label: "Enfoque", href: "#enfoque", id: "enfoque" },
    { label: "Soluciones", href: "#soluciones", id: "soluciones" },
    { label: "Transformador", href: "#transformador", id: "transformador" },
    { label: "Hub", href: "#hub-want", id: "hub-want" },
    { label: "Suite Crédito", href: "#suite-credito", id: "suite-credito" },
    { label: "Contacto", href: "#contacto", id: "contacto" }
  ];

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.9] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  const handleItemClick = () => {
    setOpen(false);
  };


  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={logo} alt="WANT logo" />
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className={`navbar-menu ${open ? "active" : ""}`}>
          {items.map((item) => (
            <NavbarItem
              key={item.id}
              label={item.label}
              href={item.href}
              isActive={activeId === item.id}
              onClick={handleItemClick}
            />
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
