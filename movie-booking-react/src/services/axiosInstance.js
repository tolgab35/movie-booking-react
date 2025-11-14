import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
});
