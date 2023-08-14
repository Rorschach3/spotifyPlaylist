import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Playlist from "./Playlist";
import WebPlayer from './WebPlayer';
import Nav from "./Nav";
import Login from "./Login";
import "./App.css";

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    async function getToken() {
      try {
        const response = await fetch('/auth/token');
        const json = await response.json();
        setAccessToken(json.access_token);
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
            element={accessToken === '' ? <Login /> : <WebPlayer accessToken={accessToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
