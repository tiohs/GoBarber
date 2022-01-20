import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './style';
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
          type="text" 
          onChange={e => setNewRepo(e.target.value)}
          placeholder='Deigite o nome do repositório '
        />
        <button type='submit'>Pesquisar</button>
      </Form>
      { inputError && <Error>{inputError}</Error> }
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