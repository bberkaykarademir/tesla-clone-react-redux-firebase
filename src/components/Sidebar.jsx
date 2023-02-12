import React from "react";
import { Link } from "react-router-dom";
import { MdClose, MdLanguage } from "react-icons/md";

const Sidebar = ({ setSidebar, sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <MdClose
        size={33}
        className="close"
        onClick={() => {
          setSidebar(false);
        }}
      />
      <p className="menuProducts">
        <Link to="/Models" className="modelLink">
          Model S
        </Link>
      </p>
      <p className="menuProducts">
        <Link to="/Model3" className="modelLink">
          Model 3
        </Link>
      </p>
      <p className="menuProducts">
        <Link to="/Modelx" className="modelLink">
          Model X
        </Link>
      </p>
      <p className="menuProducts">
        <Link to="/Modely" className="modelLink">
          Model Y
        </Link>
      </p>
      <p className="menuProducts">
        <Link to="/Solarroof" className="modelLink">
          Solar Roof
        </Link>
      </p>
      <p className="menuProducts">
        <Link to="/Solarpanels" className="modelLink">
          Solar Panels
        </Link>
      </p>
      <p>Existing Inventory</p>
      <p>Used Inventory</p>
      <p>Trade-In</p>
      <p>Demo Drive</p>
      <p>Insurance</p>
      <p>Cybertruck</p>
      <p>Roadster</p>
      <p>Roadster</p>
      <p>Semi</p>
      <p>Charging</p>
      <p>Powerwall</p>
      <p>Commercial Energy</p>
      <p>Utilities</p>
      <p>Find Us</p>
      <p>Support</p>
      <p>Investor Relations</p>
      <p className="menuProducts">
        <Link to="/SignIn" className="modelLink">
          Account
        </Link>
      </p>
      <p className="language">
        <div className="icon">
          <MdLanguage fontSize={23} />
        </div>
        <div className="chosen">
          <div>United States</div>
          <small>English</small>
        </div>
      </p>
    </div>
  );
};

export default Sidebar;
