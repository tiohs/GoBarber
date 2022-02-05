import React, { useEffect, useState  } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/attachment.svg'
import api from '../../services/api';
import { Header, RepositoryInfo, Issues } from './style';
interface RepositoryI {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryI | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  let { id } = useParams();
  id = id?.replace('_', '/');

  useEffect( ()=>{
    api.get(`repos/${id}`).then((response) => {
      setRepository(response.data);
    }); 
    api.get(`repos/${id}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [id]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
        <FiChevronLeft size={16} />
          <p>Volta</p>
        </Link>     
      </Header>
      <RepositoryInfo>
        <header>
          <img src={repository?.owner.avatar_url} alt={repository?.owner.login} />
          <div>
            <strong>{ repository?.full_name }</strong>
            <p>{ repository?.description }</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{ repository?.stargazers_count }</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{ repository?.forks_count }</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{ repository?.open_issues_count }</strong>
            <span>Issues abertos</span>
          </li>
         
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
           
           <div>
             <strong>{ issue.title }</strong>
             <p>{ issue.user.login }</p>
           </div>
           <FiChevronRight size={20}/>
          </a>
        ))}
       
      </Issues>
    </>
  );
}

export default Repository;