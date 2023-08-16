import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Playlist from "./Playlist";
import WebPlayer from './WebPlayer';
import Nav from "./Nav";
import Login from "./Login";
import "./App.css";

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      try {
        const response = await fetch('/auth/token');
        const json = await response.json();
        setToken(json.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    }

    getToken();
  }, []);

  return (
    <div>
      <Router>
        <div className="navbar">
          <Nav />
        </div>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/Playlist" element={<Playlist />} />
          <Route
            path="/WebPlayer"
            element={ (token === '') ? <Login /> : <WebPlayer token={token} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
