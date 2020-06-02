import React, { useContext, useEffect, useState } from "react";
import "../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../context/user-context";
import axios from "axios";
import "../admin-styles.css";
import AdminHeader from "./layout/header";
import AdminLogin from "./auth/login";
import AdminRegister from "./auth/register";
import Dashboard from "./dashboard";

const Admin = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  if (!localStorage.jwtToken)
    return (
      <div className="body">
        <AdminHeader />
        {showLogin ? (
          <AdminLogin
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            showReg={showReg}
            setShowReg={setShowReg}
          />
        ) : null}
        {showReg ? (
          <AdminRegister
            showLogin={showLogin}
            setShowLogin={setShowLogin}
            showReg={showReg}
            setShowReg={setShowReg}
          />
        ) : null}
      </div>
    );
  return (
    <div className="body">
      <AdminHeader />
      <Dashboard />
    </div>
  );
};

export default Admin;
