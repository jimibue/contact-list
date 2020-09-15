import React, { Component } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";
import Contacts from "./Contacts";

class App extends Component {
  state = {
    contactsList: [
      { id: 1, name: "George", phone: "123-345-123" },
      { id: 2, name: "Sally", phone: "123-345-123" },
      { id: 3, name: "Bob", phone: "123-345-123" },
    ],
  };
  handleClick = () => {
    console.log(this);
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <Button circular size="tiny" onClick={this.handleClick}>
          my button
        </Button>

        <Contacts contactsProp={this.state.contactsList} />
      </div>
    );
  }
}

export default App;
