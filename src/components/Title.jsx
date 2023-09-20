import React from 'react'

const Title = ({title, des, color}) => {
  return (
    <div>
      <p style={{color: color}}>Hello world</p>
      {title}
      {des}
      {color}
    </div>
  )
}

export default Title