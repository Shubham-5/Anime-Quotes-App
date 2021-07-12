import React from "react";

const Quote = ({ quote, anime, character }) => {
  return (
    <>
      <div className=' card mb-3'>
        <div class='card-header p-2'>{anime}</div>
        <div class='card-body'>
          <blockquote class='blockquote mb-0'>
            <p className='small'>{quote}</p>
            <footer class='blockquote-footer'>
              <cite title='Source Title'>{character}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Quote;
