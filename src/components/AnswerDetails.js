import React from "react";

// Apparently you can call full_name on props.author. Perhaps the model or controller in the API already creates a full_name property in the object?

const AnswerDetails = (props) => (
  <div className="AnswerDetails">
    <li key={props.id}>
      <p>{props.body}</p>
      {/* <p>By {props.author.first_name}</p> */}

      <small>Created at {props.created_at}</small>
      <button onClick={()=> props.onDeleteClick(props.id)}>
        Delete
      </button>
    </li>
  </div>
);

export default AnswerDetails;