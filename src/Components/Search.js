import "./search.css";
import React, { useState } from "react";

function Search({ setSearchQuery }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value); // Send search query to Header
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
        aria-label="Search"
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
