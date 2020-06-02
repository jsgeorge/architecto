import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import ServicesList from "../services";

const ServicesPage = () => {
  useEffect(() => {}, []);

  return (
    <div id="services">
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
              <Link to="/clients">CLIENTS</Link>
            </li>
            <li>
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <img
                src="../images/carousel/img2.jpg"
                className="mobile_img"
                id="img_lrg2"
              />

              <section id="service-list">
                <h2>Services List</h2>
                <ServicesList show={"list"} />
                <div className="clear-left" />
              </section>
              <section style={{ clear: "left" }}>
                <h2>Featured Service</h2>
                <p>
                  Container, it will appear to be cut off. You also won't be
                  able to use negative margins or absolute positioning with
                  negative values to pull elements outside the .container or
                  they will also won't display outside the .container. If you
                  need to use these properties, you'll need to use a different
                  clearing method.
                </p>
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <h2>Services Overview</h2>
                <ServicesList show={"desc"} />
              </section>
            </div>
          </div>
          <div className="row" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
