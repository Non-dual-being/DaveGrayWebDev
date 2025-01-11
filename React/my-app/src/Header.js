import React from 'react'


const Header = ({title = "Default Title"}) => {
  return (
    <header style={{
      backgroundColor: 'mediumblue',
      color: '#fff'}}><h1>
        {title}
        </h1></header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header

/**
 * props + props.title kan ook , deze manier van noteren is mogelijk van de destructioning van objecten
 * defaultProps is een specifieke eigenschap waarnaar gegekeken wordt als er geen waarden worden door gegegeven
 * Echter in mondern React zet je het gwn in de parameter
 */