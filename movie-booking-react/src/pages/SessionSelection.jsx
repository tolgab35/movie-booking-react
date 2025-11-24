import { useParams } from "react-router-dom";
import { moviesService } from "../services/moviesService";
import { useEffect, useState } from "react";

export const SessionSelection = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesService.getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-8 py-4">
      {/* Poster + info */}
      <div className="flex gap-8">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="h-[650px] rounded-lg"
          alt={movie.title}
        />

        {/* Info */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{movie.title}</h1>

          <button className="w-md px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700 cursor-pointer">
            Seans Seç
          </button>
        </div>
      </div>
    </div>
  );
};
