import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from "./components/ItemCount/ItemCount";




function App() {


  return (
    <div className="App">
      <header className="header">
      <NavBar 
        number = "0" />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;

