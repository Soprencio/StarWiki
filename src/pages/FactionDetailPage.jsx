import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FACTIONS } from '../data/factions';
import { swapi } from '../api/swapi';
import { 
  extractIdFromUrl, 
  getCharacterImage, 
  getPlanetImage, 
  getStarshipImage, 
  PLACEHOLDER_IMAGE 
} from '../utils/helpers';
import Button from '../components/ui/Button';
import FactionIcon from '../components/ui/FactionIcon';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import styles from './FactionDetailPage.module.css';

const FactionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const faction = FACTIONS.find(f => f.id === id);

  const [members, setMembers] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [ships, setShips] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (faction) {
      setLoading(true);
      
      const memberPromises = faction.memberIds.map(id => swapi.getPerson(id));
      const planetPromises = faction.notablePlanets.map(id => swapi.getPlanet(id));
      const shipPromises = faction.notableShips.map(id => swapi.getStarship(id));

      Promise.all([
        Promise.all(memberPromises),
        Promise.all(planetPromises),
        Promise.all(shipPromises)
      ]).then(([membersData, planetsData, shipsData]) => {
        setMembers(membersData);
        setPlanets(planetsData);
        setShips(shipsData);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [faction]);

  if (!faction) return <div>Facción no encontrada</div>;

  return (
    <div className={styles.container} style={{ '--faction-color': faction.color }}>
      <div className={styles.backButton}>
        <Button variant="ghost" onClick={() => navigate('/facciones')}>
          ← VOLVER A FACCIONES
        </Button>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.symbolBackground}>
            <FactionIcon symbol={faction.symbol} color={faction.color} size={400} />
          </div>
          <h1 className={styles.name}>{faction.name}</h1>
          <p className={styles.subtitle}>{faction.subtitle}</p>
          <div className={styles.meta}>
            <span className={styles.alignment} data-align={faction.alignment}>
              {faction.alignment === 'light' ? 'Lado Luminoso' : faction.alignment === 'dark' ? 'Lado Oscuro' : 'Neutral'}
            </span>
            <span className={styles.era}>{faction.era.join(', ')}</span>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>DESCRIPCIÓN OPERATIVA</span>
          <div className={styles.sectionLine} />
        </div>
        <p className={styles.description}>{faction.description}</p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>MIEMBROS NOTABLES</span>
          <div className={styles.sectionLine} />
        </div>
        {loading ? (
          <div className={styles.grid}><LoadingSkeleton variant="card" count={3} /></div>
        ) : (
          <div className={styles.grid}>
            {members.map(member => (
              <RelationCard 
                key={member.url}
                id={extractIdFromUrl(member.url)}
                title={member.name}
                subtitle="Personaje"
                image={getCharacterImage(extractIdFromUrl(member.url))}
                path={`/personajes/${extractIdFromUrl(member.url)}`}
              />
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>MUNDOS DE INFLUENCIA</span>
          <div className={styles.sectionLine} />
        </div>
        {loading ? (
          <div className={styles.grid}><LoadingSkeleton variant="card" count={2} /></div>
        ) : (
          <div className={styles.grid}>
            {planets.map(planet => (
              <RelationCard 
                key={planet.url}
                id={extractIdFromUrl(planet.url)}
                title={planet.name}
                subtitle="Planeta"
                image={getPlanetImage(extractIdFromUrl(planet.url))}
                path={`/planetas/${extractIdFromUrl(planet.url)}`}
              />
            ))}
          </div>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>ACTIVOS ESPACIALES</span>
          <div className={styles.sectionLine} />
        </div>
        {loading ? (
          <div className={styles.grid}><LoadingSkeleton variant="card" count={2} /></div>
        ) : (
          <div className={styles.grid}>
            {ships.map(ship => (
              <RelationCard 
                key={ship.url}
                id={extractIdFromUrl(ship.url)}
                title={ship.name}
                subtitle={ship.model}
                image={getStarshipImage(extractIdFromUrl(ship.url))}
                path={`/naves/${extractIdFromUrl(ship.url)}`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const RelationCard = ({ id, title, subtitle, image, path }) => (
  <Link to={path} className={styles.miniCard}>
    <img 
      src={image} 
      alt={title} 
      className={styles.miniImage} 
      onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
    />
    <div className={styles.miniContent}>
      <div className={styles.miniTitle}>{title}</div>
      <div className={styles.miniSubtitle}>{subtitle}</div>
    </div>
  </Link>
);

export default FactionDetailPage;
