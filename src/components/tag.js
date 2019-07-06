import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: inline-block;
`;

const Content = styled.span`
  background: rgb(87, 217, 163);
  color: rgb(23, 43, 77);
  border-radius: 3px;
  &:hover {
    box-shadow: none;
    background-color: rgb(121, 242, 192);
    color: rgb(0, 82, 204);
  }
`;

const Text = styled.span`
  line-height: 1;
  font-size: 14px;
  font-weight: normal;
  padding: 3px 0;
  margin: 0 4px;
`;

function Tag({ text }) {
  return (
    <Container>
      <Content>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
}

export default Tag;
