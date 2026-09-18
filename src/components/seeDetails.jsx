function SeeDetails({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">

      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#0c0c16]">

        <button
          onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black"
        >
          ×
        </button>

        <img src={show.image?.original || show.image?.medium} alt={show.name} className="h-96 w-full object-cover" />

        <div className="p-6">

          <h2 className="text-3xl font-bold text-white">
            {show.name}
          </h2>

          <p className="mt-3 text-gray-300">
            ⭐ {show.rating?.average ?? "N/A"}
          </p>

          <p className="mt-2 text-gray-400">
            Released: {show.premiered}
          </p>

          <div className="mt-4 flex gap-2">

            {show.genres?.map((genre) => (
              <span key={genre} className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300" > {genre} </span>
            ))}

          </div>

          <div className="mt-5 text-gray-300" dangerouslySetInnerHTML={{ __html: show.summary || "No summary available.", }} />

        </div>

      </div>

    </div>
  );
}

export default SeeDetails;