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
    showForm: true,
    showEdit: false,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addContact = (contact) => {
    console.log(contact);
    const newContact = { ...contact, id: Math.random() + "" };
    this.setState({
      contactsList: [newContact, ...this.state.contactsList],
    });
  };
  render() {
    const { showForm, contactsList, showEdit } = this.state;
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Contact List</Header>
        <Button circular size="tiny" onClick={this.toggleForm}>
          {showForm ? "hide" : "show"}
        </Button>

        {showForm && <ContactForm addContactMethodProp={this.addContact} />}

        <Contacts contactsProp={contactsList} />
      </Container>
    );
  }
}

export default App;

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
    showForm: true,
    showEdit: false,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  handleEdit = (id, value, field) => {
    const updateContacts = this.state.contactsList.map((contact) => {
      if (contact.id === id) {
        debugger;
        return { ...contact, [field]: value };
      }
      return contact;
    });
    this.setState({
      contactsList: updateContacts,
    });
  };

  addContact = (contact) => {
    console.log(contact);
    const newContact = { ...contact, id: Math.random() + "a" };
    this.setState({
      contactsList: [newContact, ...this.state.contactsList],
    });
  };
  render() {
    const { showForm, contactsList, showEdit } = this.state;
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Contact List</Header>
        <Button circular size="tiny" onClick={this.toggleForm}>
          {showForm ? "hide" : "show"}
        </Button>

        {showForm && <ContactForm addContactMethodProp={this.addContact} />}
        <Button circular size="tiny" onClick={this.toggleEdit}>
          {showEdit ? "Done Editing" : "Edit"}
        </Button>
        <Contacts
          handleEdit={this.handleEdit}
          showEdit={showEdit}
          contactsProp={contactsList}
        />
      </Container>
    );
  }
}

export default App;
