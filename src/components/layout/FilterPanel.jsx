import React, { useState, memo } from 'react';
import { useFilters } from '../../context/FilterContext';
import Button from '../ui/Button';
import styles from './FilterPanel.module.css';

const FilterPanel = memo(({ category, config = [] }) => {
  const { filters, setFilter, clearFilters } = useFilters();
  const [isOpen, setIsOpen] = useState(false);

  const activeFilters = filters[category] || {};
  const activeCount = Object.values(activeFilters).reduce((acc, curr) => {
    if (Array.isArray(curr)) return acc + curr.length;
    return (curr && curr !== 'all') ? acc + 1 : acc;
  }, 0);

  const isSelected = (groupKey, value, multi) => {
    const current = activeFilters[groupKey];
    if (multi) {
      return Array.isArray(current) && current.includes(value);
    }
    return current === value || (!current && value === 'all');
  };

  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
      <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        <span>Filtros</span>
        {activeCount > 0 && <span className={styles.badge}>{activeCount}</span>}
      </button>

      <div className={styles.drawer}>
        <header className={styles.drawerHeader}>
          <h3>Filtros de Búsqueda</h3>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        </header>

        <div className={styles.content}>
          {config.map(group => (
            <div key={group.key} className={styles.filterGroup}>
              <label className={styles.groupLabel}>{group.label}</label>
              <div className={styles.options}>
                {group.options.map(opt => (
                  <button
                    key={opt.value}
                    className={`${styles.option} ${isSelected(group.key, opt.value, group.multi) ? styles.activeOption : ''}`}
                    onClick={() => setFilter(category, group.key, opt.value, group.multi)}
                  >
                    {group.multi && (
                      <span className={styles.checkbox}>
                        {isSelected(group.key, opt.value, true) && '✓'}
                      </span>
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.drawerFooter}>
          <Button variant="ghost" onClick={() => clearFilters(category)}>Limpiar Todos</Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>Aplicar</Button>
        </footer>
      </div>
    </div>
  );
});

export default FilterPanel;
