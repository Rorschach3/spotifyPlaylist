import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Playlist from "./Playlist";
import WebPlayer from './WebPlayer';
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
          <Route path="/Playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
