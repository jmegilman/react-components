import { useState } from "react";
import UserSearch from "./UserSearch";
import UserSearchErrorBoundary from "./UserSearchErrorBoundary";

const ExampleUseAsync = () => {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(name);
  };

  const onChangeName = (name) => {
    setName(name);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h1>Find the predicted age of a person from their name:</h1>
        <label htmlFor="name">Name:</label>
        <input
          autoComplete="off"
          id="name"
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <UserSearchErrorBoundary resetKeys={[searchTerm]}>
        <UserSearch searchTerm={searchTerm} />
      </UserSearchErrorBoundary>
    </>
  );
};

export default ExampleUseAsync;
