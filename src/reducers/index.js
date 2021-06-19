import { combineReducers } from "redux";
import { productreducer } from "./productreducer";
import { cartreducer } from "./cartreducer";
/*import { googleauth } from "./googleauth";*/
import { usersreducer } from "./usersreducer";

const reducer = combineReducers({
  products: productreducer,
  cart: cartreducer,
  user: usersreducer,
});

export default reducer;
