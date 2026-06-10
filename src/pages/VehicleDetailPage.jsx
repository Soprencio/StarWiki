import React from 'react';
import EntityDetailPage from '../components/layout/EntityDetailPage';
import { vehiclesConfig } from '../api/vehicles';

const VehicleDetailPage = () => {
  return <EntityDetailPage config={vehiclesConfig.detail} />;
};

export default VehicleDetailPage;
