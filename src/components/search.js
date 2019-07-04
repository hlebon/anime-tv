import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  margin: 0;
`;

const Submit = styled.button`
  padding: 0.5rem;
  cursor: pointer;
`;

function Search({ isLoading, onSubmit }) {
  const [value, setValue] = React.useState("");
  function handleOnSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        <Input
          disabled={isLoading}
          type="text"
          name="search"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </label>
      <Submit type="submit" disabled={isLoading}>
        Search
      </Submit>
    </form>
  );
}

export default Search;
