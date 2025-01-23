import React from 'react'

const Header = ({title = "Toee Maar Kinderen"}) => {
  return (
    <header>
        <h1 className="mynewHeader">
            {title}
        </h1>
    </header>
  )
}

export default Header