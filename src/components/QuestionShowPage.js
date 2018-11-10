import React from "react";

// Ensure QuestionDetails is the same name as the React Element
// When importing a javascript file, you don't need to write the extension at the end, it's assumed.
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";
import aSingleQuestion from "./aSingleQuestion";

// To pass values into the props object, write them like html attributes in the React element tag. e.g. in <QuestionDetails />, write a bunch of html attributes.
// You must surround the values in {} braces, except strings.
const QuestionShowPage = () => (
  <main className="QuestionShowPage">
    <QuestionDetails 
      title="What is your favorite color?"
      body="Red, green, blue"
      view_count={101}
      created_at={new Date().toLocaleDateString()}
      updated_at={new Date().toLocaleDateString()}
    />
    <h2
    style={{
      fontWeight: "300",
      color: "darkgreen"
    }}
    >Answers</h2>
    {/* <AnswerDetails 
      body="I don't know! Silver? Red?"
      user="Derek"
      created_at={new Date().toDateString()}
    /> */}
    <AnswerList answers={aSingleQuestion.answers} />
  </main>
)

export default QuestionShowPage;