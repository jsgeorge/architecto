import React, { useState, useEffect, useContext } from "react";
import "../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
import AdminHeader from "../layout/header";
import AdminSidebar from "../layout/sidebar";
import AdminCommandLine from "../layout/cmdline";
import AdminProjectsList from "../comonents/projects";
const AdminProjectsPage = ({ match }) => {
  useEffect(() => {
    console.log(match.params.srchstr);
  });
  console.log(match.params.srchstr);
  if (match.params.srchstr) {
    return (
      <div className="body" id="projects">
        <AdminHeader />
        <div className="row">
          <AdminSidebar />
          <div className="adminContent">
            <h3>Projects</h3>
            <AdminCommandLine type={"projects"} />
            <AdminProjectsList
              show={"searchprojects"}
              srchstr={match.params.srchstr}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="body" id="projects">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="adminContent">
          <h3>Projects</h3>
          <AdminCommandLine type={"projects"} />
          <AdminProjectsList show={"allprojects"} />
        </div>
      </div>
    </div>
  );
};

export default AdminProjectsPage;
