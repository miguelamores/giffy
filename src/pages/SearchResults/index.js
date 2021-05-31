import React from 'react';
import ListOfGifs from 'components/ListOfGifs';
import useGifs from 'hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  if (loading) return <i>Loading...</i>;

  return (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGifs gifs={gifs} />
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};

export default SearchResults;
