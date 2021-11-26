import "./App.css";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import AboutUs from "./component/AboutUs";

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
