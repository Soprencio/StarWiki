import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EntityCard.module.css';

// Map API category names to Spanish route paths
const categoryPathMap = {
  people: 'personajes',
  planets: 'planetas',
  starships: 'naves',
  vehicles: 'vehiculos',
  species: 'especies'
};

const EntityCard = memo(({ id, name, image, category, tags = [], badge }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(image);

  console.log('EntityCard image prop:', image, 'id:', id, 'category:', category);

  const handleNavigate = () => {
    // Map the API category to the Spanish route path
    const pathCategory = categoryPathMap[category] || category;
    navigate(`/${pathCategory}/${id}`);
  };

  const handleError = () => {
    // Do not show placeholder; keep image empty so nothing is rendered
    setImgSrc(null);
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      {badge && <span className={styles.badge}>{badge}</span>}
      <div className={styles.imageContainer}>
        {imgSrc && (
          <img
            src={imgSrc}
            alt={name}
            className={styles.image}
            onError={handleError}
            loading="lazy"
          />
        )}
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
