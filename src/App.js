import React, { useEffect, useState } from "react";
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
  const [connection, setConnection] = useState("");
  const checkConnection = () => {
    setConnection(navigator.onLine);
  };
  useEffect(() => {
    setTimeout(() => checkConnection(), 200);
  }, [connection]);
  if (connection === false)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="no_internet"
      >
        no internet connection
      </div>
    );
  return (
    <div>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/signin" exact component={GetUser} />
          <Route path={`/shoppingcart`} exact component={ShoppingCart} />
          <Route path="/ecommerce" exact component={Home} />
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
