import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ title, id, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}

export default Gif
