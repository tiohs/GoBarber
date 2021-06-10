import React, { Component } from "react";
import { Container, Form, SubmitButton } from "./style";
import { FaGithubAlt, FaPlus } from "react-icons/fa";

import api from '../services/api';


export default class Main extends Component {
  state = { 
    newRepo: '' 
  }
 
  handleInputChange = e => {
    this.setState({ newRepo : e.target.value }); 
  }

  handleSubmit = e => {
    e.preventDefault();
    const{ newRepo } = this.state;
    const response = api.get(`/repos/${newRepo}`);
    console.log(response);
  }

  render () {
    let { newRepo } = this.state;
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
          <SubmitButton>
            <FaPlus color="#fff" size= {14}/>
          </SubmitButton>
        </Form>   
      </Container>
    );
  }
 }