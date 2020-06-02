import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import Footer from "../layout/footer";

const ModelLayoutPage = () => {
  return (
    <div>
      <Banner />
      <div id="wrapper">
        <h3>Wrapper</h3>
        <Header />
        <div className="topnav" style={{ background: "rgba(0,0,0,.4)" }}>
          topnav
        </div>
        <div className="content">content</div>
        {/* <Footer type="home-foot-nav" /> */}
        <div className="footnav">footer</div>
      </div>
    </div>
  );
};

export default ModelLayoutPage;
