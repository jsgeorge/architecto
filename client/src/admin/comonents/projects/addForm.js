import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import FileUpload from "../../utils/fileupload";
import axios from "axios";
import SelectCategories from "../categories/selectcategory";
import SelectProperties from "../properties/selectproperty";
//import { flashErrorMessage } from "../layout/flash-message";
import classnames from "classnames";

const AdminAddProjectForm = () => {
  const [errors, setErrors] = useState({});

  //fields definition
  const [projname, setProjname] = useState("");
  const [projcategory, setProjcategory] = useState("");
  const [projproperty, setProjproperty] = useState("");
  const [projlocation, setProjlocation] = useState("");
  const [projcity, setProjcity] = useState("");
  const [projstate, setProjstate] = useState("");
  const [projarea, setProjarea] = useState("");
  const [projheadline, setProjheadline] = useState("");
  const [projdescription, setProjdescription] = useState("");
  const [error, setError] = useState("");
  //editedd filds
  const [edited, setEdited] = useState({
    name: "",
    category: "",
    property: "",
    location: "",
    city: "",
    state: "",
    area: 0,
    cost: 0,
    headline: "",
    description: "",
    images: [],
  });

  //form operations
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [images, setImages] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {});

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const validData = () => {
    let errs = {};
    setErrors({});
    const { name, location, category, property } = edited;
    if (!name) {
      errs.name = "Inalid/Missing project name";
    }
    if (!location) {
      errs.location = "Inalid/Missing project location";
    }
    if (!category) {
      errs.category = "inalid/missing category";
    }
    if (!property) {
      errs.property = "invalid/missing property type";
    }
    //console.log(errs);
    if (!name || !location || !category || !property) {
      setErrors(errs);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitProject = async () => {
    if (projcategory) {
      edited.category = projcategory;
    }
    if (projproperty) {
      edited.property = projproperty;
    }
    if (images) {
      edited.images = [images];
    }
    //let h = edited.headline;
    //if (!edited.headline) h = projheadline;

    console.log("edited", edited);

    if (validData()) {
      let projdata = {
        name: edited.name,
        category: edited.category,
        property: edited.property,
        location: edited.location,
        city: edited.city,
        state: edited.state,
        area: edited.area,
        cost: edited.cost,
        headline: edited.headline,
        description: edited.description,
        images: edited.images,
      };

      console.log("projdata", projdata);

      try {
        const response = await axios
          .post("/projects/add", projdata)
          .then((res) => {
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
            setFormError("Could add update document to file, Unknown error");
          });
      } catch (error) {
        setFormError("Could not add document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const onSubmit = async () => {
    await submitProject();
  };

  if (redirect) {
    return <Redirect to={`/admin/projects`} />;
  }

  return (
    <div className="admin-edit-project">
      <div className="form">
        <h4>Add Project</h4>

        {formError ? <div className="has-error">{formError}</div> : null}
        {error ? <div className="has-error">{error}</div> : null}
        <div className="row">
          <div className="col-md-7">
            <div className={classnames("form-group", { "has-error": errors })}>
              {errors.name ? (
                <span className="help-block">{errors.name}</span>
              ) : (
                <label>Project Name</label>
              )}
              <input
                name="name"
                type="text"
                value={edited.name}
                onChange={handleChange}
              />
            </div>
            <SelectCategories
              projcategory={projcategory}
              setProjcategory={setProjcategory}
              editctgry={edited.category}
              errors={errors.category}
            />{" "}
            <br />
            <SelectProperties
              projproperty={projproperty}
              setProjproperty={setProjproperty}
              editprop={edited.property}
              errors={errors.property}
            />{" "}
            <div className={classnames("form-group", { "has-error": errors })}>
              {errors.location ? (
                <span className="help-block">{errors.location}</span>
              ) : (
                <label>Location</label>
              )}

              <input
                name="location"
                type="text"
                value={edited.location}
                onChange={handleChange}
              />
              <button
                onClick={() => setEdited({ ...edited, location: edited.name })}
              >
                copy name
              </button>
            </div>
            <div className="form-group">
              <label>City</label>

              <input
                name="city"
                type="text"
                value={edited.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>

              <input
                name="state"
                id="category-input"
                type="text"
                value={edited.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Area (Sq ft)</label>

              <input
                name="area"
                id="category-input"
                type="text"
                value={edited.area}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Project cost</label>

              <input
                name="cost"
                id="category-input"
                type="text"
                value={edited.cost}
                onChange={handleChange}
              />
            </div>
            {/* {!project ? ( */}
            <div className="form-group">
              <label>Headline</label>

              <input
                name="headline"
                id="headline-input"
                type="text"
                value={edited.headline}
                onChange={handleChange}
              />
            </div>
            {/* ) : null} */}
            {/* {project && edited.headline ? (
          <div className="form-group">
            <label>Headline</label>
            <br />
            <input
              name="headline"
              style={{ float: "left" }}
              id="headline-input"
              type="text"
              value={edited.headline}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="form-group ">
            <label className="has-error">Headline</label>
            <br />
            <input
              name="headline"
              style={{ float: "left" }}
              id="headline-input"
              type="text"
              value={edited.headline}
              placeholder="Missing Headline"
              onChange={handleChange}
            />
          </div>
        )} */}
          </div>
          <div className="col-md-5 pull-right">
            <label>Project Image</label>
            <div className="edit-image-wrapper">
              {edited.images && images.length > 0 && images.url ? (
                <img src={images.url} id="img_lrg" alt="No Image" />
              ) : (
                <span>NO Image</span>
              )}
            </div>
            <div className="form-group">
              <FileUpload
                images={images}
                setImages={setImages}
                reset={formSuccess}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            className="form-control"
            value={edited.description}
            onChange={handleChange}
            rows="20"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSubmit()}
            style={{ clear: "left" }}
          >
            Submit
          </button>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default AdminAddProjectForm;
