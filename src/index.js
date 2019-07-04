import React from "react";
import ReactDOM from "react-dom";
import _axios from "axios";
import styled from "styled-components";
import ReactModal from "react-modal";
import Search from "./components/search";
import Animes from "./components/animes";
import HistorySearch from "./components/historySearch";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "./styles.css";

const axios = _axios.create({
  baseURL: "https://api.jikan.moe/v3/search",
  timeout: 200000
});

const ANIME = `/anime`;

const Modal = styled(ReactModal)`
  width: 95%;
  display: flex;
  background: white;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid gray;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;

const Title = styled.h2`
  color: gray;
`;

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

function App() {
  const [animes, setAnimes] = React.useState([]);
  const [animeSelected, setAnime] = React.useState({ title: "" });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastSearchs, setLastSearchs] = React.useState([]);

  function searchAnime(query) {
    setIsLoading(true);
    axios
      .get(ANIME, {
        params: {
          q: query,
          limit: 5
        }
      })
      .then(resp => resp.data)
      .then(resp => {
        setAnimes(resp.results);
        setLastSearchs(ls => [query, ...ls]);
      })
      .catch(e => console.log(e.message))
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <>
      <Center direcction="column">
        <Title>Find your favorite Anime</Title>
        <Search onSubmit={searchAnime} isLoading={isLoading} />
        <HistorySearch data={lastSearchs} />
        <Animes
          isLoading={isLoading}
          data={animes}
          onClick={anime => {
            setAnime(anime);
            setIsModalOpen(true);
          }}
        />
      </Center>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <AnimeDetail data={animeSelected} />
      </Modal>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
