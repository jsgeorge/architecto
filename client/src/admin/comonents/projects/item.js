import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import DetailCategory from "../categories/detailcategory";
import DetailProperty from "../properties/detailproperty";

const AdminProjectItem = ({ show, project }) => {
  const displayDate = (d) => {
    return Moment(d).format("YYYY");
  };

  const renderCardImage = (images) => {
    if (images.length > 0) return images[0].url; //images[0].url;
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
    property,
    city,
    state,
    startdate,
  } = project;

  if (show == "gallery")
    return (
      <div className="gallery_pod">
        {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_gallery" />
        ) : null}
      </div>
    );
  if (show == "allgallery")
    return (
      <div className="all_gallery_pod">
        {images && images.length > 0 && images[0].url ? (
          <a href={`${images[0].url}`}>
            <img src={images[0].url} id="img_gallery_lg" />
          </a>
        ) : null}
      </div>
    );
  if (show == "latestprojects")
    return (
      <div className="long_pod_admin">
        {/* <Link to={`/projects/${_id}/detail`}> */}
        <Link to={`/admin/projects/${_id}/detail`}>
          <p>
            <span>
              <span className="project-name">
                <stong>{name}</stong>
              </span>
              <span className="project-name">{location}</span> <br />
              <span className="propertyfont">
                {headline ? (
                  headline
                ) : (
                  <span className="has-error">missing</span>
                )}
              </span>
            </span>
          </p>
        </Link>
      </div>
    );

  return (
    <div className="long_pod_admin">
      <div className="row">
        <div className="col-md-4">{_id}</div>

        <div className="col-md-3">
          {name}
          <br />
          {location != name ? location : null}
        </div>
        <div className="col-md-2">
          {category ? (
            <span>
              <DetailCategory id={category} />
            </span>
          ) : (
            <span className="has-error">Not selected</span>
          )}
        </div>
        <div className="col-md-2">
          {property ? (
            <span>
              <DetailProperty id={property} />
            </span>
          ) : (
            <span className="has-error">Not selected</span>
          )}
        </div>
        <div className="col-md-3 paddiing">
          {images && images.length > 0 && images[0].url ? (
            <img src={images[0].url} id="img_small" />
          ) : (
            "no image"
          )}
        </div>
        <div className="col-md-2">
          <Link to={`/admin/projects/${_id}/detail`} className="btnLink">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminProjectItem;
