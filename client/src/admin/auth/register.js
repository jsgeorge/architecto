import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import axios from "axios";

const AdminRegister = ({ showLogin, setShowLogin, showReg, setShowReg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [errMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);
  //const RegisterUser = () => {};

  useEffect(() => {});
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowReg(false);
  };
  const createUser = async () => {
    let newUser = {
      email: email,
      password: password,
      username: username,
      lastname: lastname,
      name: name,
      role: 1,
    };
    console.log(newUser);
    try {
      await axios
        .post("/users", newUser)
        .then((res) => {
          setShowLogin(true);
          setShowReg(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async () => {
    await createUser();
  };
  if (redirect) {
    return <Redirect to="/auth/signin" />;
  }

  return (
    <div className="form-wrapper">
      <h3>Admin User Register</h3>
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          aria-label="Enter your Username"
          data-testid="add-task-content"
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {errMsg ? <div className="errMsgFont">Login Error. {errMsg}</div> : null}
      <div className="form-group">
        <label> Email</label>
        <input
          className="form-control"
          aria-label="Enter your task"
          data-testid="add-task-content"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label> Password</label>
        <input
          className="form-control"
          aria-label="Enter your task"
          data-testid="add-task-content"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label> First Name</label>
        <input
          className="form-control"
          aria-label="Enter your Name"
          data-testid="add-task-content"
          type="text"
          value={name}
          placeholder="First Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {errMsg ? <div className="errMsgFont">Login Error. {errMsg}</div> : null}
      <div className="form-group">
        <label> Last Name</label>
        <input
          className="form-control"
          aria-label="Enter your Last Name"
          data-testid="add-task-content"
          type="text"
          value={lastname}
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      {errMsg ? <div className="errMsgFont">Login Error. {errMsg}</div> : null}
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-testid="add-shout"
        onClick={() => onSubmit()}
      >
        Submit
      </button>
      <button onClick={() => handleShowLogin()}>Login</button>
    </div>
  );
};

export default AdminRegister;
