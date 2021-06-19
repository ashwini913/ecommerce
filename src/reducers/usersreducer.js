export const usersreducer = (state = {}, action) => {
  switch (action.type) {
    case "GETUSER":
      return { ...state, user: action.payload };
    case "SETACCOUNT":
      return { ...state };
    case "UPDATECART":
      return { ...state };
    case "SIGNIN":
      return { ...state };
    case "UPDATEORDERS":
      return {
        ...state,
        user: action.payload.data,
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
