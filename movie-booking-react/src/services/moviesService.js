import { api } from "./axiosInstance";

export const moviesService = {
  getGenres: async () => {
    const res = await api.get("/genre/movie/list");
    return res.data.genres;
  },
};
