import React, { useState } from "react";

export const StatesPractice = () => {
  //   const [count, setCount] = useState(0);
  //   const incrementHandler = () => setCount(() => count + 1);
  //   const decrementHandler = () => setCount(() => count - 1);
  //   const resetHandler = () => setCount(0);
  const [section, setSection] = useState("posts");

  return (
    <>
      {/* <div>
        <button onClick={incrementHandler}>+</button>
        <span>{count}</span>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={resetHandler}>Reset</button> */}
      <button onClick={() => setSection("posts")}>Posts</button>
      <button onClick={() => setSection("comments")}>Comments</button>
      <button onClick={() => setSection("users")}>Users</button>
      <h1>{section}</h1>
    </>
  );
};
