import React from 'react';
import EntityListPage from '../components/layout/EntityListPage';
import { charactersConfig } from '../api/characters';

const CharactersPage = () => {
  return <EntityListPage config={charactersConfig.list} />;
};

export default CharactersPage;
