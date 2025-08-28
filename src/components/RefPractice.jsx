import { useRef } from "react";

export const RefPractice = () => {
  const formRef = useRef(0);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formRef);
    formRef.current.focus();
  };
  return (
    <form>
      {console.log(formRef)}
      <div>
        <label htmlFor="name">Name:</label>
        <input ref={formRef} type="text" id="name" placeholder="Enter name.." />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter email.." />
      </div>
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};
