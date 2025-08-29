import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
