import React, { memo } from 'react';
import styles from './StatGrid.module.css';

const StatGrid = memo(({ stats = [] }) => {
  return (
    <div className={styles.grid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statRow}>
          <span className={styles.statLabel}>{stat.label}</span>
          <div className={styles.statDots} />
          <span className={styles.statValue}>{stat.value || 'Desconocido'}</span>
        </div>
      ))}
    </div>
  );
});

export default StatGrid;
