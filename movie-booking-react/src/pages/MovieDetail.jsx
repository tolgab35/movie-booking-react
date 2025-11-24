import { useParams } from "react-router-dom";
import { moviesService } from "../services/moviesService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    moviesService.getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      {/* Poster + info */}
      <div className="flex gap-10">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="h-[650px] rounded-lg"
          alt={movie.title}
        />

        {/* Info */}
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-4xl font-bold mb-1">{movie.title}</h1>
            <p className="text-gray-400 text-sm">
              {movie.release_date?.slice(0, 4)} • ⭐{" "}
              {movie.vote_average.toFixed(1)}
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-lg">
            {movie.overview}
          </p>
          <button
            onClick={() => navigate(`/movie/${id}/session`)}
            className="w-md px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-700 cursor-pointer"
          >
            Seans Seç
          </button>
        </div>
      </div>
    </div>
  );
};
