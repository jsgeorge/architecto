import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "../../../context/category-context";

const DetailCategory = ({ id }) => {
  const [error, setError] = useState("");
  const [category, setCategory] = useState(""); //useContext(ProjectContext);
 
  useEffect(() => {
    let filters = [];
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/categories/name?id=${id}`)
          .then((res) => {
            setCategory(res.data[0].name);
           
                })
          .catch((err) => {

            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent category");
      }
    };
    fetchData();
  }, []);


  return (
    <span>
      {category ?
        <span>
          {category} 
          </span>
      : 
        <span className="has-error">
       Not found</span>
    }  
    </span>
  )
};

export default DetailCategory;
