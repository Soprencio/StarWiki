import React from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton = ({ variant = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count });

  if (variant === 'card' && count > 1) {
    return (
      <div className={styles.grid}>
        {skeletons.map((_, i) => (
          <div key={i} className={`${styles.skeleton} ${styles.card}`} />
        ))}
      </div>
    );
  }

  return (
    <>
      {skeletons.map((_, i) => (
        <div key={i} className={`${styles.skeleton} ${styles[variant]}`} />
      ))}
    </>
  );
};

export default LoadingSkeleton;
