import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage.js'
import Login from './components/LoginForm/LoginForm'
import './Main.css';

function Main() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.accessToken);
    }

    getToken();

  }, []);

  return (
    <>
        { (token === '') ? <Nav /> : <Mainpage /> }
    </>
  );
}

export default Main;
