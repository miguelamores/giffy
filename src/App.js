import React from 'react'
import { Link, Route } from 'wouter'
import './App.css'

import ListOfGifs from './components/ListOfGifs'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/panda">Gif de panda</Link>
        <Link to="/gif/ecuador">Gif de ecuador</Link>
        <Link to="/gif/morty">Gif de morty</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App
