import React from "react";
import { Form } from "semantic-ui-react";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
    age: "",
  };
  handleSubmit = (e) => {
    // e.preventDefault(); semantic is doing for us
    console.log(this.state);
    this.setState({
      name: "",
      phone: "",
      age: "",
    });
    // this working for now, but now I need to pass this
    // data to my state in app
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, phone, age } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            required
            label="Phone"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          <Form.Button color="blue">Add</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}
