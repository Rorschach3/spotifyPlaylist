import React, { useState, useEffect } from 'react';
import WebPlayback from './firebase/pages/WebApp/WebPlayback.jsx'
import Login from './components/LoginForm/LoginForm'

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
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  );
}

export default Main;
