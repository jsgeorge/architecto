import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Detail from "../projects/detail";

const ModelPage = ({ match }) => {
  //const [id, setId] = useState("");
  useEffect(() => {
    const { id } = match.params;
    console.log("model id", id);
    /// setId(id);
  });
  const { id } = match.params;
  return (
    <div id="detail">
      {/* <Banner /> */}
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
          <Detail id={id} />
          <div className="row"></div>
        </div>{" "}
        {/*end wrapper */}
        <Footer />
      </div>{" "}
      {/*end wrapper */}
    </div>
  );
};

export default ModelPage;
