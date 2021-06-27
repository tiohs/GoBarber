import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../services/api';
import { Loading, Owner, IssueList } from './styles';
import Container from '../../components/Container/index';
import img from './ok.jpg';

export default class Repository extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				repository: PropTypes.string,
			}),
		}).isRequired,
	};
	state = {
		repository: {},
		issues: [],
		loading: true,
	};

	async componentDidMount() {
		const { match } = this.props;
		const repoName = decodeURIComponent(match.params.repository);
		console.log('')
		const [repository, issues] = await Promise.all([
			api.get(`/repos/${repoName}`),
			api.get(`/repos/${repoName}/issues`, {
				params: {
					state: 'open',
					per_page: 5,
				},
			}),
		]);
		console.log(repository, issues)
		this.setState({
			repository: repository.data,
			issues: issues.data,
			loading: false,
		});
	}
	render() {
		const { loading, repository } = this.state;
		// repository, issues,
	
		if(!loading) {
			return <Loading>Carregando</Loading>
		}

		return <Container>
			<Owner>
				<Link to = "/"> Voltar aos repositorios </Link>			
				<img 
					src='{repository.owner.avatar_url}'
					alt="Facebook"
				/>
			
				<h1>repository.owner.login</h1>
				<p>repository.description</p>
			</Owner>
			<IssueList>
				<li> 
					<img src={img} alt="ok"/>
					<div>
						<strong>
							<a href="/escola">Escola</a>
							<span>
								Css
							</span>
						</strong>
						<p>Hamilton Silva</p>
					</div>
				</li>
			</IssueList>
		</Container>
	}
}


/*
		{ <img 
					src={ repository.owner.avatar_url } 
					alt={ repository.owner.login }
				/>
				<h1>{ repository.name }</h1>
				<p>{repository.description}</p> }*/