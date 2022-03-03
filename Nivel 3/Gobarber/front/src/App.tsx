import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/seignin';
// import SignUp from './pages/SeignUp';
import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
