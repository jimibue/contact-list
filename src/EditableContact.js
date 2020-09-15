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

class EditableContact extends React.Component {
  state = { editingName: false, editingPhone: false };

  getEditor(id, value, field) {
    return (
      <Form.Input
        value={value}
        id={id}
        onChange={(e) => this.props.handleEdit(id, `${e.target.value}`, field)}
      />
    );
  }
  render() {
    const { id, name, phone, showEdit } = this.props;

    return (
      <>
        <Table.Row>
          <Table.Cell>
            {showEdit ? this.getEditor(id, name, "name") : name}
          </Table.Cell>
          <Table.Cell>
            {showEdit ? this.getEditor(id, phone, "phone") : name}
          </Table.Cell>
          <Table.Cell>
            <Button color="red">Delete</Button>
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}
export default EditableContact;
