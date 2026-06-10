import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
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

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>ARCHIVOS DISPONIBLES</h2>
        <div className={styles.grid}>
          <CategoryCard title="Personajes" path="/personajes" icon="👤" />
          <CategoryCard title="Planetas" path="/planetas" icon="🪐" />
          <CategoryCard title="Naves" path="/naves" icon="🚀" />
          <CategoryCard title="Especies" path="/especies" icon="🧬" />
          <CategoryCard title="Vehículos" path="/vehiculos" icon="🏎️" />
          <CategoryCard title="Armas" path="/armas" icon="⚔️" />
          <CategoryCard title="Eventos" path="/eventos" icon="🎬" />
          <CategoryCard title="Facciones" path="/facciones" icon="🚩" />
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, path, icon }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(path)}>
      <span className={styles.cardIcon}>{icon}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardLine} />
    </div>
  );
};

export default HomePage;
