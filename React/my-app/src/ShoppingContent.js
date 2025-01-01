import React, { use } from 'react'
import theme from './ThemeColors'
import { useState } from 'react';



const ShoppingContent = () => {
  


  const RandomNameH3Styling = {
    backgroundColor: theme.colors.primary,
        color: theme.colors.text,
        borderRadius: "8px",
        padding: "4rem"
    
  }


  const handleNameChange = () => {
    const myNamesArray = ["Rex", "alko", "dark-vader"]
    const myRandomIndex = Math.floor(Math.random()*myNamesArray.length)
    const currentShopperName = myNamesArray[myRandomIndex]
    nameChange(currentShopperName);
  
  }
  const handleNameChange2 = () => {
    const myNamesArray = ["Grabbelton", "Diplomaat", "Kabouter"]
    const myRandomIndex = Math.floor(Math.random()*myNamesArray.length)
    const randomName = myNamesArray[myRandomIndex]
    setSomeRandomName(randomName);
  
  }

  /** -------------- old code -------------  */
  {const [currentDisplay, setCurrentDisplay] = useState("none");
  const [currentDisplay2, setCurrentDisplay2] = useState("none");
  const [currentDisplay3, setCurrentDisplay3] = useState("none");}


 /**-----------------replaced new code------------ */
  const[displayStates, setdisplayStates] = useState (
    {
      display1: "none",
      display2: "none",
      display3: "none",
    }
  )


  const [currentName, nameChange] = useState("");
  const [spanH3Text, setspanH3Text] = useState("");
  const [applyStyle, setApplyStyle] = useState(false);
  const [someRandomName, setSomeRandomName] = useState("");

  const [buttonText, setbuttonText] = useState("");
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    handleNameChange();
  }, []) 

  const handleClick = () => {
      const value = !applyStyle
      setApplyStyle(value);
  }

/**-------------old func ---------------------------- 
    const handleClick2_old = (currentDisplay) => {
        currentDisplay === 'none' ? setCurrentDisplay('block') : setCurrentDisplay('none');
        handleNameChange2();
    }} */

/**-------------new func ---------------------------- */
  
  const handleClick2 = () => {
    setdisplayStates((prev) => ({
      ...prev,
      display1: prev.display1 === "none" ? "block" : "none",
      })
    )
    handleNameChange2();

  }

  /**-------------uitleg prev ---------------------------- 
    setdisplayStates((prev) => ({
      ...prev,
      display1: prev.display1 === "none" ? "block" : "none",
      })
    )

    prev is hier de huidge state van het object want in de displaystates zit, het oude object wordt niet oveschreden, maar vervangen. 
    daarom de ...prev, het ontleed het oude obj en zet het in een nieuw object. Prev is block scoped, dus pas na het uitvoeren wordt het doorgeven als nieuwe state.

/**-------------new func ---------------------------- */

  const handleClick3 = (e) => {  
    setdisplayStates((prev) => ({
      ...prev,
      display2: prev.display2 === "none" ? "block" : "none",
      })
    )
    buttonText === "" ? setbuttonText(e.target.innerText) : setbuttonText("");

  }
  const handleClickCount = () => {
    setCount(count+1)
  }

  const handleDoubleClick = () => {
    setdisplayStates((prev) => ({
      ...prev,
      display3: prev.display3 === "none" ? "block" : "none",
      })
    )
    if (currentName === "Rex") {
      setspanH3Text("I am wiser then my boss")
    } else if (currentName === "alko") {
      setspanH3Text("tering tyfus kut bende");
    } else {
      setspanH3Text("Check out my newest pf please");

    }
  

  }
  
  /**
   * de lege array heeft als functie dat het effect slecht 1 keer wordt uitgevoerd.
   * Use effect wordt uitgevoerd na het renderen van de DOM, slechts 1 keer bij het initialiseren
   * 
   * De array en een dependency array: hierin kan je waarden stoppen die react moet volgen op verandering en die verandering triggert dan de functie
   * 
   * Bij een lege array wordt de functie dus 1 keer uitgevoerd
   * */

   /**---------------------------<button onClick={handleClick}>Click me</button> ------------------------------------------------------------------------- */
   /**without () otherwise called imitiatly during a render, the onClick reserve the return value
       *!cuz of de setstate in the function react re-renders and the function is called agian during the re-render, infite loop
       *todo: so instead passing trought the return value, pass trough the reference to the function and then it is called on a click
       */
  
    /**---------------------------      <button onClick={() => handleClick2(currentDisplay)}>Click me</button> ------------ */
       /**Anamous functie only triggers after a click
       *
       ** this allows the use of a parameter
       */


  return (
    <main>
      <h3 style={applyStyle ? RandomNameH3Styling : {}} onDoubleClick={handleDoubleClick}>Hello {currentName}<span style={{display: displayStates.display3}}>{spanH3Text}</span></h3>
      <button onClick={handleClick}>Click me</button>
      <p style={{display: displayStates.display1}}>{someRandomName}</p>
      <button onClick={handleClick2}>Click me</button>
      <p style={{display: displayStates.display2}}>{buttonText}</p>
      <button onClick={(e) => handleClick3(e)}>You definitly have no life</button>
      <button onClick={handleClickCount}>Click me</button><span className='counter'>{count}</span>
   
    </main>
  )
}

export default ShoppingContent