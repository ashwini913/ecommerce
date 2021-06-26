let initialState = {
  cart: [],
  total: 0,
  quantity: 0,
};

export const cartreducer = (state = initialState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case "ADD_TO_CART":
      let productInCart = cart.find(
        (item) => item.id === action.payload.product.id
      );
      console.log(productInCart);
      if (productInCart === undefined) {
        let product = action.payload.product;
        action.payload.product.proquantity = action.payload.proquantity;
        cart.push(product);
      } else {
        cart = cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, proquantity: item.proquantity + 1 }
            : item
        );
      }
      return {
        ...state,
        cart: cart,
        total: Number(
          cart.reduce((a, b) => a + b.proquantity * b.price, 0).toFixed(2)
        ),
        quantity: cart.reduce((a, b) => a + b.proquantity, 0),
      };
    case "REMOVE_FROM_CART":
      let product = cart.find((item) => item.id === action.payload);
      if (product.proquantity === 1) {
        cart = cart.filter((item) => item.id !== action.payload);
      } else {
        cart = cart.map((item) =>
          item.id === action.payload
            ? { ...item, proquantity: item.proquantity - 1 }
            : item
        );
      }
      return {
        ...state,
        cart: cart,
        total: Number(
          cart.reduce((a, b) => a + b.proquantity * b.price, 0).toFixed(2)
        ),
        quantity: cart.reduce((a, b) => a + b.proquantity, 0),
      };
    case "SIGNIN":
      return {
        ...state,
        cart: action.payload.cart.cart,
        total: action.payload.cart.total,
        quantity: action.payload.cart.quantity,
      };
    case "UPDATEORDERS":
      return { ...state, cart: [], total: 0, quantity: 0 };
    default:
      return state;
  }
};
