import "./navbar.css";

function NavbarItem({ label, href, isActive, onClick }) {
  return (
    <li className="navbar-item">
      <a
        href={href}
        className={isActive ? "navbar-link active" : "navbar-link"}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}

export default NavbarItem;
