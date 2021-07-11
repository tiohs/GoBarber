import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Routes from './routes';
import store from './store';

import history from './services/history';

import GlobalStyle from './style/globals';
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
