import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ type }) => {
  return (
    <div className="footnav" id={type}>
      <div className="row">
        <div className="col-md-4 bottom-logo">
          <div className="logo2">ARCHITECTO@2020 | Privacy Policy</div>
          <div className="powered"> POWERED BY MEYERSOFT TECH</div>
        </div>
        <div className="col-md-7 pull-right">
          <ul id="footnav">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">COMPANY</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/clients">CLIENTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACTS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
