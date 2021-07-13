import { combineReducers } from "redux";
import { productreducer } from "./productreducer";
import { cartreducer } from "./cartreducer";
import { errorreducer } from "./errorreducer";
/*import { googleauth } from "./googleauth";*/
import { usersreducer } from "./usersreducer";

const reducer = combineReducers({
  products: productreducer,
  cart: cartreducer,
  user: usersreducer,
  error: errorreducer,
});

export default reducer;
