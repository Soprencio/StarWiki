import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { swapi } from '../../api/swapi';
import {
  extractIdFromUrl,
  getCharacterImage,
  getPlanetImage,
  getFilmImage,
  getStarshipImage,
  getVehicleImage
} from '../../utils/helpers';
import Button from '../ui/Button';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import ErrorState from '../feedback/ErrorState';
import StatGrid from '../ui/StatGrid';
import styles from './EntityDetailPage.module.css';
import SEO from '../utils/SEO';

/**
 * Generic Entity Detail Page (aligned with plan)
 * Expects config with:
 *   - title: string (e.g., 'PERSONAJES')
 *   - getImage: (id) => string URL
      *   - getStats: (entity) => Array<{label, value}>
      *   - relatedSections: Array<{
 *        title: string,
 *        key: string, // entity property containing URLs
 *        getEntityImage: (item) => string,
 *        getEntityPath: (item) => string | null,
 *        getEntityTitle: (item) => string,
 *        getEntitySubtitle: (item) => string
 *      }>
 */
const EntityDetailPage = ({ config }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, getImage, getStats, relatedSections = [] } = config;

  // Determine title and SWAPI category
  let titleToUse = config.title;
  const categoryMap = {
    personajes: 'people',
    planetas: 'planets',
    naves: 'starships',
    vehiculos: 'vehicles',
    especies: 'species',
    films: 'films'
  };
  const reverseCategoryMap = {
    people: 'PERSONAJES',
    planets: 'PLANETAS',
    starships: 'NAVES',
    vehicles: 'VEHICULOS',
    species: 'ESPECIES',
    films: 'PELÍCULAS'
  };
  if (!titleToUse && config.category) {
    titleToUse = reverseCategoryMap[config.category] || config.category.toUpperCase();
  }
  const category = titleToUse ? categoryMap[titleToUse.toLowerCase()] : (config.category || '');

  const fetchFn = (signal) => {
    switch (category) {
      case 'people': return swapi.getPerson(id, signal);
      case 'planets': return swapi.getPlanet(id, signal);
      case 'starships': return swapi.getStarship(id, signal);
      case 'vehicles': return swapi.getVehicle(id, signal);
      case 'species': return swapi.getSpecie(id, signal);
      case 'films': return swapi.getFilm(id, signal);
      default: throw new Error(`Unsupported category: ${category}`);
    }
  };

  const { data: entity, loading, error } = useFetch((s) => fetchFn(s), [id, category]);

  // Related data fetching
  const [relatedData, setRelatedData] = useState({});
  const [loadingRelated, setLoadingRelated] = useState({});

  useEffect(() => {
    if (entity) {
      const requests = relatedSections.map((section) => {
        const urls = entity[section.key];
        if (!urls) return Promise.resolve([]);
        const urlList = Array.isArray(urls) ? urls : [urls];
        return Promise.all(
          urlList.map((url) =>
            fetch(url)
              .then((res) => res.json())
              .catch(() => null) // swallow error
          )
        ).then((results) => results.filter(Boolean));
      });

      Promise.all(requests).then((results) => {
        const dataToSet = {};
        relatedSections.forEach((sec, idx) => {
          dataToSet[sec.key] = results[idx] || [];
        });
        setRelatedData(dataToSet);
      });
    }
  }, [entity, relatedSections]);

  // ----- Loading -----
  if (loading) {
    return (
      <div className={styles.container} aria-busy="true" aria-live="polite">
        <LoadingSkeleton variant="detail" />
        <LoadingSkeleton variant="stats" />
        <div className={styles.relationGrid}>
          <LoadingSkeleton variant="relation" count={3} />
        </div>
      </div>
    );
  }

  // ----- Error -----
  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  // ----- Empty (should not happen) -----
  if (!entity) {
    return <ErrorState message="Registro no encontrado" />;
  }

  const backPath =
    titleToUse.toLowerCase() === 'personajes'
      ? '/personajes'
      : `/${titleToUse.toLowerCase()}s`;

  // Hero image URL
  const heroImgUrl = getImage ? getImage(extractIdFromUrl(entity.url)) : '';

  return (
    <div className={styles.container}>
      <SEO
        title={entity.name}
        description={`${titleToUse} details`}
        image={heroImgUrl}
      />
      <div className={styles.backButton}>
        <Button variant="ghost" onClick={() => navigate(backPath)}>
          ← VOLVER A {titleToUse.toUpperCase()}
        </Button>
      </div>

      {/* Hero Banner: image on right, gradient from left */}
      <section className={styles.hero}>
        {/* Left solid gradient */}
        <div className={styles.heroGradient} />
        {/* Image on right */}
        {heroImgUrl && (
          <img
            src={heroImgUrl}
            alt={entity.name}
            className={styles.heroImage}
            onError={(e) => e.target.remove()}
          />
        )}
        {/* Text content on left */}
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge}>
            {titleToUse.slice(0, -1).toUpperCase()}
          </span>
          <h1 className={styles.name}>{entity.name}</h1>
          <p className={styles.subtitle}>
            {/* Subtitle can be custom; placeholder */}
            {''}
          </p>
        </div>
      </section>

      {/* Dossier Panel */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>DATOS DEL ARCHIVO</span>
          <div className={styles.sectionLine} />
        </div>
        <StatGrid stats={getStats ? getStats(entity) : []} />
      </section>

      {/* Related Sections */}
      {relatedSections.map((section) => {
        const data = relatedData[section.key] || [];
        const isLoading = loadingRelated[section.key];

        if (!isLoading && data.length === 0) return null;

        return (
          <section key={section.key} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>{section.title}</span>
              <div className={styles.sectionLine} />
            </div>
            <div className={styles.relationGrid}>
              {isLoading ? (
                <LoadingSkeleton variant="relation" count={3} />
              ) : (
                data.map((item, index) => (
                  <RelationCard
                    key={item.url || index}
                    id={section.getEntityImage ? extractIdFromUrl(item.url) : null}
                    title={section.getEntityTitle ? section.getEntityTitle(item) : item.name || item.title}
                    subtitle={section.getEntitySubtitle ? section.getEntitySubtitle(item) : ''}
                    image={section.getEntityImage ? section.getEntityImage(item) : ''}
                    path={section.getEntityPath ? section.getEntityPath(item) : null}
                  />
                ))
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

/* RelationCard */
const RelationCard = ({ id, title, subtitle, image, path }) => {
  const [imgSrc, setImgSrc] = useState(image);

  const CardContent = (
    <div className={styles.miniCard}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className={styles.miniImage}
          onError={(e) => setImgSrc(null)}
        />
      )}
      <div className={styles.miniContent}>
        <div className={styles.miniTitle}>{title}</div>
        <div className={styles.miniSubtitle}>{subtitle}</div>
      </div>
    </div>
  );

  if (path) {
    return <Link to={path} style={{ textDecoration: 'none' }}>{CardContent}</Link>;
  }

  return CardContent;
};

export default EntityDetailPage;