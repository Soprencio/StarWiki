import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageShell from './components/layout/PageShell';
import LoadingSkeleton from './components/ui/LoadingSkeleton';

// Lazy Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CharactersPage = lazy(() => import('./pages/CharactersPage'));
const CharacterDetailPage = lazy(() => import('./pages/CharacterDetailPage'));
const PlanetsPage = lazy(() => import('./pages/PlanetsPage'));
const PlanetDetailPage = lazy(() => import('./pages/PlanetDetailPage'));
const StarshipsPage = lazy(() => import('./pages/StarshipsPage'));
const StarshipDetailPage = lazy(() => import('./pages/StarshipDetailPage'));
const SpeciesPage = lazy(() => import('./pages/SpeciesPage'));
const SpeciesDetailPage = lazy(() => import('./pages/SpeciesDetailPage'));
const VehiclesPage = lazy(() => import('./pages/VehiclesPage'));
const VehicleDetailPage = lazy(() => import('./pages/VehicleDetailPage'));
const WeaponsPage = lazy(() => import('./pages/WeaponsPage'));
const WeaponDetailPage = lazy(() => import('./pages/WeaponDetailPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const FactionsPage = lazy(() => import('./pages/FactionsPage'));
const FactionDetailPage = lazy(() => import('./pages/FactionDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Fallbacks
const ListFallback = <LoadingSkeleton variant="card" count={6} />;
const DetailFallback = <LoadingSkeleton variant="detail" />;

function App() {
  return (
    <Router>
      <PageShell>
        <Suspense fallback={<div style={{ padding: '2rem' }}><LoadingSkeleton variant="text" count={10} /></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/personajes" element={
              <Suspense fallback={ListFallback}><CharactersPage /></Suspense>
            } />
            <Route path="/personajes/:id" element={
              <Suspense fallback={DetailFallback}><CharacterDetailPage /></Suspense>
            } />
            
            <Route path="/planetas" element={
              <Suspense fallback={ListFallback}><PlanetsPage /></Suspense>
            } />
            <Route path="/planetas/:id" element={
              <Suspense fallback={DetailFallback}><PlanetDetailPage /></Suspense>
            } />
            
            <Route path="/naves" element={
              <Suspense fallback={ListFallback}><StarshipsPage /></Suspense>
            } />
            <Route path="/naves/:id" element={
              <Suspense fallback={DetailFallback}><StarshipDetailPage /></Suspense>
            } />
            
            <Route path="/especies" element={
              <Suspense fallback={ListFallback}><SpeciesPage /></Suspense>
            } />
            <Route path="/especies/:id" element={
              <Suspense fallback={DetailFallback}><SpeciesDetailPage /></Suspense>
            } />
            
            <Route path="/vehiculos" element={
              <Suspense fallback={ListFallback}><VehiclesPage /></Suspense>
            } />
            <Route path="/vehiculos/:id" element={
              <Suspense fallback={DetailFallback}><VehicleDetailPage /></Suspense>
            } />
            
            <Route path="/armas" element={
              <Suspense fallback={ListFallback}><WeaponsPage /></Suspense>
            } />
            <Route path="/armas/:id" element={
              <Suspense fallback={DetailFallback}><WeaponDetailPage /></Suspense>
            } />
            
            <Route path="/eventos" element={
              <Suspense fallback={<LoadingSkeleton variant="listItem" count={6} />}><EventsPage /></Suspense>
            } />
            <Route path="/eventos/:id" element={
              <Suspense fallback={DetailFallback}><EventDetailPage /></Suspense>
            } />
            
            <Route path="/facciones" element={
              <Suspense fallback={ListFallback}><FactionsPage /></Suspense>
            } />
            <Route path="/facciones/:id" element={
              <Suspense fallback={DetailFallback}><FactionDetailPage /></Suspense>
            } />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageShell>
    </Router>
  );
}

export default App;
