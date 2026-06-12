import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PLACEHOLDER_IMAGE } from '../../utils/helpers';
import styles from './EntityCard.module.css';

const EntityCard = memo(({ id, name, image, category, tags = [], badge }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(image);

  const handleNavigate = () => {
    navigate(`/${category}/${id}`);
  };

  const handleError = () => {
    setImgSrc(PLACEHOLDER_IMAGE);
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.imageContainer}>
        <img 
          src={imgSrc} 
          alt={name} 
          className={styles.image} 
          onError={handleError}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default EntityCard;
