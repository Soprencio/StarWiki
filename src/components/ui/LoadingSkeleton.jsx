import React from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton = ({ variant = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count });

  const renderSkeleton = (v, i) => (
    <div 
      key={i} 
      className={`${styles.skeleton} ${styles[v]}`} 
      aria-hidden="true"
    />
  );

  return (
    <div aria-busy="true" aria-live="polite">
      {variant === 'card' && count > 1 ? (
        <div className={styles.grid}>
          {skeletons.map((_, i) => renderSkeleton('card', i))}
        </div>
      ) : (
        skeletons.map((_, i) => renderSkeleton(variant, i))
      )}
    </div>
  );
};

export default LoadingSkeleton;
