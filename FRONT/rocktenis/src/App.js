import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

import GlobalStyle from './style/globals';
function App() {
	return (
		<BrowserRouter>
		<GlobalStyle />
	 	<Header /> 
			<Routes />
		</BrowserRouter>
	);
}

export default App;
