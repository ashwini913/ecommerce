import { React, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { single_product, update_cart } from "../actions/index";
import { add_to_cart } from "../actions/index";
import "./ProductView.css";

const ProductView = ({ product, id, user, cart }) => {
  let dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(single_product(id));
      dispatch(update_cart(user, cart));
    }
  }, [product, user, cart, dispatch, id]);
  const onClicked = () => {
    dispatch(add_to_cart(product.id));
    dispatch(update_cart(user, cart));
  };
  if (!product) {
    return <div className="ui mini active inline centered loader"></div>;
  }
  return (
    <div key={product.id} className="view">
      <div className="imageview">
        <img
          alt=""
          src={product.image}
          style={{
            width: "35%",
            height: "45%",
          }}
        ></img>
      </div>
      <div className="about_item">
        <p style={{ fontSize: "10px" }}>{product.title}</p>
        <p style={{ color: "red", fontSize: "11px" }}>${product.price}</p>
        <p style={{ fontSize: "11px", fontWeight: "300" }}>About product:</p>
        <p style={{ fontSize: "10px", borderTop: "0.1px solid black" }}>
          {product.description}
        </p>
        <button className="add" onClick={onClicked}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
    id: ownProps.match.params.id,
    user: state.user.user,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {
  single_product,
  add_to_cart,
  update_cart,
})(ProductView);
