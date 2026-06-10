import React from 'react';
import Navbar from './Navbar';
import styles from './PageShell.module.css';

const PageShell = ({ children }) => {
  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} HOLONET ARCHIVES - DATABANK SYSTEM V1.0.42
      </footer>
    </div>
  );
};

export default PageShell;
