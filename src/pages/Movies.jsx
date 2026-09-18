import { use, useState } from "react";
import MovieCard from "../components/MovieCard";
import SeeDetails from "../components/seeDetails";

function Movies({ showsPromise }) {

  const shows = use(showsPromise);

  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="min-h-screen bg-[#05050b] px-6 py-10">

      <h1 className="text-4xl font-bold text-white">
        Movies
      </h1>

      <div className="mt-8 grid grid-cols-3 gap-6">

        {shows.map((show) => ( <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} /> ))}

      </div>

      <SeeDetails
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />

    </div>
  );
}

export default Movies;