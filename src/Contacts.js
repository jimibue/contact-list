import React from "react";
import Contact from "./Contact";

const Contacts = ({ contactsProp }) => {
  //render contacts how do I get contacts?
  // return props.contactsProp.map((c) => {
  //   return <div>{c.name}</div>;
  // });

  return (
    <div>
      <h1>working</h1>
      {contactsProp.map((c) => {
        // c = { id: 3, name: "Bob", phone: "123-345-123" },
        return <Contact key={c.id} {...c} color="red" />;
      })}
    </div>
  );
};

export default Contacts;
