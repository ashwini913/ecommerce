import React from "react";
import { connect, useDispatch } from "react-redux";
import { update_orders } from "../actions/index";
import history from "../history.js";
function CheckOut({ user, cart }) {
  let dispatch = useDispatch();

  const proceed_to_buy = () => {
    let orders = user.orders;
    orders.push(...cart.cart);
    dispatch(update_orders(user, orders));
    history.push("/");
  };
  return (
    <div>
      <h5>`your total is ${user.cart.total}`</h5>
      <button onClick={proceed_to_buy}>continue</button>
      {console.log(user)}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { user: state.user.user, cart: state.cart };
};
export default connect(mapStateToProps)(CheckOut);
