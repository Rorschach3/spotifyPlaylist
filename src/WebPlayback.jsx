import React, { useState, useEffect } from 'react';

const track = {
  name: "",
  album: {
    images: [
      { url: "" }
    ]
  },
  artists: [
    { name: "" }
  ]
};

function WebPlayback(props) {
  const [isPaused, setPaused] = useState(false);
  const [isActive, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [currentTrack, setTrack] = useState(track);

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

  if (!isActive) {
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

export default WebPlayback;