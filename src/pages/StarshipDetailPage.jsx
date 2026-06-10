import React from 'react';
import EntityDetailPage from '../components/layout/EntityDetailPage';
import { starshipsConfig } from '../api/starships';

const StarshipDetailPage = () => {
  return <EntityDetailPage config={starshipsConfig.detail} />;
};

export default StarshipDetailPage;
