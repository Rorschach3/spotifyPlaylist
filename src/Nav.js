import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Login from './Login';
import WebPlayer from './WebPlayer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/webPlayer" component={WebPlayer} />
      </Switch>
    </Router>
  );
}

export default App;
