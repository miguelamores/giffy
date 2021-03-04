import React from 'react'
import { Route } from 'wouter'
import './App.css'

import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Home from './pages/Home'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: 'miguel',
        isDev: true
      }}
    >
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/gif/:id" component={Detail} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/" component={Home} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
