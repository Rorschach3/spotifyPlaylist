// useSpotifyAccessToken.js
import { useState, useEffect } from 'react';

const CLIENT_ID = '684f2f7c27fc4e6eac20d56f7b4da9fe'
const CLIENT_SECRET = '256582d4f9d04a7f82631a7ec7cf5945';

export function useSpotifyAccessToken() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const authParameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        };
        const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
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

  return accessToken;
}
