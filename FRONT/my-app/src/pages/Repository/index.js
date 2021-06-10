import React, { Component } from "react";
import api from '../services/api';

export default class Repository extends Component {
  async componentDidMount(){
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issuses`, {
        params: {
          state: 'open',
          per_page: 5
        }
      })
    ]);
    console.log(repository);
    console.log(issues);
  }
  render(){
    const { match } = this.props;
    return <h1>Repository { decodeURIComponent(match.params.repository )} </h1>
  }
 
}