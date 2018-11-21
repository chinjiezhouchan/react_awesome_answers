import React from "react";

// Don't use regular links. Use those provided by react-router-dom.
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {

  const { currentUser } = props;

  const handleSignOutClick = event => {
    event.preventDefault();
    if (typeof this.props.onSignOut === "function") {
      // Activates the callback passed into the prop.
      // Whenever you have a function-based component, props is an argument, not a key as in a class object based component.
      props.onSignOut();
    }
  }

  return(
  <nav className="NavBar">
    <NavLink exact to="/">Welcome</NavLink>
    <NavLink exact to="/questions">Questions</NavLink>
    <NavLink exact to="/questions/new">New Question</NavLink>
    {currentUser ? (
      //Empty tags `<>` and `</>` are called React Fragments. They allow you to return multiple React elements at once in your expressions.
      // It will not work in all situations, but in most.
      // In ReactDOM it won't work.
      <>
      <span> {currentUser.full_name}</span>
      <a href="#not-used" onClick={() => console.log("Sign Out clicked")}>Sign Out</a>
      </> 
    ) : (
    <NavLink exact to="/session/new">
      Sign In
    </NavLink>
    )}
  </nav> 
  )
}

export default NavBar;