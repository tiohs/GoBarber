import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import logoImg from '../../assets/attachment.svg'
import api from '../../services/api';
import { Header } from './style';

const Repository: React.FC = () => {
  let { id } = useParams();
  id = id?.replace('_', '/');

  return (
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/dashboard">
      <FiChevronsLeft size={32} />
        <p>Volta</p>
      </Link>     
    </Header>
  );
}

export default Repository;