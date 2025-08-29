import React, { useState } from "react";

export const MemoPractice = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleTheNumber = slowFunction(number);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleTheNumber}</div>
    </>
  );
  function slowFunction(number) {
    console.log("Calling this function...");
    // for (let i = 0; i <= 1000000; i++) {
    //   console.log();
    // }
    console.log("After loop");
    return number * 2;
  }
};
