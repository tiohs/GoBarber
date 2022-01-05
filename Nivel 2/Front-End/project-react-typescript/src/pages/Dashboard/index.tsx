import React from 'react';

import { Title, Form, Repositories } from './style';
import avatar from "../../assets/img.jpg";

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input type="text" placeholder='Deigite o nome do repositório '/>
        <button type='submit'>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="test">
          <img src={avatar} alt="Hamilton Silva"  />
          <div>
            <strong>unituenda/pilha</strong>
            <p>Melhor software de procura de ajuda !</p>
          </div>

        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;