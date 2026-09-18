function MovieCard({ show, onSeeDetails }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c16] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">

      <img
        src={show.image?.medium}
        alt={show.name}
        className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-white">
          {show.name}
        </h2>

        <p className="mt-2 text-gray-400">
          Released: {show.premiered}
        </p>

        <p className="mt-2 text-gray-300">
          ⭐ {show.rating?.average ?? "N/A"}
        </p>

        <button
          onClick={() => onSeeDetails(show)}
          className="mt-5 rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
        >
          See Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;