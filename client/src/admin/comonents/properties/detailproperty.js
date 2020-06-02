import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PropertyContext } from "../../../context/property-context";

const DetailProperty = ({ id }) => {
  const [error, setError] = useState("");
  const [property, setProperty] = useState(""); //useContext(ProjectContext);
 
  useEffect(() => {
    let filters = [];
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/properties/name?id=${id}`)
          .then((res) => {
            setProperty(res.data[0].name);
                })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent Property");
      }
    };
    fetchData();
  }, []);


  return (
    <span>
      {property ?
        <span>
          {property} 
          </span>
      : 
       <span className="has-error">
      Not found</span>
    }  
    </span>
  )
};

export default DetailProperty;
