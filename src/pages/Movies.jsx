import { use, useState } from "react";
import MovieCard from "../components/MovieCard";
import SeeDetails from "../components/seeDetails";
import { searchShows } from "../services/movieApi";

function Movies({ showsPromise }) {

  const shows = use(showsPromise);

  const [selectedShow, setSelectedShow] = useState(null);

  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {

    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const data = await searchShows(search);

    setSearchResults(data);
  };

  const moviesToShow =
    searchResults.length > 0
      ? searchResults.map((result) => result.show)
      : shows;

  return (
    <div className="min-h-screen bg-[#05050b] px-4 py-8 sm:px-6 sm:py-10">

      <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row">

        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-full border border-white/10 bg-[#0c0c16] px-5 py-3 text-white outline-none placeholder:text-gray-500"
        />

        <button
          onClick={handleSearch}
          className="w-full rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white transition hover:scale-105 sm:w-auto"
        >
          Search
        </button>

      </div>

      <h1 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
        Movies
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {moviesToShow.map((show) => (
          <MovieCard
            key={show.id}
            show={show}
            onSeeDetails={setSelectedShow}
          />
        ))}

      </div>

      <SeeDetails
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />

    </div>
  );
}

export default Movies;