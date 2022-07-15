import React, { useState, useEffect } from "react";

function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((r) => r.json())
      .then((newUser) => setUser(newUser));
  };

  return (
    <form class="container" onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <input
        type="text"
        id="first_name"
        placeholder="First Name"
        value={formState.first_name}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        id="last_name"
        placeholder="Last Name"
        value={formState.last_name}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        id="address"
        placeholder="Address"
        value={formState.address}
        onChange={handleChange}
      />
      <br></br>
      <input
        type="text"
        id="phone"
        placeholder="Phone"
        value={formState.phone}
        onChange={handleChange}
      />
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

export default SignUp;
