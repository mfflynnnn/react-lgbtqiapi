import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlagSearch.css";

export default function FlagSearch(props) {
  const [queery, setQueery] = useState(props.defaultQueery);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://pride.dev/api/flags/${queery}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleQueeryChange(event) {
    setQueery(event.target.value);
  }

  function handleResponse(response) {
    console.log("response", response);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <form>
            <input
              type="search"
              className="mx-sm-3 mb-2"
              placeholder="Search for a flag..."
              onChange={handleQueeryChange}
            />
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onSubmit={handleSubmit}
            >
              Search
            </button>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
