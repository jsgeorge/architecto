import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import ProjectList from "../projects";

const ProjectsBuyPage = () => {
  return (
    <div style={{ background: "#eee" }}>
      {/* <Banner /> */}
      <div id="wrapper">
        <Header />
        <div className="content">
          <ProjectList category="Buying" id="5ebdebfd6096196604dd7b82" />
          {/* <div className="long_pod">
            <p>
              <img
                src="../images/ae-house-photo-06.jpg"
                width="1280"
                height="853"
                id="img_small"
              />
              The most reliable will be to add a The above links demonstrate a
              basic navigational structure using an unordered list styled with
              CSS.{" "}
            </p>
            <p>
              Use this as a starting point and modify the properties to produce
              your own unique look. If you require flyout menus, create your own
              using a Spry menu, a menu widget from Adobe's Exchange or a
              variety of other javascript or CSS solutions.{" "}
            </p>
          </div> */}
          {/* <div className="long_pod">
            <p>
              <img
                src="../images/Colorful-House-Ideas-Yazgan-Design-Architecture-swimming-pool-design-5.jpg"
                width="1600"
                height="1067"
                id="img_small"
              />
              The most reliable will be to add a The above links demonstrate a
              basic navigational structure using an unordered list styled with
              CSS.{" "}
            </p>
            <p>
              Use this as a starting point and modify the properties to produce
              your own unique look. If you require flyout menus, create your own
              using a Spry menu, a menu widget from Adobe's Exchange or a
              variety of other javascript or CSS solutions.{" "}
            </p>
          </div>
          <div className="long_pod">
            <p>
              <img
                src="../images/modern-home-Pitsou-Kedem.jpg"
                width="1400"
                height="899"
                id="img_small"
              />
              The most reliable will be to add a The above links demonstrate a
              basic navigational structure using an unordered list styled with
              CSS.{" "}
            </p>
            <p>
              Use this as a starting point and modify the properties to produce
              your own unique look. If you require flyout menus, create your own
              using a Spry menu, a menu widget from Adobe's Exchange or a
              variety of other javascript or CSS solutions.{" "}
            </p>
          </div> */}
        </div>
        {/*end wrapper */}
      </div>
      <Footer />>
    </div>
  );
};

export default ProjectsBuyPage;
