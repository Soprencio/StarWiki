import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Personajes', path: '/personajes' },
    { name: 'Planetas', path: '/planetas' },
    { name: 'Naves', path: '/naves' },
    { name: 'Especies', path: '/especies' },
    { name: 'Vehículos', path: '/vehiculos' },
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
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar en el archivo..."
          className={styles.searchBar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
