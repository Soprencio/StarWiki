import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { swapi } from '../../api/swapi';
import { 
  extractIdFromUrl, 
  PLACEHOLDER_IMAGE,
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
 * Generic Entity Detail Page
 * @param {Object} config - { category, getTitle, getSubtitle, getImage, getStats, relatedSections: [{ title, key, getEntityImage, getEntityPath, getEntityTitle, getEntitySubtitle }] }
 */
const EntityDetailPage = ({ config }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { category, getTitle, getSubtitle, getImage, getStats, relatedSections = [] } = config;

  const fetchFn = (signal) => {
    const categoryToMethod = {
      people: (id, s) => swapi.getPerson(id, s),
      planets: (id, s) => swapi.getPlanet(id, s),
      starships: (id, s) => swapi.getStarship(id, s),
      vehicles: (id, s) => swapi.getVehicle(id, s),
      species: (id, s) => swapi.getSpecie(id, s),
    };
    return categoryToMethod[category](id, signal);
  };

  const { data: entity, loading, error } = useFetch((s) => fetchFn(s), [id, category]);

  // Handle related data fetching
  const [relatedData, setRelatedData] = useState({});
  const [loadingRelated, setLoadingRelated] = useState({});

  useEffect(() => {
    if (entity) {
      relatedSections.forEach(section => {
        const urls = entity[section.key];
        if (!urls) return;

        const urlList = Array.isArray(urls) ? urls : [urls];
        if (urlList.length === 0) return;

        setLoadingRelated(prev => ({ ...prev, [section.key]: true }));
        
        Promise.all(urlList.map(url => fetch(url).then(res => res.json())))
          .then(results => {
            setRelatedData(prev => ({ ...prev, [section.key]: results }));
          })
          .finally(() => {
            setLoadingRelated(prev => ({ ...prev, [section.key]: false }));
          });
      });
    }
  }, [entity, relatedSections]);

  if (loading) return (
    <div className={styles.container} aria-busy="true" aria-live="polite">
      <LoadingSkeleton variant="detail" />
      <LoadingSkeleton variant="stats" />
      <div className={styles.relationGrid}>
        <LoadingSkeleton variant="relation" count={3} />
      </div>
    </div>
  );
  if (error) return <ErrorState message={error} onRetry={() => window.location.reload()} />;
  if (!entity) return <ErrorState message="Registro no encontrado" />;

  const backPath = category === 'people' ? '/personajes' : `/${category}`;

  return (
    <div className={styles.container}>
      <SEO 
        title={getTitle(entity)} 
        description={getSubtitle(entity, relatedData)} 
        image={getImage(id)}
      />
      <div className={styles.backButton}>
        <Button variant="ghost" onClick={() => navigate(backPath)}>
          ← VOLVER A {category.toUpperCase()}
        </Button>
      </div>

      {/* Hero Banner */}
      <section className={styles.hero}>
        <img 
          src={getImage(id)} 
          alt={getTitle(entity)} 
          className={styles.heroImage}
          onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
        />
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge}>{category.slice(0, -1).toUpperCase()}</span>
          <h1 className={styles.name}>{getTitle(entity)}</h1>
          <p className={styles.subtitle}>{getSubtitle(entity, relatedData)}</p>
        </div>
      </section>

      {/* Dossier Panel */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>DATOS DEL ARCHIVO</span>
          <div className={styles.sectionLine} />
        </div>
        <StatGrid stats={getStats(entity)} />
      </section>

      {/* Related Sections */}
      {relatedSections.map(section => {
        const data = relatedData[section.key] || [];
        const isLoading = loadingRelated[section.key];

        if (!isLoading && data.length === 0) return null;

        return (
          <section key={section.key} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>{section.title}</span>
              <div className={styles.sectionLine} />
            </div>
            {isLoading ? (
              <div className={styles.relationGrid}><LoadingSkeleton variant="card" count={3} /></div>
            ) : (
              <div className={styles.relationGrid}>
                {data.map(item => {
                  const itemId = extractIdFromUrl(item.url);
                  return (
                    <RelationCard 
                      key={item.url}
                      id={itemId}
                      title={section.getEntityTitle(item)}
                      subtitle={section.getEntitySubtitle(item)}
                      image={section.getEntityImage(itemId)}
                      path={section.getEntityPath ? section.getEntityPath(itemId) : null}
                    />
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

const RelationCard = ({ id, title, subtitle, image, path }) => {
  const CardContent = (
    <div className={styles.miniCard}>
      <img 
        src={image} 
        alt={title} 
        className={styles.miniImage} 
        onError={(e) => { e.target.src = PLACEHOLDER_IMAGE; }}
      />
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
