import { api } from "./axiosInstance";

export const moviesService = {
  getPopular: async () => {
    const res = await api.get("/movie/popular");
    return res.data.results;
  },

  searchMovies: async (query) => {
    const res = await api.get("/search/movie", {
      params: { query },
    });
    return res.data.results;
  },

  getMovieDetails: async (id) => {
    const res = await api.get(`/movie/${id}`);
    return res.data;
  },
};
