```jsx

    React.useEffect(() => {
      const mylocalItems = localStorage.getItem('shoppinglist')
      if (mylocalItems){
      setItems(()=>{  
        return JSON.parse(mylocalItems);
      });}
      else {
        setItems([]); //this important else filter will trow a error, cannot filter on null value
      }
    }, []);
```