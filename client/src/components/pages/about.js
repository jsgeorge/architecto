import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../layout/banner";

const AboutPage = () => {
  return (
    <div id="company">
      <Banner />
      <div id="wrapper">
        <Header />
        <div className="topnav">
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
          <div className="row" />
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-7">
              <img
                src="../images/body-bg2.jpg"
                className="mobile_img"
                id="img_lrg2"
              />

              <section>
                <h2> Welcome! </h2>
                <p>
                  Arhitecto is a global provider of planning, design and
                  delivery solutions for the built environment. Since the firm's
                  founding in 1955, Arhitecto has developed into one of the
                  world's laargest, most diverse and respected design practices.
                  We employ more than 1,800 professionals linked across a global
                  network of 25 offices on three continents. Industry surveys
                  consistently rank Arhitecto among the leading firms in
                  numerous building types, specialties and regions,
                </p>
              </section>

              <section id="capabilities">
                <h2>Our Capabilities</h2>
                <ul id="mainNav">
                  <li>
                    <a href="../modern+design">Modern Design</a>
                  </li>
                  <li>
                    <a href="../modern+design">Commerical Buildings</a>
                  </li>
                  <li>
                    <a href="../modern+design">Residential Homes</a>
                  </li>
                  <li>
                    <a href="../modern+design">Office Space</a>
                  </li>
                  <li>
                    <a href="../modern+design">Family Rooms</a>
                  </li>
                  <li>
                    <a href="../modern+design">Interior/Exterior</a>
                  </li>
                  <li>
                    <a href="../modern+design">Family Rooms</a>
                  </li>
                  <li>
                    <a href="../modern+design">Interior/Exterior</a>
                  </li>
                </ul>
                <div className="row" />
              </section>
            </div>
          </div>
          <div className="col-md-5">
            <section id="ourStaff">
              <h2>Our Staff</h2>
              <div className="items">
                <div className="item">
                  <img
                    alt=""
                    src="../images/staffpics/manager.jpeg"
                    className="imageStyle"
                  />
                  <strong>Tom Smith </strong>
                  <br />
                  PROJECT MANAGER <br />
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt&nbsp;
                </div>
                <div className="item">
                  <img
                    alt=""
                    src="../images/staffpics/enginner.jpeg"
                    className="imageStyle"
                  />
                  <strong>Alan Johnson </strong>
                  <br />
                  CHIEF ENGINEER
                  <br />
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet
                </div>
                <div className="item">
                  <img
                    alt=""
                    src="../images/staffpics/accountant.jpg"
                    className="imageStyle"
                    width="115"
                  />
                  <strong>Leslie Jennings</strong>
                  <br />
                  ACCOUNT SPECIALIST
                  <br />
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt
                </div>
              </div>
              <button>More Info</button>
            </section>
          </div>
          <div className="row" />
        </div>{" "}
        <Footer />
      </div>{" "}
      {/*end wrapper */}
      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
