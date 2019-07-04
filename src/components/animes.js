import React from "react";
import styled from "styled-components";
import AnimeCard from "./animeCard";
import { List, Item } from "../style";

const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  padding: 2rem;
`;

function Animes({ data: animes, onClick }) {
  return (
    <Container>
      {animes.length > 0 ? (
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
