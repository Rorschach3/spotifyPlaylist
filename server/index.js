const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();

app.get('/auth/login', (req, res) => {
  // Handle login logic here
});

app.get('/auth/callback', (req, res) => {
  // Handle callback logic here
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
