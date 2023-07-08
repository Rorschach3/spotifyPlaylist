import React, { useState } from 'react';

function SearchBar() {

const handleSearchTermChange = pass
const handleSeach = pass

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search songs"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;