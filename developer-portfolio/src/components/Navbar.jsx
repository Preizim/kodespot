import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-links">
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/about" activeclassname="active">About</NavLink>
      </div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
