import { useState, useEffect } from "react";
import { moviesService } from "../services/moviesService";
import { Genre } from "../components/Genre";
import { MoviesGrid } from "../components/MoviesGrid";

export const Home = () => {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesData, genresData] = await Promise.all([
          moviesService.getPopular(),
          moviesService.getGenres(),
        ]);
        setMovies(moviesData);
        setGenres(genresData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Genre genres={genres} />
      <MoviesGrid movies={movies} />
    </>
  );
};
