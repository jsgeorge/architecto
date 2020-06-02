import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import FileUpload from "../../utils/fileupload";
import classnames from "classnames";
import axios from "axios";
import SelectCategories from "../categories/selectcategory";
import SelectProperties from "../properties/selectproperty";
//import { flashErrorMessage } from "../layout/flash-message";

const AdminProjectForm = ({ id }) => {
  const [errors, setErrors] = useState({});

  //fields definition
  const [featured, setFeatured] = useState(false);
  const [projname, setProjname] = useState();
  const [projcategory, setProjcategory] = useState("");
  const [projproperty, setProjproperty] = useState("");
  const [projlocation, setProjlocation] = useState("");
  const [projcity, setProjcity] = useState("");
  const [projstate, setProjstate] = useState("");
  const [projarea, setProjarea] = useState("");
  const [projheadline, setProjheadline] = useState("");
  const [projdescription, setProjdescription] = useState("");
  const [error, setError] = useState("");
  const [edited, setEdited] = useState({});
  const [header, setHeader] = useState("");
  const [header2, setHeader2] = useState("");

  //form operations
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [images, setImages] = useState({});
  const [redirect, setRedirect] = useState(false);

  const fetchData = async () => {
    console.log("id", id);
    try {
      const response = await axios
        .get(`/projects/article?id=${id}`)
        .then((res) => {
          setFeatured(res.data[0].featured);
          setEdited(res.data[0]);
          setHeader(res.data[0].name);
          setHeader2(res.data[0].location);
          console.log("project", res.data[0]);
        })
        .catch((err) => {
          setError(
            "Error cannont retrieve project properties.Network propblem"
          );
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setError("Error cannot show the curent project");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const validData = () => {
    let errs = {};
    setErrors({});
    const { name, location, category, property } = edited;
    if (!name) {
      errs.name = "Inalid/Missing iem name";
    }
    if (!location) {
      errs.location = "Inalid/Missing iem location";
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

    if (validData()) {
      let projdata = {
        name: edited.name,
        location: edited.location,
        category: edited.category,
        property: edited.property,
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
          .post(`/projects/update?id=${id}`, projdata)
          .then((res) => {
            setRedirect(true);
          })
          .catch((err) => {
            setFormError("Could not update document to file, Unknown error");
            console.log(err);
          });
      } catch (error) {
        setFormError("Could not update document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const updateFeatured = () => {
    let rec = {
      ...edited,
      featured: !featured,
    };
    try {
      axios
        .post(`/projects/feature?id=${id}`, rec)
        .then((res) => {
          setRedirect(true);
        })
        .catch((err) => {
          setFormError("Could not update document to file, Unknown error");
          console.log(err);
        });
    } catch (error) {
      setFormError("Could not update document to file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };
  const onSubmit = async () => {
    await submitProject();
  };

  if (redirect) {
    return <Redirect to={`/admin/projects/${id}/detail`} />;
  }

  //if (!edited) return <div>Unable to retrieve edit project document</div>;
  return (
    <div className="admin-edit-project">
      {edited ? (
        <div>
          <h4>Edit Project</h4>
          <h5>
            {header}
            <br />
            {header2}
          </h5>
        </div>
      ) : null}
      <div className="form">
        {formError ? <div className="has-error">{formError}</div> : null}
        {error ? <div className="has-error">{error}</div> : null}
        <div className="row">
          <div className="col-md-6">
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
                // type="text"
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
                style={{ float: "left" }}
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
                style={{ float: "left" }}
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
          </div>
          <div className="col-md-5 pull-right">
            <div
              className="featured"
              style={{
                height: "30px",
                padding: "10px",

                border: "1px solid #ccc",
              }}
            >
              <label style={{ width: "60px" }}>Featured</label>
              {featured ? (
                <input
                  type="checkbox"
                  name="featured"
                  checked
                  onChange={() => updateFeatured()}
                />
              ) : (
                <input
                  type="checkbox"
                  name="featured"
                  onChange={() => updateFeatured()}
                />
              )}
            </div>
            <div className="form-group">
              <label>Project Image</label>
              <br />
              {edited.images &&
              edited.images.length > 0 &&
              edited.images[0].url ? (
                <img src={edited.images[0].url} id="img_lrg" alt="No Image" />
              ) : (
                <span className="has-error">NO Image</span>
              )}
              {/* <FileUpload
          imagesHandler={(images) => imagesHandler(images)}
          reset={formSuccess}
        /> */}
              <FileUpload
                images={images}
                setImages={setImages}
                reset={formSuccess}
              />{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onSubmit()}
            style={{ clear: "left" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectForm;
