import React, { Component } from "react";
import { Link } from "react-router-dom";
import bunchOfQuestions from "./bunchOfQuestions";
import QuestionForm from "./QuestionForm";
import { Question } from "../requests";

class QuestionIndexPage extends Component{ 
  constructor(props) {
    super(props);
  
    this.state = {
      // Use an array because bunchOfQuestions is an array. Instead if it's an object use curly braces.
      loading: true, 
      questions: []
      };

      // When you use .bind(), you can permanently set the value of "this" to the first argument of the bind method, for the function.
      // Putting it here in the constructor makes `this` the instance of the component.
    this.deleteQuestion = this.deleteQuestion.bind(this);
    // We often do this in React for methods that we pass as callbacks to props or higher-order functions.
  }
  
  componentDidMount() {
    Question.all().then(questions => {
      this.setState({
        questions: questions,
        loading: false
      });
    });
  }

    deleteQuestion(questionId) {
      console.log("Delete button clicked!")

      // To do ANY AND ALL state changes in a class-based component, use the `setState` method. 
        // e.g. DO NOT DO this.state.something. React cannot tell the state changed.
      // This is asynchronous. It groups together all changes into one state change, and React decides on the best time for the browser to do them. Changing the state implies a re-render, after all.
      // You give this function an object in the first argument, whose key-value pairs merge and replace those in the current state.
      this.setState({
        questions: this.state.questions.filter(q => q.id !== questionId)
      });
    }

    // createQuestion(params) {
    //   this.setState({
    //     questions: [
    //       {
    //         id: Math.max(...this.state.questions.map(q => q.id)) + 1,
    //         // title: params.title
    //         // body: params.body
    //         // Spread syntax takes the elements or keys of an object or array, and turns them into variables outside the object or array itself.
    //         ...params
    //       }
    //     ].concat(this.state.questions)
    //   })
    // }

  render () { 
    if (this.state.loading) {
      return (
        <main className="QuestionIndexPage">
          <h1>Question Index</h1>
          <h2>Loading...</h2>
        </main>
      );
    }
    return (
    <main className="QuestionIndexPage">
      <h1>Question Index Page</h1>
      {/* <QuestionForm onSubmit={this.createQuestion}
      /> */}
      <ul>
        {this.state.questions.map(question => (
          <li key={question.id}>
            <Link to={`/questions/${question.id}`}>{question.title}</Link>
            <br />
            <small>
              <em>{question.id}</em>
            </small>
            <button
              onClick={()=>this.deleteQuestion(question.id)}
            >
              Delete  
            </button>
          </li>
        ))
        }
      </ul>
    </main>
    );
  }
}

export default QuestionIndexPage;

