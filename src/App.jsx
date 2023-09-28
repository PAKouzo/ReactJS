import React from 'react'
import { useState , useRef} from 'react'
import './App.css'
import axios from 'axios'


const App = () => {
    const inputRef = useRef(null)
  
    const handleFocus = () => {
      inputRef.current.focus()
    }
  
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus</button>
      </div>
    )
}

export default App
