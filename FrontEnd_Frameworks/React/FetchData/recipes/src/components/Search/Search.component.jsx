import React from "react";

export default function Search({ onSearch }) {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div className="search-form">
      <label>Search Ingredient </label>
      <input htmlFor="search" id="search" onKeyPress={handleSearch} />
    </div>
  );
}
