import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './style';
import { Link } from 'react-router-dom';
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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const ExistRepository = localStorage.getItem('@GitHub');
    if(ExistRepository){
      return JSON.parse(ExistRepository);
    }
    return [];
  });
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  useEffect(() => {
    localStorage.setItem('@GitHub', JSON.stringify(repositories));
  }, [repositories]);
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if(!newRepo){
      return setInputError('Digite o autor/nome do reposiório!');
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch(err) {
      setInputError('Erro ao encontrar os dados do formulário ');
    }
  }
  return (
    <>
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
          value={newRepo}
          type="text" 
          onChange={e => setNewRepo(e.target.value)}
          placeholder='Deigite o nome do repositório '
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      { inputError && <Error>{inputError}</Error> }
      <Repositories>
       { repositories.map(repository => (
        <Link 
          key={repository.full_name} 
          to={`${repository.full_name}`}
        >
          <img 
            src={repository.owner.avatar_url} 
            alt={repository.full_name}  
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
       ))}
      </Repositories>
    </>
  );
}

export default Dashboard;