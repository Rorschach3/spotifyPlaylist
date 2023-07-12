import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Card, Row } from "react-bootstrap";

const CLIENT_ID = '684f2f7c27fc4e6eac20d56f7b4da9fe'
const CLIENT_SECRET = '256582d4f9d04a7f82631a7ec7cf5945'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };

    fetch('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', authParameters)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setAccessToken(data.access_token);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, []);

  async function search() {
    console.log("Search for " + searchInput);

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      }
    };

    try {
      var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      if (!artistIDResponse.ok) {
        throw new Error('Network response was not ok');
      }
      var data = await artistIDResponse.json();
      var artistID = data.artists.items[0].id

      console.log(artistID);

      var returnedAlbumsResponse = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album,single&limit=50&market=US', searchParameters);
      if (!returnedAlbumsResponse.ok) {
        throw new Error('Network response was not ok');
      }
      var returnedAlbumsData = await returnedAlbumsResponse.json();
      var returnedAlbums = returnedAlbumsData.items;
      

      console.log(returnedAlbums);
      setAlbums(returnedAlbums);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  console.log(albums);

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
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className="btn btn-success" onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, i) => {
            console.log(album);
            return (
              <Card key={i}>
                <Card.Img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
