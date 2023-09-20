import { useState } from 'react'
import './App.css'
import Title from './components/Title'
function App() {
  return (
    <div>
      <Title title="hi"></Title>
      <Title des="Props"></Title>
      <Title color="red"></Title>
    </div>
  )
}

export default App
