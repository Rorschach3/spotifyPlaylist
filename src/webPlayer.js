import React, { useState, useEffect } from "react";
import SpotifyGetPlaylist from "./SpotifyGetPlaylist";

const CLIENT_ID = "684f2f7c27fc4e6eac20d56f7b4da9fe";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "https://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-read-currently-playing", "user-read-playback-state", "playlist-read-private"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
    }, {});
  
    return paramsSplitUp;
  };

const WebPlayer = () => {
    useEffect(() => {
      if (window.location.hash) {
        const { access_token, expires_in, token_type } =
          getReturnedParamsFromSpotifyAuth(window.location.hash);
  
        localStorage.clear();
  
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("tokenType", token_type);
        localStorage.setItem("expiresIn", expires_in);
      }
    });

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
      };

    return (
        <div className="container">
        <h1>hi</h1>
        <button onClick={handleLogin}>login to spotify</button>
        <SpotifyGetPlaylist />
        </div>
    );

    function WebPlayback(props) {
        const [isPaused, setPaused] = useState(false);
        const [isActive, setActive] = useState(false);
        const [player, setPlayer] = useState(undefined);
        const [currentTrack, setTrack] = useState(null);
        const [token, setToken] = useState('');
            
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
            <WebPlayback token={token} />

            <b>Instance not active. Transfer your playback using your Spotify app</b>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
          <div>
            <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/5Ddv9LRNh98WRtNaO7BTqr?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            style={{ minHeight: '360px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            />
            
        </div>

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
              </button>WDS

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
    }
export default WebPlayer;