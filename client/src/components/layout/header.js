import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <span className="logo">
          ARCHI<span className="tecto">TECTO</span>
        </span>
        <br />
        <span className="logo-sub">
          PROJECT PLANNING AND ARCHITECETURAL SERVICES
        </span>
      </Link>
    </div>
  );
};

export default Header;
