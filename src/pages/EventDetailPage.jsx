import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { swapi } from '../api/swapi';
import { useFetch } from '../hooks/useFetch';
import { extractIdFromUrl, getCharacterImage, getPlanetImage, getStarshipImage, getVehicleImage, getSpeciesImage } from '../utils/helpers';
import OpeningCrawl from '../components/ui/OpeningCrawl';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import ErrorState from '../components/feedback/ErrorState';
import Button from '../components/ui/Button';
import EntityCard from '../components/entities/EntityCard';
import styles from './EventDetailPage.module.css';

const TABS = [
  { id: 'characters', label: 'Personajes', category: 'personajes', getImage: getCharacterImage },
  { id: 'planets', label: 'Planetas', category: 'planets', getImage: getPlanetImage },
  { id: 'starships', label: 'Naves', category: 'starships', getImage: getStarshipImage },
  { id: 'vehicles', label: 'Vehículos', category: 'vehicles', getImage: getVehicleImage },
  { id: 'species', label: 'Especies', category: 'species', getImage: getSpeciesImage },
];

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('characters');

  const { data: film, loading, error } = useFetch((s) => swapi.getFilm(id, s), [id]);

  if (loading) return <LoadingSkeleton variant="detail" />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;
  if (!film) return null;

  return (
    <div className={styles.container}>
      <Button variant="ghost" onClick={() => navigate('/eventos')} className={styles.backBtn}>
        ← VOLVER A EVENTOS
      </Button>

      <header className={styles.header}>
        <div className={styles.episodeNumber}>EPISODIO {film.episode_id}</div>
        <h1 className={styles.title}>{film.title}</h1>
        <div className={styles.meta}>
          <span>Dirigido por: {film.director}</span>
          <span>Producido por: {film.producer}</span>
          <span>Lanzamiento: {film.release_date}</span>
        </div>
      </header>

      <section className={styles.crawlSection}>
        <OpeningCrawl 
          title={film.title} 
          episode={film.episode_id} 
          text={film.opening_crawl} 
        />
      </section>

      <section className={styles.relationsSection}>
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label} ({film[tab.id]?.length || 0})
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {film[activeTab]?.map(url => {
            const entityId = extractIdFromUrl(url);
            const tabConfig = TABS.find(t => t.id === activeTab);
            return (
              <EntityCard 
                key={url}
                id={entityId}
                name="..." // En un entorno ideal haríamos fetch de los nombres, pero para el MVP usaremos placeholders o un fetch masivo
                category={tabConfig.category}
                image={tabConfig.getImage(entityId)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;
