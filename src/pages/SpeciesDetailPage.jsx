import React from 'react';
import EntityDetailPage from '../components/layout/EntityDetailPage';
import { speciesConfig } from '../api/species';

const SpeciesDetailPage = () => {
  return <EntityDetailPage config={speciesConfig.detail} />;
};

export default SpeciesDetailPage;
