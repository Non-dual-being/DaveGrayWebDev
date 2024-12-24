
import './App.css';
import Header from './Header';
import ShoppingContent from './ShoppingContent';


function App() {
  const handleNameChange = () => {
    const myNamesArray = ["chefke", "alko", "grabbelton"]
    const myRandomIndex = Math.floor(Math.random()*myNamesArray.length)
    return myNamesArray[myRandomIndex]
  }
  return (
    <div className="App">
      <Header></Header>
      <ShoppingContent></ShoppingContent>
    </div>
  );
}

export default App;
