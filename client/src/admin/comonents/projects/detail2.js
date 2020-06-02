import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../../context/project-context";
import DetailCategory from "../categories/detailcategory";
import DetailProperty from "../properties/detailproperty";
import "../../../admin-styles.css";
import { Link } from "react-router-dom";
import SelectCategories from "../categories/selectcategory";
import SelectProperties from "../properties/selectproperty";

const AdminProjectDetail = ({ match }) => {
  const [error, setError] = useState("");
  const [project, setProject] = useState({}); //useContext(ProjectContext);
  const [projcategory, setProjcategory] = useState("");
  const [projproperty, setProjproperty] = useState("");

  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
    location: "",
    city: "",
    state: "",
    property: "",
    category: "",
    area: "",
    cost: "",
    headline: "",
    description: "",
    images: [],
  });
  const [projheadline, setProjheadline] = useState("");
  //form operations
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState(false);

  const fetchData = async (id) => {
    try {
      const response = await axios
        .get(`/projects/article?id=${id}`)
        .then((res) => {
          setProject(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setError("Error cannot show the curent project");
    }
  };
  useEffect(() => {
    let id = match.params.id;
    fetchData(id);
  }, []);

  const onDelete = () => {};
  if (error) {
    return <div className="projects-wrapper">{error}</div>;
  }

  const toggleEdit = (project) => {
    if (editing != project._id) {
      setEdited(project);
      setEditing(project._id);
    } else {
      // console.log("id", project._id, "edited", edited);
      // axios
      //   .post(`/projects/update?id=${project._id}`, edited)
      //   .then((res) => {
      //setproperties(res.data);
      setEditing(0);
      //         fetchData();
      //       })
      //       .catch((err) => console.log(err));
    }
  };

  if (!project) return <div>No current project</div>;
  const {
    _id,
    name,
    category,
    images,
    headline,
    description,
    location,
    property,
    area,
    type,
    cost,
    startdate,
  } = project;
  //if (project) console.log('detail project',project);
  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };
  const submitProject = async () => {
    let h = edited.headline;
    if (!edited.headline) h = projheadline;
    let projdata = {
      name: edited.name,
      location: edited.location,
      city: edited.city,
      category: edited.category,
      property: edited.property,
      area: edited.area,
      cost: edited.cost,
      headline: h,
      description: edited.description,
    };
    console.log("projdata", projdata);
    try {
      const response = await axios
        .post(`/projects/update?id=${project._id}`, projdata)
        .then((res) => {
          setEditing(0);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      setFormError(true);
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
    //} else {
    //console.log("invalid data");
    //}
  };

  const onSubmit = async () => {
    await submitProject();
  };

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
            <Link to="/admin/projects/" className="btnLink2">
              List
            </Link>
            <Link to="/admin/projects/add" className="btnLink2">
              Add
            </Link>
            {/* <Link to={`/admin/projects/${_id}/edit`} className="btnLink2">
              Edit
            </Link> */}
            <button onClick={toggleEdit(project)}>Edit</button>
            <button onClick={onDelete} className="btn2" id="btnDel">
              Delete
            </button>

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

          {project ? (
            <div className="project_detail_admin">
              {editing === project._id ? (
                <div className="admin-edit-project">
                  <h3>Edit Project</h3>
                  <h5>
                    {project.name}
                    <br />
                    {project.location}
                  </h5>

                  <div className="form">
                    <div className="form-group">
                      <label>Project Name</label>
                      <br />
                      <input
                        name="name"
                        type="text"
                        value={edited.name}
                        onChange={handleChange}
                      />
                    </div>

                    {project && project.category ? (
                      <span>
                        <SelectCategories
                          projcategory={projcategory}
                          setProjcategory={setProjcategory}
                          projid={project._id}
                          editctgry={project.category}
                        />{" "}
                      </span>
                    ) : null}
                    <br />

                    {project && project.property ? (
                      <span>
                        <SelectProperties
                          projproperty={projproperty}
                          setProjproperty={setProjproperty}
                          projid={project._id}
                          editprop={project.property}
                        />{" "}
                      </span>
                    ) : null}
                    <div className="form-group">
                      <label>Location</label>
                      <br />
                      <input
                        name="location"
                        type="text"
                        value={project.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <br />
                      <input
                        name="city"
                        type="text"
                        value={project.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <br />
                      <input
                        name="state"
                        style={{ float: "left" }}
                        id="category-input"
                        type="text"
                        value={project.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Area (Sq ft)</label>
                      <br />
                      <input
                        name="Area"
                        style={{ float: "left" }}
                        id="category-input"
                        type="text"
                        value={project.area}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Project cost</label>
                      <br />
                      <input
                        name="cost"
                        style={{ float: "left" }}
                        id="category-input"
                        type="text"
                        value={project.cost}
                        onChange={handleChange}
                      />
                    </div>
                    {project.headline ? (
                      <div className="form-group">
                        <label>Headline</label>
                        <br />
                        <input
                          name="headline"
                          style={{ float: "left" }}
                          id="headline-input"
                          type="text"
                          value={project.headline}
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
                          value={project.headline}
                          placeholder="Missing Headline"
                          onChange={handleChange}
                        />
                      </div>
                    )}
                    <div className="form-group">
                      <label>Description</label>
                      <br />
                      <textarea
                        name="description"
                        className="form-control"
                        value={project.description}
                        onChange={handleChange}
                        rows="20"
                      />
                    </div>
                    <div className="form-group">
                      {/* <FileUpload
          imagesHandler={(images) => imagesHandler(images)}
          reset={formSuccess}
        /> */}
                      {/* <FileUpload images={images} setImages={setImages} reset={formSuccess} /> */}
                      {/* </form> */}
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
                  </div>

                  {/* {errors.name ? (
                    <div className="has-error">Error {errors.name}</div>
                  ) : null}
                  {errors.category ? (
                    <div className="has-error">Error {errors.category}</div>
                  ) : null} */}
                  {formError ? (
                    <div className="has-error">Error - Could not add name</div>
                  ) : null}
                </div>
              ) : (
                <div className="project_detail">
                  <h2>
                    <strong>Project: </strong> {name}
                  </h2>
                  <p>
                    <strong>Date Created</strong> {startdate} <br />
                    <strong>Location:</strong> {location} <br />
                    <strong>Type:</strong> {type} <br />
                    {category ? (
                      <span>
                        <strong>Category: </strong>{" "}
                        <DetailCategory id={category._id} />
                      </span>
                    ) : (
                      <span className="has-error">
                        <strong>Category: </strong> Not selected
                      </span>
                    )}{" "}
                    <br />
                    {property ? (
                      <span>
                        <strong>Property Type: </strong>{" "}
                        <DetailProperty id={property} />
                      </span>
                    ) : (
                      <span>
                        <span className="has-error">
                          <strong>Property Type:</strong>Not selected
                        </span>
                      </span>
                    )}
                    <br />
                    <strong>Total Area</strong> {area} sq ft
                    <br />
                    <strong>Cost: </strong>${cost} <br />
                    <br />
                    <strong>Headline </strong>
                    {headline ? (
                      headline
                    ) : (
                      <span className="has-error">missing</span>
                    )}
                    <br />
                    <strong>Description</strong>
                    <br />
                    {description}
                  </p>

                  {images && images.length > 0 && images[0].url ? (
                    <img src={images[0].url} id="img_lrg" />
                  ) : null}

                  <br />
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
                </div>
              )}
            </div>
          ) : (
            //no current project
            <p>NO Current project</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProjectDetail;
