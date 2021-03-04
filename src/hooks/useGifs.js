import { useState, useEffect, useContext } from 'react'
import getGifts from '../services/getGifts'
import GifsContext from '../context/GifsContext'

const useGifs = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    getGifts({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return { loading, gifs }
}

export default useGifs
