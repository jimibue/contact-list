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
    showEditing: false,
  };
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  deleteContact = (id) => {
    const { contactsList } = this.state;
    const filteredContacts = contactsList.filter(
      (contact) => contact.id !== id
    );

    this.setState({
      contactsList: filteredContacts,
      //contactsList: contactsList.filter((c) => c.id !== id),
    });
  };

  addContact = (contact) => {
    console.log(contact);
    const newContact = { ...contact, id: Math.random() + "" };
    this.setState({
      contactsList: [newContact, ...this.state.contactsList],
    });
  };
  toggleEdit = () => {
    this.setState({
      showEditing: !this.state.showEditing,
    });
  };

  handleEdit = (id, inputVal, inputName) => {
    const { contactsList } = this.state;
    console.log(inputVal);
    const updatedContacts = contactsList.map((contact) => {
      if (contact.id === id) {
        return { ...contact, [inputName]: inputVal };
      }
      return contact;
    });
    console.log(updatedContacts);
    this.setState({
      contactsList: updatedContacts,
    });
  };

  render() {
    const { showForm, contactsList, showEditing } = this.state;
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Contact List</Header>
        <Button circular size="tiny" onClick={this.toggleForm}>
          {showForm ? "hide" : "show"}
        </Button>

        {showForm && <ContactForm addContactMethodProp={this.addContact} />}
        <Button circular size="tiny" onClick={this.toggleEdit}>
          {showEditing ? "Done Editing" : "Edit"}
        </Button>
        <Contacts
          showEditing={showEditing}
          deleteContactPropsFromApp={this.deleteContact}
          contactsProp={contactsList}
          handleEdit1={this.handleEdit}
        />
      </Container>
    );
  }
}

export default App;
