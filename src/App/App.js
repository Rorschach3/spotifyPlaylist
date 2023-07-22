import React, { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Button, Card, Row } from 'react-bootstrap';
import './App.css';
// import SearchBar from './Search/SearchBar';
// import SearchResults from './SearchSearchResults';
// import Playlist from './Playlist';
import 'bootstrap/dist/css/bootstrap.min.css';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    const accessTokenFromUrlFragment = window.location.hash.split('&')[0].substr(14);
    setAccessToken(accessTokenFromUrlFragment);
  }, [])
  

    async function createSpotifyPlaylist(name, trackIds) {
      await Spotify.createPlaylist(name, trackIds, accessToken);
      setPlaylistTracks([]);
    }
  
  function addTrackToPlaylist(track) {
    setPlaylistTracks(oldPlaylistTracks => {
      if (oldPlaylistTracks.includes(track)) {
        return oldPlaylistTracks;
      }
      else {
        return [...oldPlaylistTracks, track];
      }
    });
  }

  function removeTrackFromPlaylist(track) {
    setPlaylistTracks(oldPlaylistTracks => oldPlaylistTracks.filter((t => track !== t)));
  }



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
        setAccessToken(data.accessToken);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchAccessToken();
  }, []);


  return (
      <>
        <h1>Spo<span className="highlight">tifyWebpl</span>yer</h1>
        <div className="App">
        <SearchBar searchSpotify={SearchBar} />
        <div className="App-playlist">
          <SearchResults tracks={Tracks} addTrackToPlaylist={addTrackToPlaylist} />
          <Playlist tracks={Playlist}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
            createSpotifyPlaylist={createSpotifyPlaylist} />
        </div>
      </div>
    </>


      // <Container>
      //   <InputGroup className="mb-3" size="lg">
      //     <FormControl
      //       autoComplete="on"
      //       autoCorrect="on"
      //       placeholder="Search for an artist"
      //       type="input"
      //       onChange={(event) => setSearchTerm(event.target.value)}
      //     />
      //     <Button className="btn btn-success" onClick={handleSearch}>
      //       Search
      //     </Button>
      //   </InputGroup>
      // </Container>
      // <Container>
      //   <Row className="mx-2 row row-cols-3">
      //     {albums.map((album, i) => (
      //       <Card key={i}>
      //         <Card.Img src={album.images[1].url} />
      //         <Card.Body>
      //           <Card.Title>{album.name}</Card.Title>
      //         </Card.Body>
      //       </Card>
      //     ))}
      //   </Row>
      // </Container>
  );
}

export default App;
