import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { getShows } from "./services/movieApi";

const showsPromise = getShows();

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/movies"
            element={
              <Suspense fallback={
                <div className="min-h-screen bg-[#05050b] px-6 py-10">
                  <p className="text-center text-lg text-gray-400">Movies Loading..</p>
                </div>
              }>
                <Movies showsPromise={showsPromise} />
              </Suspense>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;