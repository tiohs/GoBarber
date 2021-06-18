import React, { Component } from 'react';
import api from '../services/api';
import PropTypes from 'prop-types';
import { Loading, Owner } from './styles';
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
		const [repository, issues] = await Promise.all([
			api.get(`/repos/${repoName}`),
			api.get(`/repos/${repoName}/issuses`, {
				params: {
					state: 'open',
					per_page: 5,
				},
			}),
		]);
		this.setState({
			repository: repository.data,
			issues: issues.data,
			loading: false,
		});
	}
	render() {
		const { loading } = this.state;
		// repository, issues,
	
		if(!loading) {
			return <Loading>Carregando</Loading>
		}

		return <Container>
			<Owner>
			
				<img 
					src={ img } 
					alt="Facebook"
				/>
				<h1>Facebook</h1>
				<p>Boa rede social</p>
			</Owner>
		</Container>
	}
}


/*
		{ <img 
					src={ repository.owner.avatar_url } 
					alt={ repository.owner.login }
				/>
				<h1>{ repository.name }</h1>
				<p>{repository.descrition}</p> }*/