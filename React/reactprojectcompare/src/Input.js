import React from 'react'
import { useRef, useEffect } from 'react'

const Input = ({ colorValue, setColorValue }) => {
  const colorInputRef = useRef();
  const handleFocus = () => {
     if (colorInputRef.current)
      {
        colorInputRef.current.focus();
      }
  }
  useEffect(() => {
    handleFocus();

  }, []);

  return (
    <form 
      action=""
      onSubmit={(e) => e.preventDefault()}   
    >
      <label 
        htmlFor= "addColorInput"
      >
      Add Color Name
      </label>
      <input 
        type="text"
        id = "addColorInput"
        ref = {colorInputRef}
        placeholder='Add color name'
        value={colorValue}
        onChange={ (e) => setColorValue(e.target.value)}      
      />


    </form>
  )
}

export default Input
/**
 * id is een declaratieve verwijzen naar het input element op dom niveau
 * ref is een imperatieve verwijzing naar het element op javasript niveau
 * Je gaat handlefocus niet in het focus attribuut doen, die verwacht gwn een boelean in de vorm van autofocus
 */