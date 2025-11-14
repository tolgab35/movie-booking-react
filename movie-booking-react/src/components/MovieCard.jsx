export const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt={movie.original_title} className="h-auto" />
      )}
      <div>{movie.original_title}</div>
    </div>
  );
};
