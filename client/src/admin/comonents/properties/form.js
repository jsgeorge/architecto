import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AdminPropertyForm = ({ match }) => {
  let id = match.params.id;
  const [edited, setEdited] = useState({
    name: "",
  });
  const [error, setError] = useState("");
  const fetchData = async () => {
    // try {
    await axios
      .get(`/properties/id?id=${id}`)
      .then((res) => {
        setEdited(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {
        setError("Error cannont retrieve project properties.Network propblem");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h3>Edit Property</h3>
      <input
        name="name"
        type="text"
        value={edited.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default AdminPropertyForm;
