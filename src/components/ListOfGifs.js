import React from 'react'
import Gif from './Gif'
import './ListOfGifs.css'

const ListOfGifs = ({ gifs }) => {
  console.log(gifs)
  return (
    <div className="ListOfGifs">
      {gifs?.map(singleGift => (
        <Gif key={singleGift.id} {...singleGift} />
      ))}
    </div>
  )
}

export default ListOfGifs
