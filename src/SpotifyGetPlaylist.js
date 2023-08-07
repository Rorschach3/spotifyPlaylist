import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  };

  return (
    <>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      {data?.items ? (
        data.items.map((item) => <p key={item.id}>{item.name}</p>)
      ) : (
        <p>No playlists available</p>
      )}
    </>
  );
};

export default SpotifyGetPlaylist;
