import React from "react";

const Contact = ({ id, name, phone, color }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
