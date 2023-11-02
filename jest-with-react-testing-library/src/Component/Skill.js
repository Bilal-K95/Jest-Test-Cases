import React from "react";

export default function Skill(props) {
  return (
    <>
      <div>Skill</div>
      <ul>
        {props.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
}
