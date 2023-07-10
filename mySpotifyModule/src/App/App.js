
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Card } from "react-bootstrap";

const CLIENT_ID = '684f2f7c27fc4e6eac20d56f7b4da9fe'
const CLIENT_SECRET = '256582d4f9d04a7f82631a7ec7cf5945'

function App() {
  const [searchInput, setSearchInput] = useState("");
  const[accessToken, setAccessToken] = useState("")

  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.accessToken))
    console.log(accessToken)
  }, [])

  // Search 
  async function search() {
    console.log("Search for " + searchInput);    // Drake

    // Get request using search to get the Artist ID
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var artistID = await fetch('https://api.spotify.com/v1/search?type=artist&q=' + searchInput, searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

    console.log("Artist ID is " + artistID);
    // Get request with Artist ID grab all the albums from that artist
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums', + '?include_groups=album,single&limit=50&market=US', searchParameters)
      .then(response => response.json())
      .then(data => { 
        console.log(data)
        setAlbums(data.items)
      });
    //Display all the albums
  }
  console.log(albums)
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
            if (event.key == "Enter") {
              search();
                }
              }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className='btn btn-success' onClick={search}>
            Search
          </Button>
        </InputGroup>
        </Container>
        <Container>
          <Row className="mx-2 row row-cols-4">
            {albums.map( (album, i) => {
              console.log(album);
              return (
                <Card>
                  <Card.Img src={album.images[0].url} />
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Container>
        </div>
    );
  }
}
export default App;
