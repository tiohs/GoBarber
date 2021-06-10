import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={repository} />
      </Switch>
    </BrowserRouter>
  );
}
