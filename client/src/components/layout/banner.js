import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProjectContext } from "../../context/project-context";

const Banner = () => {
  const [error, setError] = useState("");
  const { projects, setProjects } = useContext(ProjectContext);

  useEffect(() => {
    let limit = { limit: 5 };
    let filters = [];
    const fetchData = async () => {
      filters = { filters: [{ featured: true }] };
      try {
        const response = await axios
          .post("/projects/view", filters)
          .then((res) => {
            console.log(res.data.articles);
            setProjects(res.data.articles);
          })
          .catch((err) => {
            setError("Error could not retrive projects Network error");
            console.log(err);
          });
      } catch (error) {
        setError("Error could not retrive projects. Netwoerk error");
      }
    };

    fetchData();
  }, []);
  if (error || !projects)
    return <div className="banner-wrapper shadedbkd"></div>;
  if (projects.length > 0) console.log(projects[0].images[0].url);
  return (
    <div className="banner-wrapper shadedbkd">
      <div className="full-screen-app_div">
        <div className="slider-wrapper theme-default">
          <div className="ribbon"></div>
          <div id="slider" className="nivoSlider">
            {/* <img
              src="http://res.cloudinary.com/dvh3c9md5/image/upload/v1590951278/1590951276910.jpg"
              alt=""
              name="app1"
              id="app1"
              data-transition="fade"
            /> */}

            {/* {projects.map((p) =>
              p.images.length > 0 ? (
                <img
                  src={p.images[0].url}
                  key={p._id}
                  name="app1"
                  id="app1"
                  alt=""
                  data-transition="fade"
                />
              ) : null
            )} */}

            <img
              src="../images/carousel/img1.jpg"
              alt=""
              name="app1"
              id="app1"
              data-transition="fade"
            />
            <img
              src="../images/carousel/img2.jpg"
              alt=""
              data-transition="fade"
            />
            <img
              src="../images/carousel/img3.jpg"
              alt=""
              data-transition="fade"
            />
            <img
              src="../images/carousel/img4.jpg"
              alt=""
              data-transition="fade"
            />
            <img
              src="../images/carousel/img5.jpg"
              alt=""
              data-transition="fade"
            />

            {/* end slider */}
          </div>
        </div>{" "}
        {/* end slider-wrapper theme-default */}
      </div>
    </div>
  );
};

export default Banner;
