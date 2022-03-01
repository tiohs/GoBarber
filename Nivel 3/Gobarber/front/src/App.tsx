import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/seignin';
import SignUp from './pages/SeignUp';
import AuthContext from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Hamilton Silva' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);
export default App;
