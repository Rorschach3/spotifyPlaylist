import React, { useState, useEffect } from 'react';
import SpotifyGetPlaylists from "./SpotifyGetPlaylists";

const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/callback/";
const SPACE_DELIMITER = "%20";
const SCOPES = ['user-read-currently-playing', 'user-read-playback-state', 'streaming', 'user-read-email', 'user-read-private', 'user-modify-playback-state', 'user-read-recently-played', 'user-library-read', 'user-library-modify', 'user-top-read', 'user-read-playback-position', 'user-read-currently-playing', 'user-read-recently-played', 'user-follow-read', 'user-follow-modify'];
const SCOPES_URL_PARAM = SCOPES.join("%20");

function WebPlayer(props) {
  const [isPaused, setPaused] = useState(false);
  const [isActive, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [currentTrack, setTrack] = useState(null); // Remove the 'track' from the useState declaration

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(props.token);
        },
        volume: 0.5
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('The Web Playback SDK is ready to play music!');
        console.log('Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          console.error('User is not playing music through the Web Playback SDK');
          return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          setActive(state !== null);
        });
      });

      player.connect().then((success) => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
        }
      });
    };
  }, [props.token]);

  if (!isActive || !currentTrack) { // Add a check for 'currentTrack'
    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <b>Instance not active. Transfer your playback using your Spotify app</b>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="main-wrapper">
            <img src={currentTrack.album.images[0].url} className="now-playing__cover" alt="" />

            <div className="now-playing__side">
              <div className="now-playing__name">{currentTrack.name}</div>
              <div className="now-playing__artist">{currentTrack.artists[0].name}</div>

              <button className="btn-spotify" onClick={() => player.previousTrack()}>
                &lt;&lt;
              </button>

              <button className="btn-spotify" onClick={() => player.togglePlay()}>
                {isPaused ? "PLAY" : "PAUSE"}
              </button>

              <button className="btn-spotify" onClick={() => player.nextTrack()}>
                &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WebPlayer;
