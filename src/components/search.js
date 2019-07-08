import React from "react";
import styled from "styled-components";
import InputSearch from "./form/inputSearch";

const Label = styled.label`
  width: 100%;
  min-width: 200px;
  margin: 0;
`;

function Search({ isLoading, onSubmit }) {
  const [value, setValue] = React.useState("");

  function handleOnSubmit() {
    if (onSubmit) {
      onSubmit(value);
    }
  }

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      handleOnSubmit();
    }
  }
  return (
    <form autoComplete="off" onKeyDown={handleOnKeyDown}>
      <div style={{ display: "flex" }}>
        <Label>
          <InputSearch
            disabled={isLoading}
            name="search"
            placeholder="Your favorite anime... "
            onChange={searchValue => setValue(searchValue)}
          />
        </Label>
      </div>
    </form>
  );
}

export default Search;
