import React from "react";
import { Link, Redirect } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="leftBar">
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
  );
};

export default AdminSidebar;
