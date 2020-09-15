import React from "react";
import { Button, Table } from "semantic-ui-react";
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

const Contact = ({ name, phone, id, x }) => (
  <>
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell>
        <Button onClick={() => x(id)} color="red">
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  </>
);

export default Contact;
