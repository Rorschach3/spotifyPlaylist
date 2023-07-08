import "./App/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

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
    fetch('https:///accounts.spotify.com/api/token', authParameters)
    .then(results => results.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  // Search
  async function search() {
    console.log("Search for " + searchInput); //Taylor Swift
  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for an artist"
            type="input"
            onKeyDown={event => {
              if (event.key == "Enter") {
                console.log("Pressed Enter");
              }
            }}
            onClick={event => setSearchInput(event.target.value)}
          />
          <Button onClick={() => {console.log("Clicked Button")}}>
            Search
          </Button>
        </InputGroup>
        </Container>
        <Container>
          <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src='#' />
          <Card.Body>
            <Card.Title>Album Name Here</Card.Title>
          </Card.Body>
          </Card>
          </Row>
        </Container>
        </div>
    );
  }
export default App;
