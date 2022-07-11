import React, { useState, useEffect } from "react";
import TeacherContainer from "./TeacherContainer";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/teachers", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <h1>TEACHERS</h1>
      <TeacherContainer teachers={teachers} />
    </div>
  );
}

export default Teachers;
