import React from "react";
import moment from "moment";
import ReactDOM from "react-dom";

import App from "./App";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    //const what = "";
  }
  mySubmitHandler = event => {
    const element = document.getElementById("result");
    setInterval(() => {
      const time = moment(this.state.username, "h:mm:ss a").fromNow();
      element.textContent = time;
      console.log(element);
    }, 1000);
    event.preventDefault();
  };
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1> time entered is{this.state.username}</h1>
        <p>Enter time and submit:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" />
        <p id="result" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
