import React from 'react'

const Square = ({ colorValue = 'whitesmoke' }) => {
  return (
    <section 
        className='square'
        style={{ backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : 'whitesmoke'}</p>   
    </section>
  )
}

export default Square