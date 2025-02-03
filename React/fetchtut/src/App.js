import Header from './Header.js'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [headerItems, setHeaderItems] = useState([]);
    
  const handlenavlinks = (id) => {
    setHeaderItems((previtems) => 
      previtems.map((item) => 
        item.id === id ?
        {...item, active: true } : { ...item, active:false}
    ));
};


  useEffect(() => {
    setHeaderItems([    
    {
      id: 1,
      active: true,
      label: "users"
    },
    { 
      id: 2,
      active: false,
      label: "posts"

    },
    {
      id: 3,
      active: false,
      label: "comments"

    }])


  }, [])
 


  return (
    <div className="App">
      <Header
        headerItems = {headerItems}
        handlenavlinks={handlenavlinks}
      />
    </div>
  );
}

export default App;
