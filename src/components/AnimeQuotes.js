import React from "react";
import Quote from "./Quote";

const AnimeQuotes = ({ animeData }) => {
  return (
    <>
      {animeData.map((anim) => (
        <div className='container text-center '>
          <Quote key={anim.name} {...anim} />
        </div>
      ))}
    </>
  );
};

export default AnimeQuotes;
