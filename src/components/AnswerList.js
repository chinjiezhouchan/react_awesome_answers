import React from "react";
import aSingleQuestion from "./aSingleQuestion";
import AnswerDetails from "./AnswerDetails";

const AnswerList = (props) => {

  // const myNewFunc = id,hh,f => props.onAnswerDeleteClick(id);
  return (
  <main className="AnswerList">
    <ul>
      
      {
        // aSingleQuestion.answers
        props.answers
          .map(answer=>(
        //   <AnswerDetails
        //     id={answer.id}
        //     body={answer.body}
        //     author={answer.author}
        //     created_at={answer.created_at}
        // />
        // Use ... to take all properties of an object and pass them as props to a rendered React element.
        // In the line below, we take all answer properties (i.e. id, author, body, created_at) and we pass them as props of AnswerDetails.
        <AnswerDetails
          onDeleteClick={id=> props.onAnswerDeleteClick(id)}
          // onDeleteClick={mynewFunc}

          {...answer}
        
        />

      ))
      }
    </ul>
  
  </main>
)}

export default AnswerList;