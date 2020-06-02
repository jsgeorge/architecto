import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { PropertyContext } from "../../../context/property-context";
import classnames from "classnames";
const SelectProperties = ({
  projProperty,
  setProjproperty,
  editprop,
  errors,
}) => {
  const { properties, setProperties } = useContext(PropertyContext);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios
          .get("/properties")
          .then((res) => {
            setProperties(res.data);
            //console.log("selprops res.data", res.data);
          })
          .catch((err) => {
            console.log("error in selectproperties", err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProperties();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setProjproperty(e.target.value);
  };
  //console.log("selectproperty-  editprop", editprop);

  return (
    <div className={classnames("form-group", { "has-error": errors })}>
      {errors ? (
        <span className="help-block">{errors}</span>
      ) : (
        <label> Property</label>
      )}

      {properties ? (
        <select name="property" id="property-input" onChange={handleChange}>
          <option className="has-error" value={0}>
            No property selected
          </option>
          {properties &&
            properties.map((c) =>
              editprop && c._id === editprop ? (
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
        <span className="has-error">No Properties setup or error</span>
      )}
    </div>
  );
};

export default SelectProperties;
