import React from "react";
import { Button, Form, Table } from "semantic-ui-react";
import ContactForm from "./ContactForm";

// const Contact = ({ id, name, phone, color }) => {
//   //not doing anything
//   return (
//     <Table.Row>
//       <Table.Cell>{name}</Table.Cell>
//       <Table.Cell>{phone}</Table.Cell>
//       <Table.Cell>Cell</Table.Cell>
//     </Table.Row>
//   );
// };

const Contact = ({ name, phone, id, x, showEditing, handleEdit2 }) => {
  function handleChange(e) {
    handleEdit2(id, e.target.value, e.target.name);
  }
  function getFormInput(val, name) {
    return (
      // handleEdit = (id, inputVal, inputName)
      <Form.Input name={name} value={val} onChange={handleChange} />
    );
  }
  return (
    <>
      <Table.Row>
        <Table.Cell>
          {showEditing ? getFormInput(name, "name") : name}
        </Table.Cell>
        <Table.Cell>
          {showEditing ? getFormInput(phone, "phone") : phone}
        </Table.Cell>
        <Table.Cell>
          <Button onClick={() => x(id)} color="red">
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default Contact;
