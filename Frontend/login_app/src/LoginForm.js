import React, { useRef } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const name = useRef();
  const password = useRef();

  const validateInput = ({ name, password }) => {
    if (
      name.current.value.trim().length === 0 ||
      password.current.value.trim().length === 0
    )
      return false;
    return true;
  };

  const setFocus = () => {
    if (name.current.value.trim().length === 0) {
      name.current.focus();
      return;
    }
    if (password.current.value.trim().length === 0) {
      password.current.focus();
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validInput = validateInput({ name, password });

    if (!validInput) {
      setFocus();
      return null;
    }

    props.onSubmit({
      login: name.current.value,
      password: password.current.value,
    });

	name.current.value = ''
	name.current.focus()
	password.current.value = ''
  };

  return (
    <form className="form">
      <h1>Login</h1>
      <label htmlFor="name">Name</label>
      <input ref={name} type="text" id="name" required />
      <label htmlFor="password">Password</label>
      <input ref={password} type="password" id="password" required />
      <button type="submit" onClick={handleSubmit}>
        Continue
      </button>
    </form>
  );
};

export default LoginForm;
