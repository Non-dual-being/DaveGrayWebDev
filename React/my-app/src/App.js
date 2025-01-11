
import Header from './Header';
import AddItem from './AddItem.js';
import ShoppingContentList from './ShoppingContentList.js';
import { useState } from 'react';
import Footer from './Footer';
import './index.css'
import React from 'react';


function App() {
  
    const [items, setItems] = useState([]);
  
      const [newItem, setNewItem] = useState('');

      /**declaratieve manier van schrijven, je scrijf wat je wilt zien */
    
      const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item)
    
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    
    
         
      }
    /**wat meer impartief, dus lijn voor lijn manier van schrijf zou als volgt zijn  */
    
    const handleCheck_impartive = (id) => {
      setItems((prevItems) => {
        const updateItems = [...prevItems]; //list of items which are objects
    
        const index = updateItems.findIndex((item) => item.id === id);
    
        if (index !== -1) {
          updateItems[index] = {
            ...updateItems[index],
            checked: !updateItems[index].checked
    
          };
        }
    
        return updateItems; //this within the setItems
    
      })
    }
    
    const handleDelete = (id) => {
      const listItems = items.filter(item => item.id !== id)
      setItems(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;

      setItems((prevItems) => {
        const addNewItems = [...prevItems];
        let newId;
        if (addNewItems && addNewItems.length){
          newId = Math.max(...addNewItems.map(item => item.id)) + 1} else { newId = 1} //spread operator nodig, Math.max werkt niet op een array
        

        addNewItems.push(
          {
            id: newId,
            checked: false,
            item: newItem

          }
        )
        localStorage.setItem('shoppinglist', JSON.stringify(addNewItems));
        return addNewItems;

      })
      setNewItem('');
    }

      React.useEffect(() => {
        const mylocalItems = localStorage.getItem('shoppinglist')
        if (mylocalItems){
        setItems(()=>{  
          return JSON.parse(mylocalItems);
        });}
        else {
          setItems([]);
        }
      }, []) 
    


  return (
    <div className="App">
      <Header title="Verandering in 2025 op het GFort"></Header>
      <AddItem
        handleSubmit = {handleSubmit}
        newItem = {newItem}
        setNewItem = {setNewItem}
      ></AddItem>
      <ShoppingContentList
        items = {items}
        handleCheck = {handleCheck}
        handleCheck_impartive = {handleCheck_impartive}
        handleDelete = {handleDelete}
        /**this props drilling allows for this function the be passed trough other components */
      >
      </ShoppingContentList>
      <Footer length = {items.length}>  
       
      </Footer>
    </div>
  );
}

export default App;

/**
 * App is de parent van header, omdat de header ingesloten zit in de app en wordt gerender in app
 * vanuit de app.js kun je de props van header doorgeven aan Header.js: pop-drilling
 * deze data-flow heet unidrectionele data flow
 */

/**hoewel je bij footer 1 props doorgeeft verzamelt react dit altijd omders props dus dit wordt aam footer doorgegeven als props.length */
