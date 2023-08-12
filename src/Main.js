import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage.js'
import Nav from './Nav.js'
import './Main.css';

function Main() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.accessToken);
    }

    getToken();
  }, []);

  return <>{token === "" ? <TestPage1 /> : <Mainpage />}</>;
}

export default Main;