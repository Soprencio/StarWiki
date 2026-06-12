import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { swapi } from '../api/swapi';
import Button from '../components/ui/Button';
import EntityCard from '../components/entities/EntityCard';
import { extractIdFromUrl, getCharacterImage, getPlanetImage, getStarshipImage, getVehicleImage, getSpeciesImage } from '../utils/helpers';
import styles from './HomePage.module.css';
import SEO from '../components/utils/SEO';

const HomePage = () => {
  const navigate = useNavigate();

  // Fetch recent records (placeholder fetch from people for now)
  const { data: recentData, loading: loadingRecent } = useFetch((s) => swapi.getPeople(1, s), []);
  const { data: filmsData, loading: loadingFilms } = useFetch((s) => swapi.getFilms(s), []);

  const categories = [
    { title: "Personajes", path: "/personajes", icon: "👤", count: 82 },
    { title: "Planetas", path: "/planetas", icon: "🪐", count: 60 },
    { title: "Naves", path: "/naves", icon: "🚀", count: 36 },
    { title: "Especies", path: "/especies", icon: "🧬", count: 37 },
    { title: "Vehículos", path: "/vehiculos", icon: "🏎️", count: 39 },
    { title: "Armas", path: "/armas", icon: "⚔️", count: 10 },
    { title: "Eventos", path: "/eventos", icon: "🎬", count: 6 },
    { title: "Facciones", path: "/facciones", icon: "🚩", count: 5 },
  ];

  const sortedFilms = [...(filmsData?.results || [])].sort((a, b) => a.episode_id - b.episode_id).slice(0, 6);

  return (
    <div className={styles.home}>
      <SEO 
        title="Inicio" 
        description="Bienvenidos a los Archivos HoloNet, la base de datos definitiva de Star Wars." 
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.stars} />
        <div className={styles.heroContent}>
          <h1 className={styles.logo}>HOLONET ARCHIVES</h1>
          <p className={styles.tagline}>The Galaxy's Most Complete Database</p>
          <Button 
            variant="primary" 
            onClick={() => navigate('/personajes')}
            className={styles.cta}
          >
            EXPLORAR LA GALAXIA
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>EXPLORAR LA GALAXIA</h2>
        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.path} className={styles.categoryTile} onClick={() => navigate(cat.path)}>
              <span className={styles.tileIcon}>{cat.icon}</span>
              <div className={styles.tileInfo}>
                <h3 className={styles.tileTitle}>{cat.title}</h3>
                <span className={styles.tileCount}>{cat.count} REGISTROS</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Records */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>REGISTROS RECIENTES</h2>
        <div className={styles.recentGrid}>
          {loadingRecent ? (
            <div className={styles.placeholder}>Sincronizando con el Borde Exterior...</div>
          ) : (
            recentData?.results?.slice(0, 4).map(char => {
              const id = extractIdFromUrl(char.url);
              return (
                <EntityCard 
                  key={char.url}
                  id={id}
                  name={char.name}
                  category="personajes"
                  image={getCharacterImage(id)}
                  tags={[char.gender]}
                />
              )
            })
          )}
        </div>
      </section>

      {/* Galactic Events Mini Timeline */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>EVENTOS GALÁCTICOS</h2>
        <div className={styles.miniTimeline}>
          {loadingFilms ? (
            <div className={styles.placeholder}>Cargando cronología...</div>
          ) : (
            sortedFilms.map(film => (
              <div 
                key={film.url} 
                className={styles.timelineCard}
                onClick={() => navigate(`/eventos/${extractIdFromUrl(film.url)}`)}
              >
                <div className={styles.episodeId}>{film.episode_id}</div>
                <div className={styles.filmInfo}>
                  <h4 className={styles.filmTitle}>{film.title}</h4>
                  <p className={styles.filmDate}>{film.release_date.split('-')[0]}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
