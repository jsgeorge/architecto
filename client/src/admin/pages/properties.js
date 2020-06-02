import React, { useState } from "react";
import "../../admin-styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import AdminPropertiesList from "../comonents/properties";

const AdminPropertiesPage = () => {
  const [adding, setAdding] = useState(false);
  const [property, setProperty] = useState();
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setProperty(e.target.value);
  };

  const validData = () => {
    let err = {};
    setError({});
    if (!property) {
      err.property = "Inalid/Missing property type";
    }

    //console.log(errs);
    if (!property) {
      setError(err);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitProperty = async () => {
    if (validData()) {
      console.log("property", property);

      try {
        const response = await axios
          .post("/properties", { name: property })
          .then((res) => {
            setAdding(false);
          })
          .catch((err) => {
            console.log(err);
            setFormError("Could add  document to file, Unknown error");
          });
      } catch (error) {
        setFormError("Could not add document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const onSubmitAdd = async () => {
    await submitProperty();
  };

  return (
    <div className="body" id="properties">
      <div className="header">
        <div className="logo-div">
          <h2>ARCHITECTO admin</h2>
        </div>
      </div>
      <div className="row">
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
        <div className=" adminContent">
          <h3>Property Types</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLink2">
              Close
            </Link>
            <button
              style={{ width: "100px" }}
              onClick={() => setAdding(!adding)}
              className="btnLink2"
            >
              {!adding ? "Add" : "Cancel Add"}
            </button>
            <div className="cmd-form">
              Search <input />
              <button>GO</button>
            </div>
          </div>
          {adding ? (
            <div className="form">
              <span>
                <strong>Add Property Type</strong>
              </span>
              {formError ? <div className="has-error">{formError}</div> : null}
              <div className={classnames("form-group", { "has-error": error })}>
                {error.property ? (
                  <span className="help-block">{error.property}</span>
                ) : (
                  <label>Property Type</label>
                )}
                <br />
                <input
                  name="property"
                  type="text"
                  value={property}
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => onSubmitAdd()}
                  style={{ clear: "left" }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : null}
          <AdminPropertiesList />
        </div>
      </div>
    </div>
  );
};

export default AdminPropertiesPage;
