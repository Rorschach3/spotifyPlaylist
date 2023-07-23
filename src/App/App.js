import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Login from './components/LoginForm/Login';
import WebPlayer from './WebPlayer'; // Import the WebPlayer component

const App = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Mainpage} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/signIn" component={Login} />
          <Route path="/webPlayer" component={WebPlayer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
