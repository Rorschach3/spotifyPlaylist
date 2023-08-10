import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage'
import './Main.css';
import Nav from './Nav'

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
