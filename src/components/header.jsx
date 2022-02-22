import { Link } from "react-router-dom";

function Header () {
    return (
      <nav className="header-container">
        <Link className="header-icon-container" to="/">Home</Link>
      </nav>
    );
}

export default Header