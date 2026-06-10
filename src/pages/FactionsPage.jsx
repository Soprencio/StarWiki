import React from 'react';
import { Link } from 'react-router-dom';
import { FACTIONS } from '../data/factions';
import FactionIcon from '../components/ui/FactionIcon';
import styles from './FactionsPage.module.css';

const FactionsPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>FACCIONES</h1>
        <p className={styles.subtitle}>Las potencias y organizaciones que moldean la historia de la galaxia</p>
      </header>

      <div className={styles.grid}>
        {FACTIONS.map((faction) => (
          <Link 
            key={faction.id} 
            to={`/facciones/${faction.id}`}
            className={styles.card}
            style={{ '--faction-color': faction.color }}
          >
            <div className={styles.iconWrapper}>
              <FactionIcon symbol={faction.symbol} color={faction.color} size={64} />
            </div>
            <div className={styles.content}>
              <h2 className={styles.name}>{faction.name}</h2>
              <p className={styles.factionSubtitle}>{faction.subtitle}</p>
              <p className={styles.description}>{faction.description}</p>
              <div className={styles.footer}>
                <span className={styles.alignment} data-align={faction.alignment}>
                  {faction.alignment === 'light' ? 'Lado Luminoso' : faction.alignment === 'dark' ? 'Lado Oscuro' : 'Neutral'}
                </span>
                <span className={styles.era}>{faction.era[0]}</span>
              </div>
            </div>
            <div className={styles.cardBackground} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FactionsPage;
