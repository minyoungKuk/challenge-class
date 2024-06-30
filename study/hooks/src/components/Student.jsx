import React from "react";

const Student = ({ student }) => {
  return (
    <div>
      <h5>{student.name}</h5>
      <div>{student.age}</div>
      <div>{student.gender}</div>
    </div>
  );
};

export default React.memo(Student);
