import React, { Component } from "react";
// `Component` is a named export. Unlike `React` which is
// a default export.

// To create a named export in one of our files we write

// export statement as follows:
// export class Component { ... }
// export const Component = ...

// class Component { ... }
// export { Component }

// Ensure QuestionDetails is the same name as the React Element
// When importing a javascript file, you don't need to write the extension at the end, it's assumed.
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";
import aSingleQuestion from "./aSingleQuestion";
import { Question } from "../requests";

// To pass values into the props object, write them like html attributes in the React element tag. e.g. in <QuestionDetails />, write a bunch of html attributes.
// You must surround the values in {} braces, except strings.
class QuestionShowPage extends Component {
  
  // When writing your own constructor for React components, you must take `props` as an argument.
  constructor(props) {
    // You must also call the constructor of its super class, Component, with `super`.
    super(props);
    console.log(props);
    // For states, make sure you make copies and don't use old values.

    // We can use this state in the render method, instead of aSingleQuestion directly.
    this.state = {
      loading: true,
      question: null
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }
  
  deleteQuestion() {
    this.setState({
      question: null
    }) 
  }

  deleteAnswer(answerId) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== answerId)
      }
    });
  }

  componentDidMount() {
        // Components rendered by the <Route> component are passed
    // three props: history, location and match.

    // `match` holds property thats your URL's params.

      

    const id = this.props.match.params.id;
    Question.one(id)
      .then(q=>{
        console.log(q);

        this.setState({
          loading: false,
          question: q
        })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="QuestionShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!this.state.question) {
      return (
        <main className="QuestionShowPage">
          <h1>Question doesn't exist!</h1>
        </main>
      );
    }

    return (
      <main className="QuestionShowPage">
        <QuestionDetails
        {...this.state.question}
          // title={this.state.question.title}
          // body="Red, green, blue, magenta, yellow, etc."
          // view_count={101}
          // created_at={new Date().toLocaleDateString()}
          // updated_at={new Date().toLocaleDateString()}
        />
        <button onClick={()=>this.deleteQuestion()}>Delete</button>
        <h2
          style={{
            fontWeight: "300",
            color: "darkgreen"
          }}
        >
          Answers
        </h2>
        <AnswerList 
          onAnswerDeleteClick={this.deleteAnswer}
          answers={this.state.question.answers} 
        />
      </main>
    );
  }
}

export default QuestionShowPage;