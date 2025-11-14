import { MovieCard } from "./MovieCard";

export const MoviesGrid = ({ movies, genres }) => {
  return (
    <div className="w-full flex justify-center bg-gray-900">
      <div className="max-w-7xl w-full px-8 py-6">
        <ul className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <li key={movie.id} className="flex justify-center">
              <MovieCard movie={movie} genres={genres} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
