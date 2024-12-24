import React from 'react'
import theme from './ThemeColors'
import { useState } from 'react';



const ShoppingContent = () => {
  
  const [currentShopper, setCurrentShopper] = useState("");

  const ShoppingContentStyling = {
    listStyleType: "none",
    padding: 0
    
  }
  const RandomNameH3Styling = {
    backgroundColor: theme.colors.background,
        color: theme.colors.text,
        padding: "20px",
        borderRadius: "8px",
    
  }


  const handleNameChange = () => {
    const myNamesArray = ["Rex", "alko", "dark-vader"]
    const myRandomIndex = Math.floor(Math.random()*myNamesArray.length)
    const currentShopperName = myNamesArray[myRandomIndex]
    setCurrentShopper(currentShopperName)
    return currentShopperName
  
  }

  React.useEffect(() => {
    handleNameChange();
  }, [])




  return (
    <main>
    <h3 style={RandomNameH3Styling} id='myH3'>{currentShopper}</h3>
    <ul style={ShoppingContentStyling}>
        <li style={{borderBottom: "1px solid #ccc", padding: "8px", backgroundColor: currentShopper==="Rex"? theme.colors.accent : "none" }}>GeoFort kooivrij bestaan</li>
        <li style={{borderBottom: "1px solid #ccc", padding: "8px", backgroundColor: currentShopper==="alko"? theme.colors.accent : "none" }}>Proffesionele GeoTour Programneur</li>
        <li style={{borderBottom: "1px solid #ccc", padding: "8px", backgroundColor: currentShopper==="dark-vader"? theme.colors.accent : "none" }}>Een zelfrijdende auto</li>
    </ul>
    </main>
  )
}

export default ShoppingContent