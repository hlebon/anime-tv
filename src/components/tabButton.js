import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid orange;
  border-color: ${({ borderColor }) => borderColor};
  padding: 0.3rem 0.5rem;
  color: #575757;
  background: white;
  border-radius: 15px;
  box-shadow: 1px 4px 7px #f1f1f1;
`;

function TabButton({ borderColor = "orange", children, ...rest }) {
  return (
    <Button borderColor={borderColor} {...rest}>
      {children}
    </Button>
  );
}

export default TabButton;
