import { MovieCard } from "./MovieCard";

export const MoviesGrid = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
