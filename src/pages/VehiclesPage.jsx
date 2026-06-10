import React from 'react';
import EntityListPage from '../components/layout/EntityListPage';
import { vehiclesConfig } from '../api/vehicles';

const VehiclesPage = () => {
  return <EntityListPage config={vehiclesConfig.list} />;
};

export default VehiclesPage;
