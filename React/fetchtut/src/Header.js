import React from 'react';
import HeaderLinks from './HeaderLinks';

const Header = ({headerItems, handlenavlinks }) => {
  console.log(headerItems);
  return (
    <header>
      <nav>
        <ul>
          {
            headerItems.map((headerItem) => (
              <HeaderLinks
                key = {headerItem.id}
                headerItem = {headerItem}
                handlenavlinks = {handlenavlinks}
              />
            ))
          }     
        </ul>
       </nav>

    </header>
  )
}

export default Header


/*
 * map met {} of met ()
 * {} is met explite logica en return
 * () is als je geen logica nodig hebt en dan kan de return implicitet zijn
 * 
 */
 