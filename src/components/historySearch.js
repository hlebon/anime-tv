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

function HistorySearch({ data, onClick }) {
  return (
    <>
      {data.length > 0 && (
        <Section>
          <Title>Last search</Title>
          <List
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              minHeight: "60px"
            }}
          >
            {data.map((lastSearch, index) => {
              let key = lastSearch.replace(" ", "");
              return (
                <Item
                  id={key}
                  key={key}
                  margin="3px"
                  style={{ display: "inline-block" }}
                >
                  {index === 0 ? (
                    <TabButton disabled borderColor="green">
                      {lastSearch}
                    </TabButton>
                  ) : (
                    <TabButton
                      onClick={e => {
                        e.preventDefault();
                        onClick(lastSearch, e.target);
                      }}
                    >
                      {lastSearch}
                    </TabButton>
                  )}
                </Item>
              );
            })}
          </List>
        </Section>
      )}
    </>
  );
}

export default HistorySearch;
