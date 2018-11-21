import React, { Component } from "react";


class CurrentDateTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: new Date()
    }
  }

  componentDidMount() {
    // React calls this method the first time it renders this component in the DOM. Use it to fetch, add some eventListeners, etc.
    this.intervalId = setInterval(()=>{
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    // This method is called before the component is removed from the
    // page. Use it clean up setInterval, setTimeouts, event listeners, etc.
    clearInterval(this.intervalId);
  }
  render() {
    return <span>{this.state.dateTime.toLocaleString()}</span>;
  }
}

export default CurrentDateTime;