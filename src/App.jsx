import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const showsPromise = async () => {
  const response = await fetch(
    "https://api.tvmaze.com/shows"
  );

  const data = await response.json();
  return data;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/movies" element={
            <Suspense fallback={
              <div className="min-h-screen bg-[#05050b] px-6 py-10">
                <p>Movies List Loading ....</p>
              </div>
            }>
              <Movies showsPromise={showsPromise()} />
            </Suspense>
          }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;