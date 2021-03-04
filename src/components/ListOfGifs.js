import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifts from '../services/getGifts'

const ListOfGifs = ({ params }) => {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifts({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <i>Loading...</i>

  return (
    <>
      {gifs.map(singleGift => (
        <Gif key={singleGift.id} {...singleGift} />
      ))}
    </>
  )
}

export default ListOfGifs
