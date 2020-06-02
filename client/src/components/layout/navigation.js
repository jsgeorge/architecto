import React from "react";

const Navigation = () => {
  return (
    <div className="topnav" id="home-nav">
      <ul id="topnav">
        <li>
          <Link to="/" id="homeLink">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" id="companyLink">
            COMPANY
          </Link>
        </li>
        <li>
          <Link to="/services" id="serviceLink">
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="/projects" id="projectLink">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="/clients">CLIENTS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACTS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
