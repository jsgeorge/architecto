import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../context/project-context";
import ProjectItem from "./item";
import { Link } from "react-router-dom";
export default function ProjectsList({ show, category, id }) {
  const [error, setError] = useState("");
  const { projects, setProjects } = useContext(ProjectContext);
  const { header, setHeader } = useState("");
  useEffect(() => {
    console.log("projects list show=", show);
    let limit = {};
    if (show && show == "latestprojects") limit = { limit: 3 };
    if (show && show == "gallery") limit = { limit: 3 };
    if (show && show == "allgallery") limit = { limit: 30 };
    if (show && show == "allprojects") {
      limit = { limit: 30 };
    }
    if (show && show == "featured") limit = { limit: 10 };
    if (!show) limit = { limit: 20 };
    let filters = [];
    console.log("ctgryid", category, id);
    const fetchData = async () => {
      if (!category && show != "featured") {
        try {
          const response = await axios
            .post("/projects/view", limit)
            .then((res) => {
              setProjects(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive projects. Netowrk error");
              console.log("Error could not retrive projects", err);
            });
        } catch (error) {
          setError("Error could not retrive projects. Network error");
          console.log("Error could not retrive projects", error);
        }
      } else if (!category && show == "featured") {
        filters = { filters: [{ featured: true }] };
        try {
          const response = await axios
            .post("/projects/view", filters)
            .then((res) => {
              setProjects(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive projects Network error");
              console.log(err);
            });
        } catch (error) {
          setError("Error could not retrive projects. Netwoerk error");
        }
      } else {
        filters = { filters: [{ category: id }] };
        try {
          const response = await axios
            .post("/projects/view", filters)
            .then((res) => {
              setProjects(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive projects Network error");
              console.log(err);
            });
        } catch (error) {
          setError("Error could not retrive projects. Netwoerk error");
        }
      }
    };
    fetchData();
  }, []);
  if (error) return <div className="has-error2">{error}</div>;

  return (
    <div className="projects-wrapper">
      {category ? (
        <h2> {category}</h2>
      ) : (
        <h2>{show == "allprojects" ? "All Projects" : null}</h2>
      )}
      <h2>{show == "featured" ? "Featured Projects" : null}</h2>
      {projects ? (
        <span>
          {projects.map((p) => (
            <ProjectItem key={p._id} project={p} show={show} />
          ))}
          <div className="section-cmds">
            {show == "latestprojects" ? (
              <Link to={`/listings/allprojects`} id="btnLink">
                Show More
              </Link>
            ) : null}
            {show == "gallery" ? (
              <Link to={`/listings/allgallery`} id="btnLink">
                Show More
              </Link>
            ) : null}
          </div>
        </span>
      ) : (
        <div className="no-items">
          <p>NO Current projects</p>
        </div>
      )}
    </div>
  );
}
