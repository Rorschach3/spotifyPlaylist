const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const cors = require('cors');


const port = 5000

global.accessToken = ''

dotenv.config()

  // Credentials 
const client_id = '684f2f7c27fc4e6eac20d56f7b4da9fe'
const client_secret = '256582d4f9d04a7f82631a7ec7cf5945';

var app = express();
app.use(cors()); // middleware

var spotify_redirect_uri = 'http://localhost:3000/auth/callback'

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get('/auth/login', (req, res) => {

  var scope = "streaming user-read-email user-read-private"
  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  })
            // authorization Base64 encoded key for access token
  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());

})

app.get('/auth/callback', (req, res) => {

  var code = req.query.code;

  var authOptions = {  // Post request to get access token from spotify
    url: 'https://accounts.spotify.com/api/token/',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      accessToken = body.access_token;
      const scope = body.scope;
    
      if (scope.includes('streaming')) {
        res.redirect('/');
      } else {
        res.send('Missing streaming scope');
      }

      } else {
        res.send('invalid token');
    }
  });

});

app.get('/auth/token', (req, res) => {
  res.json({ accessToken: accessToken})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})