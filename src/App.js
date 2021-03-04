import React, { useState } from 'react'
import { Route, useLocation } from 'wouter'
import useGifs from './hooks/useGifs'
import './App.css'

import ListOfGifs from './components/ListOfGifs'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  //const { loading, gifs } = useGifs()

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  return (
    <StaticContext.Provider
      value={{
        name: 'miguel',
        isDev: true
      }}
    >
      <div className="App">
        <h1>Home</h1>
        <section className="App-content">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search a gif here..."
              type="text"
              value={keyword}
              onChange={handleChange}
            />
          </form>
          <GifsContextProvider>
            {/* <Route path="/" component={() => <ListOfGifs gifs={gifs} />} /> */}
            <Route path="/gif/:id" component={Detail} />
            <Route path="/search/:keyword" component={SearchResults} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
