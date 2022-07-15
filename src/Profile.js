import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

function Profile({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then(setFormState(""));
  };

  return (
    <div>
      <h1>PROFILE</h1>
      <ProfileCard setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <br></br>
      <br></br>
      <h3>Edit your personal info:</h3>
      <form class="form-control-plaintext" onSubmit={handleSubmit}>
        <input
          type="text"
          id="first_name"
          defaultValue={currentUser.first_name}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          id="last_name"
          defaultValue={currentUser.last_name}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          id="address"
          defaultValue={currentUser.address}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          id="phone"
          defaultValue={currentUser.phone}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          id="username"
          defaultValue={currentUser.username}
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
        <br></br>
        <input
          class="btn btn-secondary"
          type="submit"
          id="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Profile;
