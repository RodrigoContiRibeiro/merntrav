import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store.js";

import NavBar from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal"


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar title="ShoppingList" />
        <ItemModal/>
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;