import React, { useState, useEffect } from "react";
import Teachers from "./Teachers";
import TeacherCard from "./TeacherCard";

function TeacherContainer({ teachers }) {
  console.log(teachers);
  return (
    <div className="teacher-container">
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <TeacherCard teacher={teacher} />
        </div>
      ))}
    </div>
  );
}

export default TeacherContainer;
