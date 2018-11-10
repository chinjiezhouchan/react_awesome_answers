import React from "react";

const AnswerDetails = (props) => (
  <div className="AnswerDetails">
    <li key={props.id}>
      <p>{props.body}</p>
      {/* <p>By {props.author.first_name}</p> */}

      <small>Created at {props.created_at}</small>
    </li>
  </div>
);

export default AnswerDetails;