import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import styles from './Navbar.module.css';

const Navbar = memo(() => {
  const { openSearch } = useSearch();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Personajes', path: '/personajes' },
    { name: 'Planetas', path: '/planetas' },
    { name: 'Naves', path: '/naves' },
    { name: 'Especies', path: '/especies' },
    { name: 'Vehículos', path: '/vehiculos' },
    { name: 'Armas', path: '/armas' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Facciones', path: '/facciones' },
  ];

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        HOLONET ARCHIVES
      </Link>

      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={`Ir a ${item.name}`}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className={styles.searchContainer} onClick={openSearch} aria-label="Abrir búsqueda global (Ctrl+K)">
        <div className={styles.searchTrigger}>
          <svg className={styles.searchIcon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className={styles.searchShortcut}>Ctrl+K</span>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
