import React from 'react';
import styles from './EmptyState.module.css';

const EmptyState = ({ message }) => {
  return (
    <div className={styles.container}>
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <h3 className={styles.title}>Sin registros en los Archivos HoloNet</h3>
      <p className={styles.message}>{message || 'La búsqueda no arrojó resultados compatibles con los filtros aplicados.'}</p>
    </div>
  );
};

export default EmptyState;
