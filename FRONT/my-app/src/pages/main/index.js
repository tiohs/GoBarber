import React, { Component } from "react";
import { Container, Form, SubmitButton, List } from "./style";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";

import api from '../services/api';


export default class Main extends Component {
  state = { 
    newRepo: '',
    repositories : [],
    loading: false
  }

  // Carregar os dados do repositorios 
  componentDidMount(){
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories : JSON.parse(repositories) });
    }
  }
 
  // Salvar os dados do localStore vamos usar o componente 
  componentDidUpdate(_, prevState){
    const { repositories } = this.state;
    if(prevState.repositories !== repositories ) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo : e.target.value }); 
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({ loading : true });

    const{ newRepo, repositories } = this.state;
    const response = api.get(`/repos/${newRepo}`);
    const data = {
      name : response.data.full_name,
    }

    this.setState({ 
      repositories : [...repositories, data],
      newRepo : '',
      loading: false
    });
  }

  render () {
    let { newRepo , loading, repositories} = this.state;
    return(
      <Container>  
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit = {this.handleSubmit}>
          <input 
            type="text"
            placeholder="Adicionar repositório" 
            valeu = {newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loadings={loading}>
            { loading ? ( 
              <FaSpinner color="#fff" size= {14}/>
            ) : (
              <FaPlus color="#fff" size= {14}/>
            )}
          </SubmitButton>
        </Form>   
        <List>
            { repositories.map( repository => (
              <li key={repository.name}>
                <span>{repository.name}</span>
                <a href="/">Detalhes</a>
              </li>
            ))}
        </List>
      </Container>
    );
  }
 }