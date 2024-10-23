import React from "react";
import logo from "../assets/logo.png"; // Make sure your logo is available in the assets folder
import "./Nav.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Nav = () => {
  return (
    <nav className="nav-bar">
      {/* Left side logo */}
      <div className="nav-container">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      {/* Center menu with sub-menu */}
      <div className="menu-container">
        <ul className="main-menu">
          <li className="menu-item">
            Use Cases <i className="fas fa-chevron-down dropdown-arrow"></i>
            <ul className="sub-menu">
              <li>Consulting</li>
              <li>Development</li>
              <li>Design</li>
            </ul>
          </li>
          <li className="menu-item">
            Features <i className="fas fa-chevron-down dropdown-arrow"></i>
            <ul className="sub-menu">
              <li>Consulting</li>
              <li>Development</li>
              <li>Design</li>
            </ul>
          </li>
          <li className="menu-item">
            Resources <i className="fas fa-chevron-down dropdown-arrow"></i>
            <ul className="sub-menu">
              <li>Consulting</li>
              <li>Development</li>
              <li>Design</li>
            </ul>
          </li>
          <li className="menu-item">
            Company <i className="fas fa-chevron-down dropdown-arrow"></i>
            <ul className="sub-menu">
              <li>Consulting</li>
              <li>Development</li>
              <li>Design</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right side button */}
      <div className="button-container">
        <button className="sign-in-btn">Contact Sales</button>
      </div>
    </nav>
  );
};

export default Nav;
