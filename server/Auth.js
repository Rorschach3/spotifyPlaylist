import React, { useEffect, useState } from 'react';

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function Auth() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
        };
        const response = await fetch('https://mighty-everglades-40374-c435b0bfaf68.herokuapp.com/https://accounts.spotify.com/api/token', authParameters);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    fetchAccessToken();
  }, []);

  return (
    <div>
      {/* Your Auth component JSX */}
    </div>
  );
}

export default Auth;
