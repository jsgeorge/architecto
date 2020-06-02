import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../../context/project-context";
import DetailCategory from "../categories/detailcategory";
import DetailProperty from "../properties/detailproperty";
import AdminProjectForm from "./form";
import "../../../admin-styles.css";
import { Link } from "react-router-dom";
//import AdminProjectsList from "../comonents/projects";

const AdminProjectEdit = ({ match }) => {
  const [error, setError] = useState("");
  const { header, setHeader } = useState("");
  const onDelete = () => {};
  if (!match.params.id)
    return (
      <div>
        Error -Could not retrieve project record. invalid/missing project id
      </div>
    );
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
              <Link to="/admin/projects/add" className="btnLink2" id="add">
                New
              </Link>
              <Link
                to="/admin/projects/edit"
                className="btnLinkActive"
                id="edit"
              >
                Edit
              </Link>
              <button onClick={onDelete} className="btn2" id="btnDel">
                Delete
              </button>
            </div>
            {<AdminProjectForm id={match.params.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectEdit;
