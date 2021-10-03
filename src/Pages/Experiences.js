import React from "react";
import PageHOC from "./PageHOC";

export default function Experiences(props) {
  const experiences = props.experiences.map(function (exp) {
    return (
      <div key={exp.id} className="col-8 p-3 mb-5">
        <h4 className="mb-3">{exp.position}</h4>
        <div className="container pl-4">
          <h5>
            {exp.company} - <small>({exp.active})</small>
          </h5>
          <ul>
            {exp.responsibilities.map((resp) => {
              return <li>{resp}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
  return <PageHOC heading="experiences">{experiences}</PageHOC>;
}
