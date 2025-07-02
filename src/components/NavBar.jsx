import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar-vertical">
      <Link
        to="/home"
        className="nav-link active"
        aria-current="page"
        onClick={handleToggleMenu}
      >
        Home
      </Link>
      <Link to="/genre" className="nav-link" onClick={handleToggleMenu}>
        Genres
      </Link>
      <Link to="/rating" className="nav-link" onClick={handleToggleMenu}>
        Ratings
      </Link>
      <Link to="/year" className="nav-link" onClick={handleToggleMenu}>
        Year
      </Link>
      <span className="nav-link disabled" aria-disabled="true"></span>
    </nav>
  );
};

export default NavBar;
