import React, { Component } from "react";
import "./App.css";
import { Button, Container, Header } from "semantic-ui-react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

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
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Contact List</Header>
        <Button circular size="tiny" onClick={this.handleClick}>
          my button
        </Button>

        <ContactForm />

        <Contacts contactsProp={this.state.contactsList} />
      </Container>
    );
  }
}

export default App;
