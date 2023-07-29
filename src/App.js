import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mainpage from './Mainpage';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Nav from './Nav';
import './styles.css';
import Example from './example';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Nav />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUpForm />} />
    </Router>
  );
}

export default App;
