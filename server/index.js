const express = require('express');
const cors = require('cors');
const { post } = require('request');

const { config } = require('dotenv');


// ... rest of your code ...


const port = 5000
var accessToken = ''

config()

  // Credentials 
var client_id = '684f2f7c27fc4e6eac20d56f7b4da9fe'
var client_secret = '256582d4f9d04a7f82631a7ec7cf5945';


var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var app = express();
app.use(cors()); // Add this line as middleware

app.get('/auth/login', (req, res) => {

  var scope = ["user-read-currently-playing", "user-read-playback-state", "playlist-read-private"];

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: "http://localhost:3000/auth/callback",
  })
            // authorization Base64 encoded key for access token
  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/auth/callback', (req, res) => {

  var code = req.query.code;

  var authOptions = {  // Post request to get access token from spotify
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(`${client_id}:${client_secret}`).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };
          // if error logging in then redirect to login page
  post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      accessToken = body.accessToken;
      res.redirect('/')
    }
  });

})

app.get('/auth/token', (req, res) => {
  res.json({ accessToken: accessToken})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})