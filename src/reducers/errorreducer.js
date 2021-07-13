export const errorreducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGNIN":
      return { ...state, signinerror: "" };
    case "SIGNIN_ERROR":
      return { ...state, signinerror: action.payload };
    default:
      return state;
  }
};
