import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  loading = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <div className={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button;
