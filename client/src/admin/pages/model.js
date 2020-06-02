import React from "react";
import "../../admin-styles.css";
import { Link } from "react-router-dom";
//import AdminProjectsList from "../comonents/projects";
const AdminModelPage = () => {
  return (
    <div className="body" id="projects">
      <div className="header">
        <div className="logo-div">
          <h2>ARCHITECTO admin</h2>
        </div>
      </div>
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
        <div className="col-md-10 adminContent">
          <h3>Projects</h3>
          <div className="cmd-line">
            <Link to="/admin/projects/add" className="btnLink2">
              Add
            </Link>
            <div className="form">
              Search <input />
              <button>GO</button>
            </div>
            <div className="form">
              Category{" "}
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form">
              Property{" "}
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
          <h3>Model Page</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminModelPage;
