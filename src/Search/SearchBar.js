import { on } from "events";
import React, { useState } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

function SearchBar({ onSearch }) {  // Taylor Swift
  const [searchInput, setSearchInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchInput);
    }
  };


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };


  return (
    <Container>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          autoComplete="on"
          autoCorrect="on"
          placeholder="Search for an artist"
          type="input"
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}  
        />
        <Button className="btn btn-success" onClick={() => onSearch(searchInput)}>
          Search Spotify
        </Button>
      </InputGroup>
    </Container>
  ) 
}
export default SearchBar;