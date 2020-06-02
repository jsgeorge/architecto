import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context/project-context";

export default function Detail({ id }) {
  const [error, setError] = useState("");
  const [project, setProject] = useState({}); //useContext(ProjectContext);
  const { header, setHeader } = useState("");

  useEffect(() => {
    let filters = [];
    console.log("detail", id);
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/projects/article?id=${id}`)
          .then((res) => {
            setProject(res.data[0]);
            console.log(res.data);
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
  if (error) {
    return <div className="projects-wrapper">{error}</div>;
  }
  const {
    _id,
    name,
    category,
    property,
    images,
    headline,
    description,
    location,
    area,
    type,
    cost,
    startdate,
  } = project;

  return (
    <div className="detail-wrapper">
      {project ? (
        <span>
          <h2>
            {name} <br /> <span className="datefont">{startdate}</span>
          </h2>
          {images && images.length > 0 && images[0].url ? (
            <a href={`${images[0].url}`}>
              {" "}
              <img src={images[0].url} id="img_lrg" />
            </a>
          ) : null}
          <strong>Location:</strong> {location} <br />
          <strong>Category:</strong> <br />
          <strong>Property Type: </strong> <br />
          <strong>Total Area</strong> {area} sq ft
          <br />
          <strong>Cost: </strong>${cost} <br />
          <br />
          {headline}
          <div className="row">
            <p>{description}</p>
          </div>
        </span>
      ) : (
        <p>NO Current project</p>
      )}
    </div>
  );
}
