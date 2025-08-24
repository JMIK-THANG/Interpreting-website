import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/Logo.png";
const Navigation = () => {
  return (
    <div className="main-navigation">
      <div className="main-navigation-wrapper">
        <Link to="/">
          <img
            src={Logo}
            alt="logo picture"
            className="main-navigation__logo"
          />
        </Link>
        <ul className="main-navigation-lists">
          <li className="main-navigation-list">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="main-navigation-list">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="main-navigation-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <h2 className="main-navigation-number">
          <a href="#">Phone</a>
        </h2>
      </div>
    </div>
  );
};

export default Navigation;
