import { useParams } from "react-router-dom";
import { moviesService } from "../services/moviesService";
import { useEffect, useState } from "react";

export const SeatSelection = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Basit seat state
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    moviesService.getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  // Basit seat listesi (8x6 grid)
  const rows = ["A", "B", "C", "D", "E", "F"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex gap-10">
        {/* LEFT SIDE — SEAT MAP */}
        <div className="flex-1 flex flex-col items-center">
          {/* Mini header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-sm mt-1">Salon 3 • Seans 17:45</p>
          </div>

          {/* Screen bar */}
          <div className="w-full text-center mb-6">
            <div className="bg-gray-400 h-2 rounded-full w-2/3 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-400">Ekran</p>
          </div>

          {/* Seat Grid */}
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <div key={row} className="flex gap-3">
                {cols.map((col) => {
                  const seat = `${row}${col}`;
                  const selected = selectedSeats.includes(seat);

                  return (
                    <div
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      className={`
                        w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-sm
                        ${
                          selected
                            ? "bg-green-600"
                            : "bg-gray-700 hover:bg-gray-600"
                        }
                      `}
                    >
                      {seat}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — SUMMARY */}
        <div className="w-[260px] bg-gray-900 p-6 rounded-xl border border-gray-800 h-max">
          <h2 className="text-lg font-semibold mb-4">Seçimin</h2>

          <p className="text-gray-400 text-sm mb-1">Koltuklar:</p>
          <div className="text-gray-200 text-sm mb-4 min-h-10">
            {selectedSeats.length === 0 ? (
              <span className="text-gray-500">Seçim yapılmadı</span>
            ) : (
              selectedSeats.join(", ")
            )}
          </div>

          <p className="text-gray-200 font-bold text-xl mb-4">
            Toplam: {selectedSeats.length * 120} TL
          </p>

          <button
            className="w-full py-2 bg-green-600 hover:bg-green-500 rounded-lg transition"
            disabled={selectedSeats.length === 0}
          >
            Ödemeye Geç
          </button>
        </div>
      </div>
    </div>
  );
};
