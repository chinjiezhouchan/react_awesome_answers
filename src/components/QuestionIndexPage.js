import React from "react";
import bunchOfQuestions from "./bunchOfQuestions";

const QuestionIndexPage = () => (
  <main className="QuestionIndexPage">
    <h1>Question Index Page</h1>
    <ul>
      {bunchOfQuestions.map(question => (
        <li key={question.id}>
          <a href="#">{question.title}</a>
          <br />
          <small>
            <em>{question.id}</em>
          </small>
        
        </li>
      ))}
    </ul>
  </main>
);

export default QuestionIndexPage;

