import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

const ProjectItem = ({ show, project }) => {
  const displayDate = (d) => {
    return Moment(d).format("YYYY");
  };

  const renderCardImage = (images, id) => {
    if (images && images.length > 0) return <img src={images[0].url} id={id} />;
  };
  const {
    _id,
    name,
    category,
    images,
    description,
    location,
    headline,
    type,
    cost,
    area,
    startdate,
  } = project;
  if (show) {
    console.log("show", show);
  }
  if (show == "gallery")
    return (
      <div className="gallery_pod">
        {/* {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_gallery" />
        ) : null} */}
        {renderCardImage(images, "img_gallery")}
      </div>
    );
  if (show == "allgallery")
    return (
      <div className="all_gallery_pod">
        {/* {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_gallery" />
        ) : null} */}
        {renderCardImage(images, "img_gallery")}
      </div>
    );
  if (show == "latestprojects")
    return (
      <div className="long_pod">
        {/* <Link to={`/projects/${_id}/detail`}> */}
        <Link to={`/model/${_id}/`}>
          <p>
            {/* {images && images.length > 0 && images[0].url ? (
              <img src={images[0].url} id="img_small" />
            ) : null} */}
            {renderCardImage(images, "img_small")}
            <span>
              {/* <span className="project-name">{name}</span>
            <br /> */}
              <span className="project-name">{name}</span> <br />
              <span className="propertyfont">{headline}</span>
            </span>
          </p>
        </Link>
      </div>
    );

  return (
    <div className="long_pod2">
      {/* <Link to={`/projects/${_id}/detail`}> */}
      <Link to={`/model/${_id}/`}>
        <p>
          {/* {images && images.length > 0 && images[0].url ? (
            <img src={images[0].url} id="img_med" />
          ) : null} */}
          {renderCardImage(images, "img_med")}
          <span>
            {/* <span className="project-name">{name}</span>
            <br /> */}
            <span className="project-name">{name}</span> <br />
            <span className="propertyfont">{headline}</span>
          </span>
        </p>
      </Link>
    </div>
  );
};
export default ProjectItem;
