import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

function AnimeDetail({ data }) {
  return (
    <Container>
      <img src={data.image_url} alt={data.title + "  poster"} />
      <Content>
        <h3>{data.title}</h3>
        <p>{data.synopsis}</p>
      </Content>
    </Container>
  );
}

export default AnimeDetail;
