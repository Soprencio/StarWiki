import React from 'react';
import EntityListPage from '../components/layout/EntityListPage';
import { starshipsConfig } from '../api/starships';

const StarshipsPage = () => {
  return <EntityListPage config={starshipsConfig.list} />;
};

export default StarshipsPage;
