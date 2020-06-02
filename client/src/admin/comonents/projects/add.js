import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../../context/project-context";
import DetailCategory from "../categories/detailcategory";
import DetailProperty from "../properties/detailproperty";
import AdminAddProjectForm from "./addForm";
import "../../../admin-styles.css";
import { Link } from "react-router-dom";
//import AdminProjectsList from "../comonents/projects";
const AdminProjectAdd = () => {
  const [error, setError] = useState("");
  const [project, setProject] = useState({}); //useContext(ProjectContext);
  const { header, setHeader } = useState("");

  if (error) {
    return <div className="projects-wrapper">{error}</div>;
  }
  if (!project) return <div>No current project</div>;
  return (
    <div className="body" id="projects">
      <div className="header">
        <div className="logo-div">
          <h2>ARCHITECTO admin</h2>
        </div>
      </div>
      <div className="admin-pagewrapper">
        <div className="row">
          <div className="col-md-2 leftBar">
            <h5>File Maintainance</h5>
            <ul>
              <li>
                <Link to={"/admin/projects"} id="projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={"/admin/categories"} id="categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link to={"/admin/properties"} id="properties">
                  Properties
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-10 adminContent" id="edit">
            <h3>Projects</h3>
            <div className="cmd-line">
              <Link to="/admin/dashboard" className="btnLink2">
                Close
              </Link>
              <Link to="/admin/projects/" className="btnLink2" id="list">
                List
              </Link>
              <Link
                to="/admin/projects/add"
                className="btnLinkActive"
                id="list"
              >
                New
              </Link>
            </div>
            <AdminAddProjectForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectAdd;
