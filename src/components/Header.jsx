import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setSidebar, sidebar }) => {
  return (
    <nav className={sidebar ? "blur" : null}>
      <Link to="/" className="modelLink">
        <img src="/img/logo.svg" />
      </Link>
      <div className="products">
        <Link to="/Models" className="modelLink">
          Model S
        </Link>
        <Link to="/Model3" className="modelLink">
          Model 3
        </Link>
        <Link to="/Modelx" className="modelLink">
          Model X
        </Link>
        <Link to="/Modely" className="modelLink">
          Model Y
        </Link>
        <Link to="/Solarroof" className="modelLink">
          Solar Roof
        </Link>
        <Link to="/Solarpanels" className="modelLink">
          Solar Panels
        </Link>
      </div>
      <div className="links">
        <a href="#">Shop</a>
        <Link to="/SignIn" className="modelLink">
          Account
        </Link>
        <a
          onClick={() => {
            setSidebar(true);
          }}
        >
          Menu
        </a>
      </div>
    </nav>
  );
};

export default Header;
