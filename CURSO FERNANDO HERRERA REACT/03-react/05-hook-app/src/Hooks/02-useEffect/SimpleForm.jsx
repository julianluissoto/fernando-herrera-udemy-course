import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "julian",
    email: "julian@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value, // used [] because we use variable data
    });
  };

  useEffect(() => {}, [email]);
  useEffect(() => {}, [username]);

  return (
    <>
      <h1>Simple Form</h1>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="user Name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>

      {username === "julian" && <Message />}
    </>
  );
};

export default SimpleForm;
