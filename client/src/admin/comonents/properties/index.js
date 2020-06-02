import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PropertyContext } from "../../../context/property-context";
//import AdminpropertyForm from "../properties/form";

export default function AdminPropertiesList() {
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const { properties, setProperties } = useContext(PropertyContext);
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
  });

  const fetchData = async () => {
    // try {
    await axios
      .get("/properties")
      .then((res) => {
        setProperties(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Error cannont retrieve project properties.Network propblem");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleEdit = (property) => {
    if (editing != property._id) {
      setEdited(property);
      setEditing(property._id);
    } else {
      console.log("id", property._id, "edited", edited);
      axios
        .post(`/properties/update?id=${property._id}`, edited)
        .then((res) => {
          //setproperties(res.data);
          setEditing(0);
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteproperty = (id) => {
    try {
      axios
        .delete(`/properties?id=${id}`)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setFormError("Could delete document from file, Unknown error");
        });
    } catch (error) {
      setFormError("Could not delete document from file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  if (error) return <div className="projects-wrapper">{error}</div>;

  return (
    <div className="projects-wrapper">
      {properties ? (
        <div>
          {formError ? <div className="has-error">{formError}</div> : null}

          <div>
            {properties.map((p) => {
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
                    <>
                      {p.name} {p.description}
                    </>
                  )}
                  <span style={{ float: "right" }}>
                    <button onClick={() => toggleEdit(p)}>
                      {editing === p._id ? "Submit" : "Edit"}{" "}
                    </button>

                    <button onClick={() => deleteproperty(p._id)}>
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>NO Current properties</p>
      )}
    </div>
  );
}
