import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
