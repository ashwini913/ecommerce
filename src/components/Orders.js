import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import image1 from "../images/shoppingbag.png";
import "./Orders.css";
function Orders({ user }) {
  const renderOrderList = () => {
    if (!user || !user.orders) {
      return (
        <div className="noorders">
          <div className="bagcontainer">
            <img src={image1} alt=""></img>
          </div>
          <p> no orders yet</p>
          <Link to="/ecommerce">
            <button className="goshopping">Get started</button>
          </Link>
        </div>
      );
    } else {
      return user.orders.map((item, i) => {
        return (
          <div className="orders" key={i}>
            <div className="display" key={item.id}>
              <Link to={`productview/${item.id}`}>
                <img src={item.image} alt=""></img>
              </Link>
              <div>qty:{item.proquantity}</div>
              <div>price:${item.price * item.proquantity}</div>
            </div>
            <p>your item has been processed and will reach you soon</p>
          </div>
        );
      });
    }
  };
  return <div className="orderscontainer">{renderOrderList()}</div>;
}
const mapStateToProps = (state) => {
  return { user: state.user.user };
};
export default connect(mapStateToProps)(Orders);
