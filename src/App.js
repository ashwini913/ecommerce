import React from "react";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import ProductView from "./components/ProductView";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import GetUser from "./components/GetUser";
import SetAccount from "./components/SetAccount";
import Address from "./components/Address";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <div>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/signin" exact component={GetUser} />
          <Route path={`/shoppingcart`} exact component={ShoppingCart} />
          <Route path="/" exact component={Home} />
          <Route path="/address" exact component={Address} />
          <Route path="/checkout" exact component={CheckOut}></Route>
          <Route path="/profile" exact component={Profile} />
          <Route path="/orders" exact component={Orders} />
          <Route path={`/productview/:id`} exact component={ProductView} />
          <Route path={`/setaccount`} exact component={SetAccount} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
