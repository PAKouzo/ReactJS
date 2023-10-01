import React, { useState } from 'react'

const useBoolean = (defaultValue) => {
    const [value, setValue] = useState(!!defaultValue)
    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const onToggle = () => setValue((prev=>!prev))
    const onValue = () => {
        const result = prompt("Value")
        if(result == true)
        {
            setValue(true)
        }
        else 
        {
            setValue(false)
        }
    }

  return (
    <div>
        {
            value
        }
        {
            setTrue
        }
        {
            setFalse
        }
        {
            onToggle
        }
        {
            onValue
        }
    </div>
  )
}

export default useBoolean