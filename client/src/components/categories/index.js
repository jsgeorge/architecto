import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/category-context";

const Categories = () => {
  const [error, setError] = useState("");
  const { categories, setCategories } = useContext(CategoryContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("/properties")
          .then((res) => {
            setCategories(res.data);
          })
          .catch((err) => {
            setError("Error. could not retrieve categories. Network error");
            console.log(err);
          });
      } catch (err) {
        setError("Error. could not retrieve categories. Network error");
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error ? <div className="has-error">{error}</div> : null}
      {categories ? (
        <ul id="mainNav">
          <li>
            <Link to={`/listings/featured`}>Featured</Link>
          </li>
          {categories.map((c) => (
            <li>
              <Link to={`/listings/allprojects/${c.name}/${c._id}`} key={c._id}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-items">No current categeories</p>
      )}
    </div>
  );
};

export default Categories;
