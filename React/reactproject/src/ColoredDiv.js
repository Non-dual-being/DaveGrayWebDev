import React from 'react'

const defaultBG = '#212121';

const ColoredDiv = ({background = defaultBG}) => {
  return (
    <div 
     className='colored-div'
     style = {{backgroundColor: {background}}}  
    >
    </div>
  )
}

export default ColoredDiv