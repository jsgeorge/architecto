import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "../../../context/category-context";
//import AdminCategoryForm from "../categories/form";

export default function AdminCategoriesList() {
  const [error, setError] = useState("");
  const { categories, setCategories } = useContext(CategoryContext);
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
  });

  const fetchData = async () => {
    // try {
    await axios
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Error cannont retrieve project categories.Network propblem");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleEdit = (category) => {
    if (editing != category._id) {
      setEdited(category);
      setEditing(category._id);
    } else {
      console.log("id", category._id, "edited", edited);
      axios
        .post(`/categories/update?id=${category._id}`, edited)
        .then((res) => {
          //setCategories(res.data);
          setEditing(0);
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteCategory = (id) => {};

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  if (error) return <div className="projects-wrapper">{error}</div>;

  return (
    <div className="projects-wrapper">
      {categories ? (
        <div>
          <div>
            {categories.map((p) => {
              return (
                <div className="long_pod_admin2" key={p._id}>
                  {editing === p._id ? (
                    <input
                      type="text"
                      name="name"
                      value={edited.name}
                      onChange={handleChange}
                    />
                  ) : (
                    <>{p.name}</>
                  )}
                  <span style={{ float: "right" }}>
                    <button onClick={() => toggleEdit(p)}>
                      {editing === p._id ? "Submit" : "Edit"}{" "}
                    </button>

                    <button onClick={() => deleteCategory(p._id)}>
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>NO Current categories</p>
      )}
    </div>
  );
}
