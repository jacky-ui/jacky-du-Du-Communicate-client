import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import './styles/App.scss';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route to="/chatroom">
            <ChatRoomPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
