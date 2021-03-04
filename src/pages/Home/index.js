import React, { useState } from 'react'
import { useLocation } from 'wouter'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  if (loading) return <i>Loading...</i>
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export default Home
