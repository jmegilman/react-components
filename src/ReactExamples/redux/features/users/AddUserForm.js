import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addUser } from "./usersSlice";

function AddUserForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email && username && firstName && lastName) {
      dispatch(
        addUser({
          id: nanoid(),
          email,
          username,
          firstName,
          lastName,
        })
      );
      setEmail("");
      setUsername("");
      setFirstName("");
      setLastName("");
    } else {
      setError("Please enter all fields...");
    }
  };

  return (
    <form>
      <fieldset>
        <legend></legend>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            autoComplete="off"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            autoComplete="off"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {error ? <div>{error}</div> : ""}
        <button type="submit" onClick={onFormSubmit}>
          Add User
        </button>
      </fieldset>
    </form>
  );
}

export default AddUserForm;
