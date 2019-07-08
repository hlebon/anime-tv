import React from "react";
import styled from "styled-components";
import Media from "react-media";
import Tag from "./tag";

const Container = styled.div`
  min-width: 300px;
  border: 1px solid #dedede;
  box-shadow: 1px 3px 7px #e9e9e9;
  transition: transform 0.3s ease-out;
  &:hover {
    box-shadow: 1px 7px 14px #e9e9e9;
    transform: translateY(-3px);
    transition: transform 0.3s ease-in;
  }
`;

const Title = styled.h3`
  text-align: left;
`;

const Content = styled.div`
  display: flex;
`;
const Resumen = styled.p``;
const Img = styled.img`
  max-width: 150px;
  height: 200px;
`;
const Detail = styled.div`
  padding: 0.5rem;
  padding-left: 1rem;
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
      <Content>
        <Img src={image_url} alt={title + " Poster"} />
        <Detail>
          <Title
            tabIndex={0}
            role={"button"}
            onClick={handleOnClick}
            onKeyDown={handleOnKeyDown}
          >
            {title}
          </Title>
          <Media query="(max-width: 599px)">
            {matches =>
              matches ? (
                <Resumen>{synopsis.substring(0, 65)}...</Resumen>
              ) : (
                <Resumen>{synopsis}</Resumen>
              )
            }
          </Media>
          <Content>
            <Tag text={`airing: ${airing ? "yes" : "no"}`} />
          </Content>
        </Detail>
      </Content>
    </Container>
  );
}

export default AnimeCard;
