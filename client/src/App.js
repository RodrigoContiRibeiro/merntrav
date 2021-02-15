import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from "./components/NavBar"
import ShoppingList from "./components/ShoppingList"

function App() {
  return (
    <div className="App">
      <NavBar title="ShoppingList" />
      <ShoppingList />
    </div>
  );
}

export default App;
