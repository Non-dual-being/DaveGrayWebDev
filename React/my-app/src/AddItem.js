import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({handleSubmit, newItem, setNewItem}) => {

  // de {} is syntatische weergaven van destructuring van het props obect wat react doorgeeft
  return (
    <form 
     className="addForm"
     onSubmit={handleSubmit} 
     /**
      * event (submitting) is implicitly passed
      * No need voor de anonymous function te be used here
      * 
      * */

     
     >
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text" 
            autoFocus
            id='addItem'
            placeholder='Add Item'
            required 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}   
            /**
             * Additem ontvangt via de parent de useState
             * Deze gebruikt additem om bij verandering via useState setitem door te geven aan de parent
             * En via de parent wordt newitem bijgwerkt en doorgegeven, dat wil zeggen dat de input volledig gecontroleert is door de useState
             * Dit noem je eem controlled component
             * Er sprake hier van state lifting, de set item die hier gedefinieerd had kunnen worden zit nu in de parent
             * */ 
        />
        <button
            type="submit"
            aria-label='Add item'
        >
            <FaPlus  />
        </button>
    </form>
  )
}

export default AddItem