import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { extractIdFromUrl, getCharacterImage, getPlanetImage, getStarshipImage, getVehicleImage, getSpeciesImage } from '../../utils/helpers';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import EmptyState from '../feedback/EmptyState';
import styles from './GlobalSearch.module.css';

const GlobalSearch = () => {
  const { query, setQuery, results, loading, isOpen, closeSearch } = useSearch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? closeSearch() : window.dispatchEvent(new CustomEvent('open-search'));
      }
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeSearch]);

  if (!isOpen) return null;

  const handleResultClick = (category, id) => {
    const pathMap = {
      'people': 'personajes',
      'planets': 'planetas',
      'starships': 'naves',
      'vehicles': 'vehiculos',
      'species': 'especies'
    };
    navigate(`/${pathMap[category]}/${id}`);
    closeSearch();
  };

  const getImage = (category, id) => {
    const map = {
      'people': getCharacterImage,
      'planets': getPlanetImage,
      'starships': getStarshipImage,
      'vehicles': getVehicleImage,
      'species': getSpeciesImage
    };
    return map[category] ? map[category](id) : null;
  };

  const Thumbnail = ({ src, alt }) => {
    const [imgSrc, setImgSrc] = useState(src);
    if (!imgSrc) return null;
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={styles.thumbnail}
        onError={() => setImgSrc(null)}
      />
    );
  };

  return (
    <div className={styles.overlay} onClick={closeSearch}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <header className={styles.header}>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Buscar en la galaxia... (Esc para salir)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </header>

        <div className={styles.resultsContainer}>
          {loading && (
            <div className={styles.loading}>
              <LoadingSkeleton variant="text" count={10} />
            </div>
          )}

          {!loading && Object.keys(results).length === 0 && query.length >= 2 && (
            <EmptyState message={`La galaxia no encontró resultados para "${query}"`} />
          )}

          {!loading && Object.entries(results).map(([catLabel, group]) => (
            <div key={catLabel} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{catLabel}</h3>
              <div className={styles.resultList}>
                {group.items.map(item => {
                  const id = extractIdFromUrl(item.url);
                  return (
                    <div 
                      key={item.url} 
                      className={styles.resultItem}
                      onClick={() => handleResultClick(group.categoryKey, id)}
                    >
                      <Thumbnail src={getImage(group.categoryKey, id)} alt={item.name} />
                      <div className={styles.itemInfo}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemType}>{catLabel.slice(0, -1)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {query.length < 2 && (
            <div className={styles.hint}>
              Ingresa al menos 2 caracteres para iniciar el escaneo...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
