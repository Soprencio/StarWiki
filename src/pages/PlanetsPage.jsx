import React from 'react';
import EntityListPage from '../components/layout/EntityListPage';
import { planetsConfig } from '../api/planets';

const PlanetsPage = () => {
  return <EntityListPage config={planetsConfig.list} />;
};

export default PlanetsPage;
