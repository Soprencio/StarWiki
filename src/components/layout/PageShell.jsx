import React from 'react';
import Navbar from './Navbar';
import GlobalSearch from './GlobalSearch';
import ProgressBar from '../ui/ProgressBar';
import PageTransition from './PageTransition';
import ScrollToTop from '../utils/ScrollToTop';
import ErrorBoundary from '../ErrorBoundary';
import styles from './PageShell.module.css';

const PageShell = ({ children }) => {
  return (
    <div className={styles.shell}>
      <a href="#main-content" className={styles.skipLink}>
        Saltar al contenido principal
      </a>
      <ScrollToTop />
      <ProgressBar />
      <Navbar />
      <GlobalSearch />
      <main id="main-content" className={styles.mainContent} role="main" aria-label="Contenido Principal">
        <ErrorBoundary>
          <PageTransition>
            {children}
          </PageTransition>
        </ErrorBoundary>
      </main>
      <footer className={styles.footer} role="contentinfo">
        &copy; {new Date().getFullYear()} HOLONET ARCHIVES - DATABANK SYSTEM V1.0.42
      </footer>
    </div>
  );
};

export default PageShell;
