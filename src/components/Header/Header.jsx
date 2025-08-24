import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <div className="header">
      <Navigation></Navigation>
      <div className="header__content">
        <h1 className="header__content-heading">
         Professional Courtroom Deposition Interpreting
        </h1>
        <p className="header__content-paragraph">
         Consecutive & simultaneous interpreting for hearings, trials, depositions, client meetings, and USCIS
        </p>
        <button className="header__content-button">More Info</button>
      </div>
    </div>
  );
};

export default Header;
