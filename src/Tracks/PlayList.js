import React, { useEffect, useState } from "react";
import axios from "axios";
import Tracks from "./Tracks/Tracks";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const Playlist = () => {
  const [accessToken, setAccessToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handlePlaylist = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {/* Your code for another component */}
      </div>
      <div className="Playlist">
        <Tracks />
      </div>
      <button onClick={handlePlaylist}>Playlists</button>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default Playlist;
