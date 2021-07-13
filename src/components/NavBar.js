import React from "react";
import "./NavBar.css";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./ShoppingCart.css";

function NavBar(props) {
  return (
    <div className="header">
      <MenuBar />
      <div className="search_box">
        <SearchBar />
      </div>
      <Link to="/signin">
        <div className="signin">SignIn</div>
      </Link>
      <Link to="/shoppingcart">
        <div className="shopping_cart">
          <i className="ui large shopping cart icon"></i>
          <span>{props.quantity}</span>
        </div>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { quantity: state.cart.quantity };
};
export default connect(mapStateToProps)(NavBar);
