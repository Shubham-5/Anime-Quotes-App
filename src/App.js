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
        <header className=' text-center p-3 text-white'>
          <h1>Anime Quotes</h1>
        </header>

        <div className='d-flex align-items-center mb-3 justify-content-center'>
          <SearchInput
            animeSearch={animeSearch}
            setAnimeSearch={setAnimeSearch}
            setValue={setValue}
          />
        </div>

        <div>
          {loading ? (
            <Loader
              className='loader'
              type='ThreeDots'
              color='white'
              height={50}
              width={50}
            />
          ) : (
            <AnimeQuotes
              value={value}
              setAnimeData={setAnimeData}
              animeSearch={animeSearch}
              animeData={animeData}
            />
          )}
        </div>
        <footer className='footer shadow mt-auto py-2 bg-light mr-3 ml-3'>
          <div className='container text-center'>
            <span className='text-muted'>Created By ❤ Shubham Rajput</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
