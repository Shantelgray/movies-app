import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      <Link to="/home" onClick={handleToggleMenu}>
        Home
      </Link>
      <Link to="/genre" onClick={handleToggleMenu}>
        Genres
      </Link>
      <Link to="/rating" onClick={handleToggleMenu}>
        Ratings
      </Link>
      <Link to="/favorite" onClick={handleToggleMenu}>
        Favorites
      </Link>
    </nav>
  );
};
export default NavBar;
