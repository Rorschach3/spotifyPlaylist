import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage.js";
import LoginForm from "./LoginForm.js";
import SearchBar from "./SearchBar.js";
import Nav from "./Nav.js";
import "./styles.css";
import WebPlayback from "./WebPlayback.js"
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
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/WebPlayback" element={<WebPlayback />} />
      </Routes>
    </Router>
  );
}

export default App;
