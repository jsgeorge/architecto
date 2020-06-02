import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
const AdminCommandLine = ({ type }) => {
  const [srchstr, setSrchstr] = useState("");
  const [show, setShow] = useState("allprojects");

  return (
    <div className="cmd-line">
      <Link to="/admin" className="btnLink2">
        Close
      </Link>
      <Link to="/admin/projects/add" className="btnLink2">
        New
      </Link>
      <div className="cmd-form">
        Search
        <input
          className="form-control"
          type="text"
          value={srchstr}
          placeholder=""
          onChange={(e) => setSrchstr(e.target.value)}
        />
        <Link to={`/admin/projects/${srchstr}`}>GO</Link>
      </div>
      <div className="cmd-form">
        Category
        <select>
          <option>Select</option>
        </select>
      </div>
      <div className="cmd-form">
        Property{" "}
        <select>
          <option>Select</option>
        </select>
      </div>
    </div>
  );
};

export default AdminCommandLine;
