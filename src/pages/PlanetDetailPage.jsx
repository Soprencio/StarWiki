import React from 'react';
import EntityDetailPage from '../components/layout/EntityDetailPage';
import { planetsConfig } from '../api/planets';

const PlanetDetailPage = () => {
  return <EntityDetailPage config={planetsConfig.detail} />;
};

export default PlanetDetailPage;
