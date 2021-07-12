import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import AnimeQuotes from "./components/AnimeQuotes";
import SearchInput from "./components/SearchInput";

// const GET_RANDOM_QUOTES = "https://animechan.vercel.app/api/random";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeSearch, setAnimeSearch] = useState("");
  const [value, setValue] = useState("Title");

  const getAnimeQuotes = async (animeSearch) => {
    // calling by title
    if (value === "Title") {
      fetch(
        `https://animechan.vercel.app/api/quotes/anime?title=${animeSearch}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setAnimeData(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // calling by Character
    if (value === "Character") {
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
    }
  };

  const handleChange = (val) => {
    setValue(val);
    console.log(val);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    getAnimeQuotes(animeSearch);
  };

  useEffect(() => {
    const getRandomQuotes = () => {
      fetch("https://animechan.vercel.app/api/quotes")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setAnimeData(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getRandomQuotes();
  }, []);

  return (
    <>
      <div className='bg-dark '>
        <header className=' text-center p-2 text-white'>
          <h1>Anime Quotes</h1>
        </header>

        <div className='d-flex align-items-center mb-3 justify-content-center'>
          <SearchInput
            animeSearch={animeSearch}
            setAnimeSearch={setAnimeSearch}
            handleChange={handleChange}
            formSubmitHandler={formSubmitHandler}
            setValue={setValue}
          />
        </div>

        <div className=' shadow'>
          <AnimeQuotes animeData={animeData} />
        </div>
      </div>
    </>
  );
}

export default App;
