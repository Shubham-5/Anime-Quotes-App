import React from "react";

const SearchInput = ({
  setAnimeSearch,
  animeSearch,
  formSubmitHandler,
  setValue,
}) => {
  // const quotesFilterHandler = (e) => {
  //   setValue(e.target.value);
  // };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input
          className=' form-control-sm   m-2 p-2   '
          type='text'
          onChange={(e) => setAnimeSearch(e.target.value)}
          value={animeSearch}
          placeholder='Search...'
        />
      </form>
      <form onSubmit={formSubmitHandler}>
        <select
          onChange={(e) => setValue(e.target.value)}
          name='anime'
          className='custom-select custom-select-sm my-1 mr-sm-1'>
          <option value='Title '>Title</option>
          <option value='Character'>Character</option>
        </select>
      </form>
    </>
  );
};

export default SearchInput;
