import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactModal from "react-modal";
import Search from "./components/search";
import Animes from "./components/animes";
import HistorySearch from "./components/historySearch";
import AnimeDetail from "./components/animeDetail";
import { WithNotifications } from "./components/notifications";
import * as API from "./services/API";
import { Layout } from "./styles";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

const Modal = styled(ReactModal)`
  width: 95%;
  display: flex;
  background: white;
  margin: auto;
  margin-top: 2rem;
  border: 1px solid #e8e8e8;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  color: gray;
  font-size: 1.5rem;
  font-weight: 500;
  margin: auto;
  margin-bottom: 1rem;
`;

const App = WithNotifications(props => {
  const [animes, setAnimes] = React.useState([]);
  const [animeSelected, setAnime] = React.useState({ title: "" });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastSearchs, setLastSearchs] = React.useState([
    "naruto",
    "boruto",
    "one piece man",
    "one punch man",
    "dragon ball super"
  ]);

  function searchAnime(query, refEl = null) {
    setIsLoading(true);
    API.getAnimesByQuery({ query })
      .then(resp => {
        setAnimes(resp);
        setLastSearchs(ls => {
          if (!ls.includes(query)) {
            return [query, ...ls];
          } else {
            return [query, ...ls.filter(v => query !== v)];
          }
        });
      })
      .catch(e => console.error(e.message))
      .finally(() => {
        setIsLoading(false);
        if (refEl) {
          refEl.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
  }
  return (
    <>
      <Layout direcction="column">
        <Title>Find your favorite Anime</Title>
        <Search onSubmit={searchAnime} isLoading={isLoading} />
        <HistorySearch data={lastSearchs} onClick={searchAnime} />
        <Animes
          isLoading={isLoading}
          data={animes}
          onClick={anime => {
            setAnime(anime);
            setIsModalOpen(true);
          }}
        />
      </Layout>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        ariaHideApp={false}
      >
        <AnimeDetail data={animeSelected} />
      </Modal>
    </>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
