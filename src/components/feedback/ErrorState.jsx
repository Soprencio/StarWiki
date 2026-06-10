import React from 'react';
import Button from '../ui/Button';
import styles from './ErrorState.module.css';

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TRANSMISSION FAILED</h2>
      <p className={styles.message}>{message || 'Interferencia en la señal del Borde Exterior. No se pudo recuperar la información.'}</p>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          REINTENTAR CONEXIÓN
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
