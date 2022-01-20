import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import avatar from "../../assets/img.jpg";
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <Title>Explore repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepository}>
        <input 
          type="text" 
          onChange={e => setNewRepo(e.target.value)}
          placeholder='Deigite o nome do repositório '
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      <Repositories>
       { repositories.map(repository => (
        <a key={repository.full_name} href="test">
          <img 
            src={repository.owner.avatar_url} 
            alt={repository.full_name}  
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
       ))}
      </Repositories>
      
    </>
  );
}

export default Dashboard;