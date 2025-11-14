import { api } from "./axiosInstance";

export const moviesService = {
  getGenres: async () => {
    const res = await api.get("/genre/movie/list");
    return res.data.genres;
  },
  getPopular: async () => {
    const res = await api.get("/movie/popular");
    return res.data.results;
  },
};
