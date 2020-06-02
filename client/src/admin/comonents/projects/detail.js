import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../../context/project-context";
import DetailCategory from "../categories/detailcategory";
import DetailProperty from "../properties/detailproperty";
import "../../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";

const AdminProjectDetail = ({ match }) => {
  const [error, setError] = useState("");
  const [project, setProject] = useState({}); //useContext(ProjectContext);
  const { header, setHeader } = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let filters = [];
    let id = match.params.id;
    const fetchData = async () => {
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
    fetchData();
  }, []);
  const onDelete = (id) => {
    try {
      axios
        .delete(`/projects?id=${id}`)
        .then((res) => {
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
          setError("Could delete document from file, Unknown error");
        });
    } catch (error) {
      setError("Could not delete document from file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };
  if (error) {
    return <div className="projects-wrapper">{error}</div>;
  }
  if (!project) return <div>No current project</div>;
  const {
    _id,
    name,
    category,
    location,
    property,
    area,
    cost,
    headline,
    description,
    images,
    startdate,
  } = project;
  //if (project) console.log('detail project',project);
  if (redirect) {
    return <Redirect to={`/admin/projects`} />;
  }
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
            <Link to="/admin/dashboard" className="btnLink2">
              Close
            </Link>
            <Link to="/admin/projects/" className="btnLink2">
              List
            </Link>
            <Link to="/admin/projects/add" className="btnLink2">
              Add
            </Link>
            <Link to={`/admin/projects/${_id}/edit`} className="btnLink2">
              Edit
            </Link>
            <button onClick={() => onDelete(_id)} className="btn2" id="btnDel">
              Delete
            </button>

            <div className="cmd-form">
              Search <input />
              <button>GO</button>
            </div>
          </div>

          {project ? (
            <div className="project_detail_admin">
              <div className="project_detail">
                <h2>
                  <strong>Project: </strong> {name}
                </h2>
                <p>
                  <strong>Date Created</strong> {startdate} <br />
                  <strong>Location:</strong> {location} <br />
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
              </div>
              <h4>Project Image</h4>
              <p>
                {images && images.length > 0 && images[0].url ? (
                  <img src={images[0].url} id="img_lrg" alt="No Image" />
                ) : (
                  <span className="has-error">No Image Set</span>
                )}

                <br />
              </p>
            </div>
          ) : (
            <p>NO Current project</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProjectDetail;
