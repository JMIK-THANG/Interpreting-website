import React from "react";
import "./Navigation.css";
import Logo from "../../assets/Logo.png";
const Navigation = () => {
  return (
    <div className="main-navigation">
      <div className="main-navigation-wrapper">
        <img src={Logo} alt="logo picture" className="main-navigation__logo" />
        <ul className="main-navigation-lists">
          <li className="main-navigation-list">About</li>
          <li className="main-navigation-list">Servives</li>
          <li className="main-navigation-list">Contact</li>
        </ul>
        <h2 className="main-navigation-number">Phone</h2>
      </div>
    </div>
  );
};

export default Navigation;
