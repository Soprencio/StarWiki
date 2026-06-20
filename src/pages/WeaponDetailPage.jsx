import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WEAPONS } from '../data/weapons';
import { swapi } from '../api/swapi';
import { getCharacterImage, extractIdFromUrl } from '../utils/helpers';
import Button from '../components/ui/Button';
import StatGrid from '../components/ui/StatGrid';
import EntityCard from '../components/entities/EntityCard';
import styles from './WeaponDetailPage.module.css';

const WeaponDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const weapon = WEAPONS.find(w => w.id === id);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (weapon && weapon.knownUsers.length > 0) {
      setLoading(true);
      Promise.all(weapon.knownUsers.map(uid => swapi.getPerson(uid)))
        .then(data => setUsers(data))
        .finally(() => setLoading(false));
    }
  }, [weapon]);

  if (!weapon) return <div>Arma no encontrada</div>;

  return (
    <div className={styles.container}>
      <Button variant="ghost" onClick={() => navigate('/armas')} className={styles.backBtn}>
        ← VOLVER A ARMAMENTO
      </Button>

      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <img src={weapon.image} alt={weapon.name} className={styles.image} />
          <div className={styles.gradient} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.type}>{weapon.type}</span>
          <h1 className={styles.name}>{weapon.name}</h1>
          <p className={styles.affiliation}>{weapon.affiliation}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>ESPECIFICACIONES TÉCNICAS</span>
          <div className={styles.sectionLine} />
        </div>
        <StatGrid stats={[
          { label: 'DAÑO', value: weapon.stats.damage },
          { label: 'ALCANCE', value: weapon.stats.range },
          { label: 'PESO', value: weapon.stats.weight },
          { label: 'TIPO', value: weapon.type },
        ]} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>DESCRIPCIÓN OPERATIVA</span>
          <div className={styles.sectionLine} />
        </div>
        <p className={styles.description}>{weapon.description}</p>
      </section>

      {weapon.knownUsers.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>USUARIOS DESTACADOS</span>
            <div className={styles.sectionLine} />
          </div>
          <div className={styles.grid}>
            {users.map(user => (
              <EntityCard 
                key={user.url}
                id={extractIdFromUrl(user.url)}
                name={user.name}
                category="personajes"
                image={getCharacterImage(extractIdFromUrl(user.url))}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default WeaponDetailPage;
