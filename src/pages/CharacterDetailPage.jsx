import React from 'react';
import EntityDetailPage from '../components/layout/EntityDetailPage';
import { charactersConfig } from '../api/characters';

const CharacterDetailPage = () => {
  return <EntityDetailPage config={charactersConfig.detail} />;
};

export default CharacterDetailPage;
