import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignIn({ setCurrentUser }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => setCurrentUser(newUser))
      .then(navigate("/"));
  };

  return (
    <form class="container" onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <input
        type="text"
        id="username"
        placeholder="User Name"
        value={formState.username}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        id="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleChange}
      />
      <br></br>
      <input type="submit" id="submit" value="Submit" />
    </form>
  );
}

export default SignIn;
