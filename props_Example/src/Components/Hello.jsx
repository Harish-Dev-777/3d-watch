import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1>Student Name: {props.stu.name}</h1>
      <h1>Student Age: {props.stu.age}</h1>
      <h1>Student Loc: {props.stu.loc}</h1>
      <h1>Student Grade: {props.stu.grade}</h1>
    </div>
  );
};

export default Hello;
