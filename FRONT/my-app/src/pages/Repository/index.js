import React, { Component } from "react";
import api from '../services/api';

export default class Repository extends Component {
  async componentDidMount(){
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    console.log(repoName);
  }
  render(){
    const { match } = this.props;
    return <h1>Repository { decodeURIComponent(match.params.repository )} </h1>
  }
 
}