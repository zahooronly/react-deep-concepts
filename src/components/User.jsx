import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  return (
    <>
      <h1>User</h1>
      <p>User ID: {id}</p>
    </>
  );
};

export default User;
