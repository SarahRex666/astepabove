import React from "react";

function TeacherCard({ teacher }) {
  const { name, bio } = teacher;
  return (
    <div>
      <h4>{name}</h4>
      <h5>{bio}</h5>
    </div>
  );
}

export default TeacherCard;
