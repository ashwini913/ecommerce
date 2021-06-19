import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { React, useEffect } from "react";
import { remove_from_cart, update_cart } from "../actions/index";

import "./ShoppingCart.css";

function ShoppingCart({ cart, user, total, orders }) {
  let dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      return "";
    } else {
      update_cart(user, cart);
    }
  }, [cart, user, dispatch]);
  const cartList = () => {
    const onClicked = (item) => {
      dispatch(remove_from_cart(item.id));
      dispatch(update_cart(user, cart));
    };

    if (cart.cart.length === 0) {
      return (
        <div className="emptycart">
          <img
            height="100px"
            width="120px"
            alt=""
            src="https://www.crushnclex.com/assets/images/empty-shopping-cart.png"
          ></img>
        </div>
      );
    }
    return cart.cart.map((item) => (
      <div key={item.id} className="item">
        <div>
          <Link to={`/productview/${item.id}`}>
            <img alt="" src={item.image} height="70px" width="55px"></img>
          </Link>
        </div>
        <div
          className="carttitle"
          style={{
            fontSize: "8px",
            color: "steelblue",
          }}
        >
          {item.title}
        </div>
        <div style={{ fontSize: "8px", cursor: "pointer" }}>
          qty:{item.proquantity}
        </div>
        <div style={{ fontSize: "9px", color: "red" }}>${item.price}</div>
        <button className="remove" onClick={() => onClicked(item)}>
          remove
        </button>
      </div>
    ));
  };

  const totalprice = () => {
    if (cart.cart.length === 0) return "";
    if (cart.total > 200) {
      return (
        <div className="total">
          <p>your order is eligible for free delivery</p>
          subtotal:${cart.total}
          <Link to="/address">
            <button className="Buy">Proceed To Buy</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="total">
        total: ${total}
        <p>shipping fee:$10</p>
        subtotal:${Number(cart.total + 10).toFixed(2)}
        <Link to="/address">
          <button className="Buy">Proceed To Buy</button>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <div className="list">{cartList()}</div>
      <div className="price">{totalprice()}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.cart.total,
    user: state.user.user,
  };
};
export default connect(mapStateToProps, { remove_from_cart, update_cart })(
  ShoppingCart
);
