import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FlagSearch() {
  const [loaded, setLoaded] = useState(false);
  const [queery, setQueery] = useState(null);
  const [results, setResults] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let id = "trans";
    let apiUrl = `https://pride.dev/api/flags/${id}`;
  }

  function handleResponse(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <form>
          <input
            type="search"
            className="form-search"
            placeholder="Search for a flag..."
            onChange={handleResponse}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
