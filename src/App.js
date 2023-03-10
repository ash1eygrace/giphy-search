import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";
import Spinner from "./Components/Spinner";


function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("cats");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=2dnOc3I29EDM935Yi5M8FhOLoK7fC0vK&limit=24&rating=g`)
      .then(response => {
        if (activeFetch) {
          setGifs(response.data.data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data from Giphy.", error);
      })
    return () => { activeFetch = false; }
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        {
          (loading)
          ? <Spinner />
          : <GifList data={gifs} />
        }
      </div>
    </div>
  );
}

export default App;
