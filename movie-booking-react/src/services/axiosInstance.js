import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/genre/movie/list",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});
