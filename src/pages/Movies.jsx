import { use } from "react";
import MovieCard from "../components/MovieCard";

function Movies({ showsPromise }) {

    const shows = use(showsPromise);

    return (
        <div className="min-h-screen bg-[#05050b] px-6 py-10">

            <h1 className="text-4xl font-bold text-white">
                Movies
            </h1>

            <div className="grid grid-cols-3 gap-6 mt-8">

                {shows.map((show) => (<MovieCard key={show.id} show ={show} /> ))}

            </div>

        </div>
    );
}

export default Movies;