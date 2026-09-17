import { Link } from "react-router-dom";

import logo from "../assets/Transparent.png";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000000]">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 py-12">

        <div>
          <img
            src={logo}
            alt="Movie Explorer"
            className="w-44"
          />

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
            Explore movies, discover new stories, and find your next
            favorite show with Movie Explorer.
          </p>

          <ul className="flex gap-4 mt-6">
            <li className="font-semibold text-white">GitHub</li>
            <li className="font-semibold text-white">Twitter</li>
            <li className="font-semibold text-white">LinkedIn</li>
          </ul>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Movie Explorer. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;