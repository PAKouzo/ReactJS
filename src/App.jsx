import React from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [count, setCount] = useState(1)
  const handleClick = () =>{
    setCount(count+1)
  }
  const handleFetchPokemon = async () =>{
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log(response)
  }
  return (
    <div>
      {count}
      <br />
      <button onClick={handleClick}>Click</button>
      <button onClick={handleFetchPokemon}>Click</button>
    </div>
  )
}

export default App
