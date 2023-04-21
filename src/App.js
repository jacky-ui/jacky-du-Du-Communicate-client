import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import './styles/App.scss';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';
import UserPage from './pages/UserPage/UserPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/chatroom" component={ChatRoomPage} />
          <Route path="/user-profile/:id" component={UserPage} />
          <Route path="/aboutme" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;