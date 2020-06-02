import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    if (window.screen.width > 500) {
      setMobile(false);
    } else {
      setMobile(true);
      //if (showMenu) setShowMenu(false);
    }
  });
  return (
    <div id="home">
      <Banner />
      <div id="wrapper">
        {/* <div className="logo-wrapper">
          <span className="logo">ARCHITECTO</span>
          <br />

          <span className="logo-sub">
            PROJECT PLANNING AND ARCHITECETURAL SERVICES
          </span>
        </div> */}
        <Header />

        <button className="mobileMenu" onClick={() => setShowMenu(!showMenu)}>
          <span className="fontMobileMenu">=</span>
        </button>
        {!mobile || (mobile && showMenu) ? (
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
                <Link to="/clients" id="clientLink">
                  CLIENTS{" "}
                </Link>
              </li>
              <li>
                <Link to="/contacts" id="contactLink">
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
        <Footer type="home-foot-nav" />
      </div>
      {/*end wrapper */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
