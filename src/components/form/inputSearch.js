import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Content = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  border: 2px solid lightblue;
  &:focus {
    outline: 2px solid #1ea7fd;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  border: none;
  background: transparent;
`;
function InputSearch({ onChange, disabled, ...restProps }) {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  function updateState({ target }) {
    setValue(target.value);
    if (onChange) {
      onChange(target.value);
    }
  }
  function cleanInput() {
    setValue("");
    inputRef.current.focus();
  }

  return (
    <Content>
      <Input
        type="text"
        ref={inputRef}
        value={value}
        onChange={updateState}
        disabled={disabled}
        {...restProps}
      />
      {value.length > 0 ? (
        <CloseBtn onClick={cleanInput} disaled={disabled}>
          <MdClose fill="gray" />
        </CloseBtn>
      ) : null}
    </Content>
  );
}

export default InputSearch;
