export const usersreducer = (state = {}, action) => {
  switch (action.type) {
    case "SETACCOUNT":
      return { ...state };
    case "UPDATECART":
      return { ...state };
    case "SIGNIN":
      return { ...state, user: action.payload };
    case "UPDATEORDERS":
      return {
        ...state,
        user: action.payload.data,
      };
    case "LOGOUT":
      return {
        ...state,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        user: { ...action.payload.user, Address: action.payload.data.Address },
      };
    default:
      return state;
  }
};
