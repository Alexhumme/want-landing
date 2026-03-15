import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavbarItem({ label, href }) {
  return (
    <li className="navbar-item">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "navbar-link active" : "navbar-link"
        }
      >
        {label}
      </NavLink>
    </li>
  );
}

export default NavbarItem;

