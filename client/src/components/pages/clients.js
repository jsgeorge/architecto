import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../layout/banner";

const ClientsPage = () => {
  return (
    <div id="clients">
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
              <section>
                <h2> Our Clients </h2>

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

export default ClientsPage;
