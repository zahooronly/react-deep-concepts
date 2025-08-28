import { useRef } from "react";

export const RefPractice = () => {
  const formRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    console.log("Form Data: ", Object.fromEntries(formData.entries()));
  };
  return (
    <form ref={formRef} onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter name.." />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email.."
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
