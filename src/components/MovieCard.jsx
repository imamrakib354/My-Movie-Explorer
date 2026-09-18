function MovieCard({ show }) {

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0c0c16]">

      <img src={show.image?.medium} alt={show.name} className="h-80 w-full object-cover" />

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

        <button className="mt-5 rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white">
          See Details
        </button>

      </div>

    </div>
  );
}

export default MovieCard;