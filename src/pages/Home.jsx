import { Link } from "react-router-dom";
import banner from "../assets/Banner.png";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        
        <div className="max-w-2xl">
          
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-purple-300">
            Explore • Discover • Watch
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Find Your
            <br />
            <span className="bg-linear-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Next Favorite
            </span>
            <br />
            Movie
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Explore amazing shows, discover new stories, and find your next
            favorite movie with Movie Explorer.
          </p>

          <Link
            to="/movies"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-7 py-3.5 font-medium text-white transition hover:scale-105"
          >
            Explore Movies
            <span>→</span>
          </Link>

        </div>
      </div>

    </section>
  );
}

export default Home;