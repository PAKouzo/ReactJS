import React from 'react'
import { useParams } from 'react-router-dom'

const PC = () => {
    const List = () => {
        const params = useParams();
    }
  return (
    <div>
        <ul>
            <li>Dell</li>
            <li>Mac</li>
            <li>Lenovo</li>
        </ul>
    </div>
  )
}

export default PC