import { useState, useEffect, useContext } from 'react';
import getGifts from 'services/getGifts';
import GifsContext from 'context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  useEffect(() => {
    setLoading(true);
    getGifts({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifts({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
};

export default useGifs;
