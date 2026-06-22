import React, { useState } from 'react';
import styles from './OpeningCrawl.module.css';

const OpeningCrawl = ({ text }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.pause} onClick={() => setPaused(!paused)}>
        {paused ? 'REANUDAR' : 'PAUSAR'}
      </button>

      <div className={styles.overlay} />

      <div className={`${styles.wrapper} ${paused ? styles.pausedWrapper : ''}`}>
        <div className={styles.content}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default OpeningCrawl;