import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://api.jikan.moe/v3/search",
  timeout: 200000
});

const ANIME = `/anime`;

export function getAnimesByQuery({ query, limit = 10 }) {
  return axios
    .get(ANIME, {
      params: {
        q: query,
        limit
      }
    })
    .then(resp => resp.data)
    .then(resp => resp.results)
    .catch(e => {
      throw new Error(e);
    });
}
