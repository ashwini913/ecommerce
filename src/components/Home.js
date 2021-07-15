import { React, useEffect, useState } from "react";
import { fetch_products, update_cart } from "../actions/index";
import Banner from "./Banner";
import { add_to_cart } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ cart, user, products, state }) {
  let [modal, setModal] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_products());
    console.log(products);
  }, [cart]);
  useEffect(() => {
    if (!user) {
      return "";
    } else {
      dispatch(update_cart(user, cart));
    }
  }, [cart]);

  const onClicked = (product) => {
    if (user) {
      dispatch(add_to_cart(product.id));
      dispatch(update_cart(user, cart));
    } else {
      setModal(!modal);
    }
  };

  const renderedList = () => {
    return products.map((product) => {
      return (
        <div key={product.id} className="image">
          <Link to={`/productview/${product.id}`}>
            <img alt="/" src={product.image} width="150px" height="180px" />{" "}
          </Link>
          <p className="price">${product.price}</p>{" "}
          <Link to={`/productview/${product.id}`}>
            <p className="title">{product.title}</p>
          </Link>
          <button onClick={() => onClicked(product)} className="buttonStyle">
            Add to cart
          </button>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <div className={modal ? "modal1" : "nomodal"}>
        <i className="ui large times icon" onClick={() => setModal(!modal)}></i>
        <p>please signin to add items to user cart</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundColor: "rgb(200, 200, 200)",
          opacity: "0.5",
          display: modal ? "block" : "none",
        }}
      ></div>
      <Banner />
      <div className="grid">
        {renderedList()}
        {console.log(products)}
        {console.log(state)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
    user: state.user.user,
    cart: state.cart,
    state: state,
  };
};
export default connect(mapStateToProps, {
  fetch_products,
  add_to_cart,
  update_cart,
})(Home);
