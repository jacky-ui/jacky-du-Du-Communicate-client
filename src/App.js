import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import './styles/App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
