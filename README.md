# Spotify Playlist

## Usage/Examples

[screenshot](".\public\Example.png")

##### Installation

1. You will need to register your app and get your own credentials from the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/)

to do so, go to your Spotify for Developers Dashboard, create your application and register the following callback URI:

`http://localhost:3000/auth/callback`

2. Fork the repository from Github and clone it using the following command:

`git clone https://github.com/Rorschach3/spotifyPlaylist.git`

3. Make sure you have node.js and npm, to install use the command below:

```sh
sudo apt update | sudo apt install nodejs npm

```

Before starting the server, make sure you have all the necessary files and dependencies installed. You can do this by running either of the following commands:

Once you have created your app, create a file called .env in the root folder of the repository with your Spotify credentials:

SPOTIFY_CLIENT_ID='my_client_id'
SPOTIFY_CLIENT_SECRET='my_client_secret'

##### `npm install | npm run dev`

`npm run dev`

5. A browser window should automatically open, indicating that the program is running on localhost port 3000. If the browser window doesn't open automatically, you can manually open a browser and go to
   --http://localhost:3000/--
