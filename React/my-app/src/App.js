
import Header from './Header';
import AddItem from './AddItem.js';
import { SearchItem } from './SearchItem.js';
import ShoppingContentList from './ShoppingContentList.js';
import { useState } from 'react';
import Footer from './Footer';
import './index.css'
import React from 'react';
import apiRequest from './apiRequest.js';



function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
    
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

  //async becauze of the fetch api

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem) return;
    
    let newID;
    if (items && items.length){
      newID = Math.max(...items.map(item => item.id)) + 1;
    } else { newID = 1};

    const newItemToSever = {
      id: newID,
      checked: false,
      item: newItem
    }

    setItems((prevItems) => {
      const addNewItems = [...prevItems, newItemToSever];
      localStorage.setItem('shoppinglist', JSON.stringify(addNewItems));
      return addNewItems;
    });

    setNewItem('');
 
    /**updating the api items in the server  */
    const postOptions = {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json' 
      },
      body: JSON.stringify(newItemToSever)
    }
    const result = await apiRequest(API_URL, postOptions);

    //there wil be a result if a error message showed up in the catch block
    if (result) {setFetchError(result)};
  }

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected Data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);

      } finally {
        setIsloading(false);
      }
    }
    //simulating a api fetch, but is a local server
    setTimeout(() => {
      (async () => await fetchItems ())();
    }, 1000)
   

  }, []);


  /**
   * IIFFE Immediately Invoked Function Expression 
   * (async () => {}())
   * Wordt ingezet waar het normaal gezien niet mogelijk is (react use effect kan niet als async gebruikt worden)
   * In deze context is het niet nodig.
   */




    /*
Voordelen van het gebruik van useEffect om localStorage-data te laden:
1. Separation of Concerns: Houd useState schoon en richt je alleen op standaardwaarden.
2. Asynchroniciteit: Voorkomt directe afhankelijkheid van browser-specifieke API's bij initialisatie.
3. Veilige initiële rendering: Vermijdt problemen met server-side rendering of testomgevingen.
4. UseEffect met een empty array render de functie 1 keer als het is opgestart (compomentDidMount) 
5. Zonder array na elke render: componentDIDUpdate
6. Useffect is async in the fact that it renders everythin else renders

*/

  


return (
  <div className="App">
    <Header title="Verandering in 2025 op het GFort"></Header>
    <AddItem
      handleSubmit = {handleSubmit}
      newItem = {newItem}
      setNewItem = {setNewItem}
    >
    </AddItem>
    <SearchItem
      search = {searchInput}
      setSearchInput = {setSearchInput}
    > 
    </SearchItem>
    <main>
      {fetchError ? <p className="fetchError">{`Error: ${fetchError}`}</p> :
      <ShoppingContentList
        items = {items.filter(
          item => ((item.item).toLowerCase().includes(searchInput.toLocaleLowerCase()))
        )}
        handleCheck = {handleCheck}
        handleCheck_impartive = {handleCheck_impartive}
        handleDelete = {handleDelete}
        isLoading = {isLoading}
        searchInput = {searchInput}
        /**this props drilling allows for this function the be passed trough other components */
      >
      </ShoppingContentList> }
    </main>
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
