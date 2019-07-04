import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightblue;
  padding: 1rem;
  box-shadow: 1px 3px 7px lightgrey;
`;

const Title = styled.h3`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
`;
const Resumen = styled.p``;
const Img = styled.img`
  max-width: 150px;
`;
const Detail = styled.div`
  margin-left: 1rem;
`;

function AnimeCard({ data: { title, synopsis, image_url }, onClick }) {
  function handleOnKeyDown(e) {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      handleOnClick();
    }
  }

  function handleOnClick() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <Container>
      <Title
        tabIndex={0}
        role={"button"}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
      >
        {title}
      </Title>
      <Content>
        <Img src={image_url} alt={title + " Poster"} />
        <Detail>
          <Resumen>{synopsis}</Resumen>
        </Detail>
      </Content>
    </Container>
  );
}

export default AnimeCard;
