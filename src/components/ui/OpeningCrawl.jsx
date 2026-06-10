import React, { useState, useEffect, useRef } from 'react';
import styles from './OpeningCrawl.module.css';

const OpeningCrawl = ({ title, episode, text }) => {
  const [paused, setPaused] = useState(false);
  const crawlRef = useRef(null);

  const togglePause = () => {
    setPaused(!paused);
  };

  return (
    <div className={styles.starWarsContainer}>
      <button className={styles.pauseButton} onClick={togglePause}>
        {paused ? 'REANUDAR' : 'PAUSAR'}
      </button>

      <div className={`${styles.fade} ${paused ? styles.paused : ''}`} />

      <section className={`${styles.crawlContainer} ${paused ? styles.paused : ''}`}>
        <div className={styles.crawlContent} ref={crawlRef}>
          <div className={styles.title}>
            <p>Episodio {episode}</p>
            <h1>{title}</h1>
          </div>
          
          {text.split('\r\n\r\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpeningCrawl;
