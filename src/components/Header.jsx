import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-container">
      <Link className="nav-text-container" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Header;
