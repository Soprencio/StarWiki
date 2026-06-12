import React, { useState, useEffect, useRef, useCallback } from 'react';
import { swapi } from '../../api/swapi';
import { useFilters } from '../../context/FilterContext';
import EntityCard from '../entities/EntityCard';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import ErrorState from '../feedback/ErrorState';
import EmptyState from '../feedback/EmptyState';
import FilterPanel from './FilterPanel';
import styles from './EntityListPage.module.css';
import SEO from '../utils/SEO';

const EntityListPage = ({ config }) => {
  const { title, subtitle, category, getImage, getTags, getBadge, filterConfig = [], emptyMessage } = config;
  const { filters } = useFilters();
  
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const observer = useRef();
  const activeFilters = filters[category] || {};

  // Handle Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset when search or category change (Requires new fetch)
  useEffect(() => {
    setPage(1);
    setResults([]);
    setHasMore(true);
    setLoading(true);
    setError(null);
  }, [debouncedSearch, category]);

  // Just reset page and results if category changes (redundant with above but safe)
  // We don't reset when activeFilters change because filtering is local
  // and we don't want to show the global loading skeleton.

  const fetchFn = useCallback((signal, p) => {
    if (debouncedSearch) {
      return swapi.search(category, debouncedSearch, signal);
    }
    const categoryToMethod = {
      people: (p, s) => swapi.getPeople(p, s),
      planets: (p, s) => swapi.getPlanets(p, s),
      starships: (p, s) => swapi.getStarships(p, s),
      vehicles: (p, s) => swapi.getVehicles(p, s),
      species: (p, s) => swapi.getSpecies(p, s),
    };
    return categoryToMethod[category](p, signal);
  }, [category, debouncedSearch]);

  // Main Data Loading Effect
  useEffect(() => {
    const controller = new AbortController();
    
    const loadData = async () => {
      try {
        const data = await fetchFn(controller.signal, page);
        
        setResults(prev => {
          if (page === 1) return data.results;
          // Avoid duplicates by checking URL
          const newResults = [...prev];
          data.results.forEach(item => {
            if (!newResults.find(r => r.url === item.url)) {
              newResults.push(item);
            }
          });
          return newResults;
        });

        setHasMore(!!data.next);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("HoloNet Fetch Error:", err);
          setError("Error al sincronizar con la base de datos galáctica.");
        }
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    loadData();

    return () => controller.abort();
  }, [page, fetchFn]);

  // Intersection Observer for Infinite Scroll
  const lastElementRef = useCallback(node => {
    if (loading || loadingMore) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setLoadingMore(true);
        setPage(prev => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, loadingMore, hasMore]);

  // Local Filtering
  const filteredResults = results.filter((item) => {
    return Object.entries(activeFilters).every(([key, value]) => {
      if (!value || value === 'all' || (Array.isArray(value) && value.length === 0)) return true;
      if (Array.isArray(value)) return value.includes(item[key]);
      return item[key] === value;
    });
  });

  return (
    <div className={styles.page}>
      <SEO title={title} description={subtitle} />
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {filterConfig.length > 0 && (
            <FilterPanel category={category} config={filterConfig} />
          )}
        </div>
      </header>

      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={`Buscar ${title.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && page === 1 && (
        <LoadingSkeleton variant="card" count={6} />
      )}

      {error && !loading && (
        <ErrorState message={error} onRetry={() => setLoading(true)} />
      )}

      {!loading && !error && filteredResults.length === 0 && (
        <EmptyState message={emptyMessage || "No se encontraron registros en este sector de la galaxia."} />
      )}

      <div className={styles.grid}>
        {filteredResults.map((item, index) => {
          const id = item.url.split('/').filter(Boolean).pop();
          const isLast = index === filteredResults.length - 1;
          return (
            <div key={item.url} ref={isLast ? lastElementRef : null}>
              <EntityCard
                id={id}
                name={item.name}
                image={getImage(id)}
                category={category === 'people' ? 'personajes' : category}
                tags={getTags(item)}
                badge={getBadge ? getBadge(item) : null}
              />
            </div>
          );
        })}
      </div>

      {loadingMore && (
        <div style={{ marginTop: '2rem' }}>
          <LoadingSkeleton variant="card" count={3} />
        </div>
      )}

      {!hasMore && results.length > 0 && (
        <div className={styles.endMessage}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>Has explorado toda la galaxia conocida</span>
        </div>
      )}
    </div>
  );
};

export default EntityListPage;
