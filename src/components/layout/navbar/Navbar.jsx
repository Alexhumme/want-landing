import { useState } from "react";
import NavbarItem from "./NavbarItem";
import "./navbar.css";
import logo from "../../../assets/logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);

  const items = [
  { label: "Home", href: "/" },
  { label: "Soluciones", href: "/soluciones" }
];


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
          {items.map((item, index) => (
            <NavbarItem key={index} label={item.label} href={item.href} />
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
