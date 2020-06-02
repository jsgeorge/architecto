import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import ProjectList from "../projects";
import Categories from "../categories";

const ListingsPage = ({ match }) => {
  useEffect(() => {
    console.log("listings show=", match.params.show);
  }, []);

  return (
    <div id="listing">
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
          <section>
            {match.params.category ? (
              <ProjectList
                show={match.params.show}
                category={match.params.category}
                id={match.params.id}
              />
            ) : (
              <ProjectList show={match.params.show} />
            )}
          </section>
          <div className="row" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ListingsPage;
