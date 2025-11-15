import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f1b2d] text-white">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
