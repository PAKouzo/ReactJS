import React from 'react'
import { useState, } from 'react'
import './App.css'
import useBoolean from './Hooks/useBoolean'

const App = () => {
  const [value, setValue] = useState(true)
    const [setTrue, setFalse, onToggle, onValue] = useBoolean()
    const handleSetTrue = () => {
      setValue(setTrue)
      console.log(value)
      return value
    }
    const handleSetFalse = () => {
      setValue(setFalse)
      return value
    }
    const handleOnToggle = () => {
      setValue(onToggle)
      return value
    }
    const handleOnValue = () => {
      setValue(onValue)
      return value
    }
    return (
      <div>
        {JSON.stringify(value)}
        <br />
        <button onClick={handleSetTrue}>setTrue</button>
        <button onClick={handleSetFalse}>setFalse</button>
        <button onClick={handleOnToggle}>onToggle</button>
        <button onClick={handleOnValue}>setValue</button>
      </div>
    )
}

export default App
