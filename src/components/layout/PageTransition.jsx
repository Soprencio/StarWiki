import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className={styles.fadeIn}>
      {children}
    </div>
  );
};

export default PageTransition;
