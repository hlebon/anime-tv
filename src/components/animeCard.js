import React from "react";
import styled from "styled-components";
import { MdStar } from "react-icons/md";
import Tag from "./tag";
import { Badge } from "../styles";

const Container = styled.div`
  border: 1px solid lightblue;
  padding: 1rem;
  box-shadow: 1px 3px 7px #e9e9e9;
  transition: transform 0.3s ease-out;
  &:hover {
    box-shadow: 1px 7px 14px #e9e9e9;
    transform: translateY(-3px);
    transition: transform 0.3s ease-in;
  }
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

function AnimeCard({
  data: { title, synopsis, image_url, score, episodes, type, airing },
  onClick
}) {
  const isMovie = React.useMemo(() => {
    return type.toLowerCase() === "movie";
  }, [type]);
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
          <Content>
            <Tag text={`airing: ${airing ? "yes" : "no"}`} />
          </Content>
        </Detail>
      </Content>
    </Container>
  );
}

export default AnimeCard;
