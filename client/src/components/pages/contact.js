import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../layout/banner";

const ContactsPage = () => {
  return (
    <div id="contacts">
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
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-7">
              <section id="ourStaff">
                <h2>Contacts</h2>
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
          </div>
          <div className="col-md-5"></div>
          <div className="row" />
        </div>{" "}
        <Footer />
      </div>{" "}
      {/*end wrapper */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactsPage;
