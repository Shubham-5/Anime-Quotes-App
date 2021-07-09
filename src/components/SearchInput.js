import React from "react";

export const SearchInput = ({ setAnimeSearch, animeSearch }) => {
  return (
    <>
      <input
        className=' form-control-md m-2 text-center p-2 shadow '
        type='text'
        onChange={(e) => setAnimeSearch(e.target.value)}
        value={animeSearch}
        placeholder='Search any character..'
      />
    </>
  );
};

export default SearchInput;
