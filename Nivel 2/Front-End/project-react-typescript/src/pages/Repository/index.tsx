import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const Repository: React.FC = () => {
  let { id } = useParams();
  id = id?.replace('_', '/');

  return (
    <h1>{id}</h1>

  );
}

export default Repository;