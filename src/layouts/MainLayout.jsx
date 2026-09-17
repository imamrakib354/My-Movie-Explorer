import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0c0c1a]">
      <Nav />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;