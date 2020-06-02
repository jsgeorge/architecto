import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../../context/project-context";
import AdminProjectItem from "./item";

export default function AdminProjectsList({ show, category, id, srchstr }) {
  const [error, setError] = useState("");
  const { projects, setProjects } = useContext(ProjectContext);
  const { header, setHeader } = useState("");
  useEffect(() => {
    console.log("projects index page", show, srchstr);
    let limit = { limit: 5000 };

    let filters = [];
    const fetchData = async () => {
      // try {
      if (srchstr) {
        filters = { filters: [{ name: srchstr }] };
        const response = await axios
          .post("/projects/view", filters)
          .then((res) => {
            setProjects(res.data.articles);
          })
          .catch((err) => {
            setError("Error cannot show projects, Network Error");
            console.log(err);
          });
      } else if (category) {
        filters = { filters: [{ category: id }] };
        const response = await axios
          .post("/projects/view", filters)
          .then((res) => {
            setProjects(res.data.articles);
          })
          .catch((err) => {
            setError("Error cannot show projects, Network Error");
            console.log(err);
          });
      } else {
        const response = await axios
          .post("/projects/view", limit)
          .then((res) => {
            setProjects(res.data.articles);
          })
          .catch((err) => {
            setError("Error cannot show projects, Network Error");
            console.log(err);
          });
      }
    };
    fetchData();
  }, []);
  if (error)
    return (
      <div className="has-error">{error} Contact you system asministrator</div>
    );
  return (
    <div className="projects-wrapper">
      {/* {category ? <h2> {category}</h2> : <h2> Recent Projects</h2>} */}
      <div className="th">
        <div className="row">
          <div className="col-md-4">#ID</div>
          <div className="col-md-3"> Project</div>
          <div className="col-md-2">Category</div>
          <div className="col-md-2">Propery</div>
        </div>
      </div>
      {projects ? (
        projects.map((p) => (
          <AdminProjectItem key={p._id} project={p} show={show} />
        ))
      ) : (
        <p>NO Current projects</p>
      )}
    </div>
  );
}
