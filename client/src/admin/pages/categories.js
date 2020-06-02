import React, { useState } from "react";
import "../../admin-styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import AdminCategoriesList from "../comonents/categories";

const AdminCategoriesPage = () => {
  const [adding, setAdding] = useState(false);
  const [category, setcategory] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setcategory(e.target.value);
  };

  const validData = () => {
    let err = {};
    setError({});
    if (!category) {
      err.category = "Inalid/Missing category name";
    }

    //console.log(errs);
    if (!category) {
      setError(err);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitcategory = async () => {
    if (validData()) {
      console.log("category", category);

      try {
        const response = await axios
          .post("/category/", category)
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
    await submitcategory();
  };

  return (
    <div className="body" id="categories">
      <div className="header">
        <div className="logo-div">
          <h2>ARCHITECTO admin</h2>
        </div>
      </div>
      <div className="row">
        <div className=" leftBar">
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
        <div className="adminContent">
          <h3>Categories</h3>
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
                <strong>Add Category</strong>
              </span>
              {formError ? <div className="has-error">{formError}</div> : null}
              <div className={classnames("form-group", { "has-error": error })}>
                {error.category ? (
                  <span className="help-block">{error.category}</span>
                ) : (
                  <label>Category Name</label>
                )}
                <br />
                <input
                  name="category"
                  type="text"
                  value={category}
                  onChange={handleChange}
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
          <AdminCategoriesList />
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriesPage;
