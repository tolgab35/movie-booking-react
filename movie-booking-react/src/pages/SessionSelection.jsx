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

  // Dummy session times
  const sessions = {
    today: ["11:30", "14:00", "17:45", "21:15"],
    tomorrow: ["12:15", "15:30", "19:00"],
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex gap-10">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="h-[650px] rounded-lg"
          alt={movie.title}
        />

        {/* Right side */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold mb-1">{movie.title}</h1>
            <p className="text-gray-400 text-sm">
              {movie.release_date?.slice(0, 4)} • ⭐{" "}
              {movie.vote_average.toFixed(1)}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Bugün</h2>
              <div className="flex flex-wrap gap-3">
                {sessions.today.map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 text-gray-200 hover:text-white transition cursor-pointer"
                    onClick={() => console.log("Seans:", time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Yarın</h2>
              <div className="flex flex-wrap gap-3">
                {sessions.tomorrow.map((time) => (
                  <button
                    key={time}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 text-gray-200 hover:text-white transition cursor-pointer"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
