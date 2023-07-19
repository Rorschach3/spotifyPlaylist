import React, { useState, useEffect } from 'react';
import { Container, InputGroup, FormControl, Button, Card, Row } from 'react-bootstrap';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

function Main() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
      const fetchAccessToken = async () => {
        try {
          const authParameters = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
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

  // const search = async () => {
  //   try {
  //     const searchResponse = await fetch(
  //       `https://mighty-everglades-40374-c435b0bfaf68.herokuapp.com/https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );

  //     if (!searchResponse.ok) {
  //       throw new Error('Error searching for artist');
  //     }

  //     const searchData = await searchResponse.json();
  //     const artistID = searchData.artists.items[0].id;

  //     const albumsResponse = await fetch(
  //       `https://mighty-everglades-40374-c435b0bfaf68.herokuapp.com/https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=US&limit=50`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );

  //     if (!albumsResponse.ok) {
  //       throw new Error('Error fetching albums');
  //     }

  //     const albumsData = await albumsResponse.json();
  //     const returnedAlbums = albumsData.items;
  //     setAlbums(returnedAlbums);
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            autoComplete="on"
            autoCorrect="on"
            placeholder="Search for an artist"
            type="input"
            onKeyPress={event => {
              if (event.key === 'Enter') {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className="btn btn-success" onClick={S   .earchBar}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-3">
          {albums.map((album, i) => (
            <Card key={i}>
              <Card.Img src={album.images[1].url} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Main;
