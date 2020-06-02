import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { ServicesContext } from "../../context/services-context";

const ServicesList = ({ show }) => {
  // const { services, setServices } = useContext(ServicesContext);
  const [services, setServices] = useState([
    {
      _id: "1",
      name: "Architecture Design & Blueprint Planning",
      desc:
        "Major and minor design blueprints from intial consultation to final building design",
    },
    {
      _id: "2",
      name: "Contingency Planning & space saving cotrol",
      desc:
        "Major and minor design blueprints from intial consultation to final building design",
    },
    {
      _id: "3",
      name: "Building Retrofit & Earthquake proofing",
      desc:
        "Major and minor design blueprints from intial consultation to final building design",
    },
    {
      _id: "4",
      name: "Landscape design and Implementatioin",
      desc:
        "Major and minor design blueprints from intial consultation to final building design",
    },
  ]);
  useEffect(() => {
    // const fetchData = async () => {
    //   // try {
    //   const response = await axios
    //     .get("/services")
    //     .then((res) => {
    //       setServices(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    //fetchData();
  }, []);
  return (
    <div>
      {show == "list" ? (
        <ul id="mainNav">
          {services.map((c) => (
            <li key={c._id}>
              <Link to={`/listings/allServices/${c.name}/${c._id}`} key={c._id}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {services.map((c) => (
            <div key={c._id} className="long_pod" id="service">
              {c.name}
              <br />
              <span className="propertyfont">{c.desc}</span> <br />
              <Link
                id="btnLink"
                to={`/listings/allServices/${c.name}/${c._id}`}
                key={c._id}
              >
                Show More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesList;
