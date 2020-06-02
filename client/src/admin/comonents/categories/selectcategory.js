import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { CategoryContext } from "../../../context/category-context";
import classnames from "classnames";
const SelectCategories = ({
  projcategory,
  setProjcategory,
  editctgry,
  errors,
}) => {
  const { categories, setCategories } = useContext(CategoryContext);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios
          .get("/categories")
          .then((res) => {
            setCategories(res.data);
            // console.log("selcatgry res.data", res.data);
          })
          .catch((err) => {
            setError(
              "Error Cannot retrieve product categoryies. Network Error"
            );

            console.log(err);
          });
      } catch (err) {
        setError("Error Cannot retrieve product categoryies. Network Error");

        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setProjcategory(e.target.value);
  };
  //console.log("selectcategory editctgry", editctgry);
  if (!categories || error)
    return (
      <div className="form-group">
        <label> Category</label>
        <br />
        <span className="has-error">{error}</span>
      </div>
    );
  return (
    <div className={classnames("form-group", { "has-error": errors })}>
      {errors ? (
        <span className="help-block">{errors}</span>
      ) : (
        <label> Category</label>
      )}

      {categories ? (
        <select
          name="category"
          style={{ float: "left" }}
          id="category-input"
          onChange={handleChange}
        >
          <option value={0}>No Category selected</option>
          {/* <option value={1} selected>Option 1</option>
          <option value={2} >Option 2</option>
          <option vlaue={3}> Option 3</option> */}
          {categories &&
            categories.map((c) =>
              editctgry && c._id === editctgry._id ? (
                <option key={c._id} value={c._id} selected>
                  {c.name}
                </option>
              ) : (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              )
            )}
        </select>
      ) : (
        <span className="has-error">No categories setup or Error</span>
      )}
    </div>
  );
};

export default SelectCategories;
