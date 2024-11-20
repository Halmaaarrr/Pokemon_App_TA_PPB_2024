import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import LandingPage from "./pages/LandingPage";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage"; // Import GalleryPage
// Components
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
          <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} /> {/* Tambahkan Route untuk Gallery */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
