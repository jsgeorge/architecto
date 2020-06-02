import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import ProjectList from "../projects";
import Categories from "../categories";

const ProjectsPage = () => {
  useEffect(() => {}, []);

  return (
    <div id="projects">
      <Banner />
      <div id="wrapper">
        <Header />
        <div className="topnav">
          <ul id="topnav">
            <li id="homeLi">
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
            <div className="col-md-6">
              <img
                src="../images/architect_01.jpg"
                className="mobile_img"
                id="img_lrg2"
              />
              <section>
                <h2>Our Latest Projects</h2>
                <ProjectList show="latestprojects" />
              </section>
              <section>
                <h2>Project Gallery</h2>
                <ProjectList show="gallery" />
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <h2>All Projects</h2>
                <p>
                  Container, it will appear to be cut off. You also won't be
                  able to use negative margins or absolute positioning with
                  negative values to pull elements outside the .container or
                  they will also won't display outside the .container.
                </p>
              </section>
              <section id="all-projects">
                <Categories />
                <div className="row" />
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

export default ProjectsPage;
