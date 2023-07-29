import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import LoginForm from "./LoginForm";
// import Login from './components/';
import Nav from "./Nav";
import "./styles.css";
// import Example from './example';
// import { AuthProvider } from './context/AuthContext';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
