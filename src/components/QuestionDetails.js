// This comes from the react package in node.
// The translated version (React.createElement() calls) of the "tags" below uses React. It will give an error if not.
import React from "react";

// • A React Component is a function that returns a React element.
// • A React element is the object returned by the function React.createElement()
// • It looks like a very small DOM node with a tag, and nothing else.
//    ◇ Compare: the browser DOM nodes have hundreds of properties. These just have a few, enough for React to put them on the page.

// const QuestionDetails = () => (
//   <div className="QuestionDetails">
//     <h2>
//     What is your favorite color?</h2>
//       <p>Red, green, blue, magenta, yellow, etc.</p>
//       <p>
//         <small>Seen 10 time(s)</small>
//         •
//         <small>Last edited 2 hours ago</small>
//       </p>
//   </div>
// );
// The <div> is a react element because it's returned by the function React.createElement();
// QuestionDetails is a React component, because it's a function returning the 

// You can execute a JavaScript expression inside of JSX, using curly brackets {...}. The expression must return must return either a string, or a React element.

const QuestionDetails = (props) => (
  <div className="QuestionDetails">
    {/* First set of curly braces is for executing the expression. Second set is for the object.  */}
    <h2 style={{
      color: "maroon",
      fontWeight: "300"
    }}
    >{props.title}</h2>
      <p>{props.body}</p>
      <p>
        <small>Seen {props.view_count} time(s)</small>
        •
        <small>Created {props.created_at}</small>
        •
        <small>Last edited {props.updated_at}</small>
      </p>
  </div>
);

export default QuestionDetails;