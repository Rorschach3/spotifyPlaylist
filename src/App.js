import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import TestPage1 from "./TestPage1";
import WebPlayer from './webPlayer';
import Nav from "./Nav";
// import Example from './example';
// import { AuthProvider } from './context/AuthContext';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/WebPlayer" element={<WebPlayer />} />
          <Route path="/TestPage1" element={<TestPage1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
