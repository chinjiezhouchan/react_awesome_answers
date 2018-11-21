import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import { Question, Session } from "../requests";

class QuestionNewPage extends Component {
  
  // We need to bind the createQuestion method, so we will need the constructor.
  constructor(props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
   
      Question.create(params).then(question => {
        if (!question.errors) {
          this.props.history.push(`/questions/${question.id}`);
        }
      });
    
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h1>New Question</h1>
        <QuestionForm onSubmit={this.createQuestion}/>
      </main>
    );
  }
}
export default QuestionNewPage;