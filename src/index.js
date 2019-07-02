import React from "react";
import ReactDOM from "react-dom";
import _axios from "axios";
import styled from "styled-components";
import ReactModal from "react-modal";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

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
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0;
`;

const Submit = styled.button`
  padding: 0.5rem;
  cursor: pointer;
`;

function AnimeDetail({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
    </div>
  );
}

function AnimeCard({ data: { title, synopsis }, onClick }) {
  function handleOnKeyDown(e) {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      handleOnClick();
    }
  }

  function handleOnClick() {
    onClick();
  }
  return (
    <div>
      <h3
        tabIndex={0}
        role={"button"}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
      >
        {title}
      </h3>
      <p>{synopsis}</p>
    </div>
  );
}

function App() {
  const [animes, setAnimes] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [animeSelected, setAnime] = React.useState({ title: "" });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function searchAnime(query) {
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
      })
      .catch(e => console.log(e.message));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    searchAnime(searchValue);
  }
  console.log(animes);
  return (
    <>
      <Center>
        <h2>Find your favorite Anime</h2>
        <form onSubmit={handleOnSubmit}>
          <label>
            <Input
              type="text"
              name="search"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
            />
          </label>
          <Submit type="submit">Search</Submit>
        </form>
        {animes.length > 0 ? (
          <ul>
            {animes.map(anime => {
              return (
                <li key={anime.mal_id}>
                  <AnimeCard
                    data={anime}
                    onClick={() => {
                      setIsModalOpen(true);
                      setAnime(anime);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <div>There is no anime to display</div>
        )}
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
