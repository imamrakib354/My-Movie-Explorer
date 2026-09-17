import { Link } from "react-router-dom";
import logo from "../assets/Transparent.png";

function Nav() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <Link to="/">
          <img
            src={logo}
            alt="Movie Explorer"
            className="w-40"
          />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-white transition hover:text-purple-400"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
          >
            Movies
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Nav;