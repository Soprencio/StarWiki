import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { swapi } from '../api/swapi';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import ErrorState from '../components/feedback/ErrorState';
import styles from './EventsPage.module.css';

const EventsPage = () => {
  const { data, loading, error } = useFetch((s) => swapi.getFilms(s), []);

  if (loading) return <LoadingSkeleton variant="card" count={6} />;
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;

  // Sort films by episode_id
  const sortedFilms = [...(data?.results || [])].sort((a, b) => a.episode_id - b.episode_id);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>EVENTOS GALÁCTICOS</h1>
        <p className={styles.subtitle}>Cronología histórica de los sucesos que definieron la galaxia</p>
      </header>

      <div className={styles.timeline}>
        {sortedFilms.map((film) => (
          <Link 
            key={film.url} 
            to={`/eventos/${film.url.split('/').filter(Boolean).pop()}`}
            className={styles.timelineItem}
          >
            <div className={styles.episodeContainer}>
              <span className={styles.episodeLabel}>EPISODIO</span>
              <span className={styles.episodeId}>{film.episode_id}</span>
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.filmTitle}>{film.title}</h2>
              <div className={styles.meta}>
                <span>Director: {film.director}</span>
                <span>Lanzamiento: {film.release_date}</span>
              </div>
              <p className={styles.stats}>
                {film.characters.length} Personajes | {film.planets.length} Planetas | {film.starships.length} Naves
              </p>
            </div>

            <div className={styles.watermark}>
              {film.opening_crawl.substring(0, 150)}...
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
