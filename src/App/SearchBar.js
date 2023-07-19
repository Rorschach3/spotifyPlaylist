import React, {useState, useEffect} from 'react'
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar(props) {
  const initialSearchTerm = () => String(window.localStorage.getItem('searchTerm') || "")
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    window.localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm])

  async function handleSearch() {
    try {
      await props.searchSpotify(searchTerm); 
    } catch (error) {
      console.warn(error)
      const clientId = '0744a9d113234aed9830ca9b36b3be57';
      const currentUrl = window.location.href;
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${currentUrl}`;
    }
  }

  async function handleKeyPress(e) {
    if (e.key === "Enter") {
      await handleSearch();
    }
  }

  return (
    <>
    <div className="SearchBar">
      <input
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter A Song Title"
        value={searchTerm} />
      <a onClick={handleSearch}>SEARCH</a>
    </div>
    <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            autoComplete="on"
            autoCorrect="on"
            placeholder="Search for an artist"
            type="input"
            onKeyPress={handleKeyPress}
            onChange={handleInputChange} />
          <Button className="btn btn-success" onClick={() => onSearch(searchTerm)}>
            Search
          </Button>
        </InputGroup>
      </Container>
      </>
  ) 
}
export default SearchBar;