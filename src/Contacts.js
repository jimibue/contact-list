import React from "react";
import Contact from "./Contact";
import { Table, Label } from "semantic-ui-react";
import EditableContacts from "./EditableContact";

const Contacts = ({ contactsProp, deleteContactPropsFromApp }) => {
  // function renderContacts() {
  //   contactsProp.map((c) => {
  //     return <Contact key={c.id} {...c} color="red" />;
  //   });
  // }

  const renderContacts = () => {
    return contactsProp.map((c) => {
      // return <Contact key={c.id} {...c} color="red" />;
      return <Contact key={c.id} {...c} x={deleteContactPropsFromApp} />;
    });
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>NAME</Table.HeaderCell>
          <Table.HeaderCell>PHONE</Table.HeaderCell>
          <Table.HeaderCell>ACTIONS</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{renderContacts()}</Table.Body>
    </Table>
  );
};

export default Contacts;

// export default Contacts;
