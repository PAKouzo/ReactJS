import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(1)
  const handleClick = () =>{
    setCount(count+1)
  }
  return (
    <div>
      {count}
      <br />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
