import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import './styles/App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
