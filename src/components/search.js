import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  border: 1px solid lightblue;
  border-right-color: transparent;
  border-radius: 7px 0 0 7px;
`;

const Submit = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid lightblue;
  border-left-color: transparent;
  color: gray;
  background: white;
  border-radius: 0 7px 7px 0;
`;

const Label = styled.label`
  width: 100%;
  min-width: 200px;
  margin: 0;
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
    <form onSubmit={handleOnSubmit} autoComplete="off">
      <div style={{ display: "flex" }}>
        <Label>
          <Input
            disabled={isLoading}
            type="text"
            name="search"
            placeholder="Your favorite anime... "
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </Label>
        <Submit type="submit" disabled={isLoading}>
          Search
        </Submit>
      </div>
    </form>
  );
}

export default Search;
