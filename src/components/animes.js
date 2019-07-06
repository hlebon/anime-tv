import React from "react";
import styled from "styled-components";
import Spinner from "@atlaskit/spinner";
import AnimeCard from "./animeCard";
import { List, Item, Center } from "../styles";

const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
`;

function Animes({ data: animes, onClick, isLoading }) {
  return (
    <Container>
      {isLoading ? (
        <Center>
          <Spinner size="large" />
        </Center>
      ) : animes.length > 0 ? (
        <List direction="column">
          {animes.map(anime => (
            <Item
              key={anime.mal_id}
              style={{
                margin: "auto",
                marginBottom: "1rem",
                maxWidth: "500px"
              }}
            >
              <AnimeCard
                data={anime}
                onClick={() => {
                  onClick(anime);
                }}
              />
            </Item>
          ))}
        </List>
      ) : (
        <div style={{ textAlign: "center", fontSize: "1rem" }}>
          There is no anime to display
        </div>
      )}
    </Container>
  );
}

export default Animes;
