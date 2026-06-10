import React from 'react';
import Button from './Button';
import styles from './Pagination.module.css';

const Pagination = ({ current, total, onNext, onPrev }) => {
  const totalPages = Math.ceil(total / 10);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <Button 
        variant="secondary" 
        onClick={onPrev} 
        disabled={current === 1}
      >
        Anterior
      </Button>
      
      <div className={styles.info}>
        Página <span className={styles.currentPage}>{current}</span> de {totalPages}
      </div>

      <Button 
        variant="secondary" 
        onClick={onNext} 
        disabled={current === totalPages}
      >
        Siguiente
      </Button>
    </div>
  );
};

export default Pagination;
