import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { swapi } from '../../api/swapi';
import EntityCard from '../entities/EntityCard';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import ErrorState from '../feedback/ErrorState';
import EmptyState from '../feedback/EmptyState';
import Pagination from '../ui/Pagination';
import Button from '../ui/Button';
import styles from './EntityListPage.module.css';

/**
 * Generic Entity List Page
 * @param {Object} config - { title, subtitle, category, getImage, getTags, getBadge, filters: [{ key, options }] }
 */
const EntityListPage = ({ config }) => {
  const { title, subtitle, category, getImage, getTags, getBadge, filters = [] } = config;
  
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({});
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchFn = (signal) => {
    if (debouncedSearch) {
      return swapi.search(category, debouncedSearch, signal);
    }
    // Mapping category to swapi methods
    const categoryToMethod = {
      people: (p, s) => swapi.getPeople(p, s),
      planets: (p, s) => swapi.getPlanets(p, s),
      starships: (p, s) => swapi.getStarships(p, s),
      vehicles: (p, s) => swapi.getVehicles(p, s),
      species: (p, s) => swapi.getSpecies(p, s),
    };
    return categoryToMethod[category](page, signal);
  };

  const { data, loading, error } = useFetch(fetchFn, [page, debouncedSearch, category]);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => prev - 1);

  const clearFilters = () => {
    setSearchTerm('');
    setActiveFilters({});
    setPage(1);
  };

  const updateFilter = (key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }));
    setPage(1);
  };

  const filteredResults = data?.results?.filter((item) => {
    return Object.entries(activeFilters).every(([key, value]) => {
      if (!value || value === 'all') return true;
      return item[key] === value;
    });
  }) || [];

  const hasActiveFilters = searchTerm !== '' || Object.values(activeFilters).some(v => v && v !== 'all');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>

      <div className={styles.filters}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={`Buscar por nombre...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filters.map(filter => (
          <div key={filter.key} className={styles.chipGroup}>
            {filter.options.map((option) => (
              <button
                key={option}
                className={`${styles.chip} ${activeFilters[filter.key] === option || (!activeFilters[filter.key] && option === 'all') ? styles.chipActive : ''}`}
                onClick={() => updateFilter(filter.key, option)}
              >
                {option}
              </button>
            ))}
          </div>
        ))}

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters}>
            Limpiar Filtros
          </Button>
        )}
      </div>

      {loading && <LoadingSkeleton variant="card" count={6} />}

      {!loading && error && (
        <ErrorState message={error} onRetry={() => setPage(page)} />
      )}

      {!loading && !error && filteredResults.length === 0 && (
        <EmptyState message={hasActiveFilters ? "No se encontraron resultados con los criterios seleccionados." : "Los archivos parecen estar vacíos."} />
      )}

      {!loading && !error && filteredResults.length > 0 && (
        <>
          <div className={styles.grid}>
            {filteredResults.map((item) => {
              const id = item.url.split('/').filter(Boolean).pop();
              return (
                <EntityCard
                  key={item.url}
                  id={id}
                  name={item.name}
                  image={getImage(id)}
                  category={category === 'people' ? 'personajes' : category}
                  tags={getTags(item)}
                  badge={getBadge ? getBadge(item) : null}
                />
              );
            })}
          </div>

          {!debouncedSearch && (
            <Pagination
              current={page}
              total={data.count}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default EntityListPage;
