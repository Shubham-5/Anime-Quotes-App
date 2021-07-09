import React from "react";

export const AnimeQuotes = ({ animeData }) => {
  const itachi = animeData.map((datas) => (
    <>
      <div className=' card mb-3'>
        <div class='card-header'>Anime : {datas.anime}</div>
        <div class='card-body'>
          <blockquote class='blockquote mb-0'>
            <p>{datas.quote}</p>
            <footer class='blockquote-footer'>
              <cite title='Source Title'>{datas.character}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div>{itachi}</div>
    </>
  );
};

export default AnimeQuotes;
