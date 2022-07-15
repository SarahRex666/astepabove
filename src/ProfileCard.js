import React, { useState, useEffect } from "react";
import ProfileDeleteCard from "./ProfileDeleteCard";

function ProfileCard({ currentUser, setCurrentUser }) {
  const [classes, setClasses] = useState(currentUser.dance_classes);
  const {
    id,
    username,
    admin,
    first_name,
    last_name,
    address,
    phone,
    dance_classes,
  } = currentUser;
  useEffect(() => {
    fetch(`http://localhost:3000/users/${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => setClasses(data.dance_classes));
  }, [classes]);
  return (
    <div>
      <br></br>
      <h1>Welcome back, {currentUser.first_name}!</h1>
      <h3>Classes:</h3>
      {classes.map((danceClass) => (
        <ProfileDeleteCard currentUser={currentUser} danceClass={danceClass} />
      ))}
    </div>
  );
}

export default ProfileCard;
