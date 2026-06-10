import React from 'react';
import EntityListPage from '../components/layout/EntityListPage';
import { speciesConfig } from '../api/species';

const SpeciesPage = () => {
  return <EntityListPage config={speciesConfig.list} />;
};

export default SpeciesPage;
