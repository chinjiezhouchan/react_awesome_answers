import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User, Session } from "../requests";
import AuthRoute from "./AuthRoute";

import NavBar from "./NavBar"

import QuestionNewPage from "./QuestionNewPage";
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import CurrentDateTime from "./CurrentDateTime";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";

// The word `exact` stops the following:
  // Navigating to /questions will also render /questions/new, as that matches to React.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  // Notice that we design these functions to 1) do fetches to the backend, then 2) Add the info the state.
  destroySession() {
    Session.destroy()
      .then(()=>{
        this.setState({ currentUser: null });
      })
  }

  // We want to reuse this code, both when the component mounts, and on signing in.
  getUser() {
    User.current().then(currentUser => {
      if (currentUser.id) {
        // When creating an object, you can easily create a property where its name is the same as a variable assigned to it, by only writing the name of the variable inside the object's braces.
        this.setState({ currentUser, loading: false });
      }
      this.setState({ loading: false })
    });
  }

  componentDidMount() {
    // Without `this`, it would try to use the window object.
    this.getUser();
  }
  

  render () {

    const { currentUser } = this.state;

    if (this.state.loading) {
      return( 
      <div className="App">
        <h1>Loading..</h1>
      </div>
      )
    }
    return(
    <BrowserRouter>
      <div className="App">
        {/* <CurrentDateTime /> */}
        <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
        <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/session/new" exact render={(routeProps)=><SignInPage {...routeProps}
        onSignIn={this.getUser} />} />
        <AuthRoute
          isAuth={currentUser}
              path="/questions/new"
              exact
              component={QuestionNewPage}
            />
        <Route path="/questions/new" exact component={QuestionNewPage} />
        <Route path="/questions/:id" exact={true} component={QuestionShowPage} />
        <Route path="/questions" exact component={QuestionIndexPage} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;