import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start animation on route change
    setVisible(true);
    setProgress(30);

    const timer = setTimeout(() => {
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
      return () => clearTimeout(hideTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, [location]);

  if (!visible) return null;

  return (
    <div 
      className={styles.container} 
      role="progressbar" 
      aria-valuenow={progress} 
      aria-valuemin="0" 
      aria-valuemax="100"
    >
      <div 
        className={styles.bar} 
        style={{ width: `${progress}%` }} 
      />
      <div className={styles.glow} style={{ left: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
