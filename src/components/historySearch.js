import React from "react";
import styled from "styled-components";
import TabButton from "./tabButton";
import { List, Item } from "../styles";

const Section = styled.section`
  margin: 1rem 0;
  color: gray;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;

function HistorySearch({ data }) {
  return (
    <Section>
      {data.length > 0 && (
        <>
          <Title>Last search</Title>
          <List style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            {data.map((ls, index) => (
              <Item margin="3px" style={{ display: "inline-block" }}>
                {index === 0 ? (
                  <TabButton borderColor="green">{ls}</TabButton>
                ) : (
                  <TabButton>{ls}</TabButton>
                )}
              </Item>
            ))}
          </List>
        </>
      )}
    </Section>
  );
}

export default HistorySearch;
