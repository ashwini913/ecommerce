import Products from "../apis/Products";
import data from "../apis/data";
import history from "../history";

export const fetch_products = () => async (dispatch) => {
  let response = await Products.get("/products");
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data,
  });
};
export const single_product = (id) => async (dispatch) => {
  let response = await Products.get(`/products/${id}`);
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data,
  });
};

export const add_to_cart = (id) => async (dispatch) => {
  let response = await Products.get(`/products/${id}`);
  dispatch({
    type: "ADD_TO_CART",
    payload: { product: response.data, proquantity: 1 },
  });
};

export const remove_from_cart = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
};
export const sign_in = () => async (dispatch, userId) => {
  dispatch({ type: "SIGN_IN", payload: userId });
};
export const sign_out = () => async (dispatch) => {
  dispatch({ type: "SIGN_OUT" });
};
export const set_account = (formValues) => async (dispatch) => {
  console.log("form1", formValues);
  let response = await data.post("/register", { ...formValues });
  console.log(response);
  dispatch({ type: "SETACCOUNT", payload: response.data });
  history.push("/signin");
};
export const signIn = (formData) => async (dispatch) => {
  let response = await data.post("/login", { ...formData });
  console.log("response", response);
  localStorage.setItem("token", response.data.accessToken);
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  let token = await localStorage.getItem("token");
  console.log(token);
  let id = JSON.parse(atob(token.split(".")[1])).sub;
  let user = await data.get(`/users/${id}`);
  console.log("user=>", user);
  dispatch({ type: "SIGNIN", payload: user.data });
};
export const update_cart = (user, cart) => async (dispatch) => {
  let response = await data.patch(`/users/${user.id}`, { cart: cart });
  console.log("response=>", response);
  dispatch({ type: "POSTCART", payload: response.data });
};
export const update_orders = (user, orders) => async (dispatch) => {
  let response = await data.patch(`/users/${user.id}`, { orders: orders });
  dispatch({ type: "UPDATEORDERS", payload: { data: response.data, user } });
};
export const add_address = (user, address) => async (dispatch) => {
  let response = await data.patch(`/users/${user.id}`, {
    Address: address,
  });
  dispatch({ type: "ADD_ADDRESS", payload: { data: response.data, user } });
};
