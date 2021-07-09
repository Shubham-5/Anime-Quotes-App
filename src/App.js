import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import AnimeQuotes from "./components/AnimeQuotes";
import SearchInput from "./components/SearchInput";

// const GET_RANDOM_QUOTES = "https://animechan.vercel.app/api/random";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeSearch, setAnimeSearch] = useState("");

  const getAnimeQuotes = async (animeSearch) => {
    let responseJson;
    try {
      const response = await fetch(
        `https://animechan.vercel.app/api/quotes/character?name=${animeSearch}`
      );

      //because try catch does not handle server errors
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      responseJson = await response.json();     
    } catch (ex) {
        console.log("oops");
        responseJson = [];
    }

    if (animeSearch) {
      setAnimeData(responseJson);
    }
  };

  useEffect(() => {
    //avoid calling getAnimeQuotes for blanks 
    animeSearch && getAnimeQuotes(animeSearch);
  }, [animeSearch]);

  return (
    <>
      <div className='bg-dark'>
        <header className='bg-light text-center p-2 '>
          <h1>Anime Quotes</h1>
        </header>
        <div className='d-flex align-items-center mb-3  justify-content-center'>
          <SearchInput
            animeSearch={animeSearch}
            setAnimeSearch={setAnimeSearch}
          />
        </div>

        <div className='container shadow'>
          <AnimeQuotes animeData={animeData} />
        </div>
      </div>
    </>
  );
}

export default App;
