import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-loader-spinner";
import AnimeQuotes from "./components/AnimeQuotes";
import SearchInput from "./components/SearchInput";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [animeSearch, setAnimeSearch] = useState("");
  const [value, setValue] = useState("Title");
  const [loading, setLoading] = useState(true);

  const getAnimeQuotes = (value, animeSearch) => {
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
      fetch(
        `https://animechan.vercel.app/api/quotes/character?name=${animeSearch}`
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
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    getAnimeQuotes(animeSearch);
  };

  useEffect(() => {
    value && getAnimeQuotes(value, animeSearch);
  }, [value, animeSearch]);

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
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getRandomQuotes();
  }, []);

  return (
    <>
      <div className='bg-dark App'>
        <header className=' text-center p-2 text-white'>
          <h1>Anime Quotes</h1>
        </header>

        <div className='d-flex align-items-center mb-3 justify-content-center'>
          <SearchInput
            animeSearch={animeSearch}
            setAnimeSearch={setAnimeSearch}
            formSubmitHandler={formSubmitHandler}
            setValue={setValue}
          />
        </div>

        <div className=''>
          {loading ? (
            <Loader
              className='loader'
              type='ThreeDots'
              color='white'
              height={50}
              width={50}
            />
          ) : (
            <AnimeQuotes animeData={animeData} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
