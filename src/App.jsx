import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageShell from './components/layout/PageShell';

// Pages
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import PlanetsPage from './pages/PlanetsPage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import StarshipsPage from './pages/StarshipsPage';
import StarshipDetailPage from './pages/StarshipDetailPage';
import SpeciesPage from './pages/SpeciesPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import VehiclesPage from './pages/VehiclesPage';
import FactionsPage from './pages/FactionsPage';
import FactionDetailPage from './pages/FactionDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes" element={<CharactersPage />} />
          <Route path="/personajes/:id" element={<CharacterDetailPage />} />
          <Route path="/planetas" element={<PlanetsPage />} />
          <Route path="/planetas/:id" element={<PlanetDetailPage />} />
          <Route path="/naves" element={<StarshipsPage />} />
          <Route path="/naves/:id" element={<StarshipDetailPage />} />
          <Route path="/especies" element={<SpeciesPage />} />
          <Route path="/especies/:id" element={<SpeciesDetailPage />} />
          <Route path="/vehiculos" element={<VehiclesPage />} />
          <Route path="/facciones" element={<FactionsPage />} />
          <Route path="/facciones/:id" element={<FactionDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageShell>
    </Router>
  );
}

export default App;
