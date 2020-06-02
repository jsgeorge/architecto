import React from "react";
import { Link, Redirect } from "react-router-dom";
const AdminHeader = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <h3>ARCHITECTO admin</h3>
      </div>
      <div className="admin-menu-cmds">
        <ul id="admin-mnu">
          <li>
            <Link to="/admin/auth/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
