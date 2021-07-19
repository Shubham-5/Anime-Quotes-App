import React, { useEffect } from "react";
import Quote from "./Quote";

const AnimeQuotes = ({ animeData, value, animeSearch, setAnimeData }) => {
  useEffect(() => {
    const getAnimeQuotes = (animeSearch) => {
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

    if (animeSearch) {
      getAnimeQuotes(animeSearch);
    }
  }, [animeSearch, setAnimeData, value]);

  return (
    <>
      {animeData.map((anim) => (
        <div key={anim.name} className='container text-center '>
          <Quote {...anim} />
        </div>
      ))}
    </>
  );
};

export default AnimeQuotes;
