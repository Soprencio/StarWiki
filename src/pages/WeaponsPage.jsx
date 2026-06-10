import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { WEAPONS } from '../data/weapons';
import Button from '../components/ui/Button';
import styles from './WeaponsPage.module.css';

const TYPES = ['all', 'Sable de Luz', 'Bláster', 'Rifle', 'Explosivo', 'Cuerpo a cuerpo'];

const WeaponsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredWeapons = WEAPONS.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || w.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>ARMAMENTO GALÁCTICO</h1>
        <p className={styles.subtitle}>Tecnología ofensiva y defensiva de las diversas facciones</p>
      </header>

      <div className={styles.filters}>
        <input 
          type="text" 
          placeholder="Buscar arma..." 
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.chipGroup}>
          {TYPES.map(type => (
            <button
              key={type}
              className={`${styles.chip} ${typeFilter === type ? styles.chipActive : ''}`}
              onClick={() => setTypeFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredWeapons.map(weapon => (
          <div 
            key={weapon.id} 
            className={styles.card}
            onClick={() => navigate(`/armas/${weapon.id}`)}
          >
            <div className={styles.imageWrapper}>
              <img src={weapon.image} alt={weapon.name} className={styles.image} />
              <div className={styles.overlay} />
            </div>
            <div className={styles.content}>
              <span className={styles.type}>{weapon.type}</span>
              <h2 className={styles.name}>{weapon.name}</h2>
              <p className={styles.affiliation}>{weapon.affiliation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponsPage;
