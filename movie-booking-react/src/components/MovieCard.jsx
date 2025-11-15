import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie, genres }) => {
  const navigate = useNavigate();
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  const movieGenres = movie.genre_ids
    ? movie.genre_ids
        .map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .slice(0, 2)
    : [];

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="max-w-[280px] flex flex-col items-center group cursor-pointer"
    >
      {imageUrl && (
        <div className="relative w-full overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={movie.original_title}
            className="w-full h-[420px] object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent rounded-md pointer-events-none transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/40"></div>

          {/* Normal state - Title and Year */}
          <div className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 group-hover:opacity-0">
            <div className="text-base font-semibold truncate text-center text-white drop-shadow-lg">
              {movie.original_title}
            </div>
            <div className="text-xs text-gray-300 text-center mt-1">
              {releaseYear} • ⭐ {movie.vote_average.toFixed(1)}
            </div>
          </div>

          {/* Hover state - Overview */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-sm font-semibold text-white mb-1">
              {movie.original_title}
            </div>
            <div className="text-xs text-gray-300 mb-2">
              {releaseYear} • ⭐ {movie.vote_average.toFixed(1)}
            </div>
            {movieGenres.length > 0 && (
              <div className="flex gap-1 mb-2 flex-wrap">
                {movieGenres.map((genre, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-700/70 text-gray-200 px-2 py-0.5 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}
            <div className="text-xs text-gray-200 line-clamp-3 leading-relaxed">
              {movie.overview || "No description available."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
