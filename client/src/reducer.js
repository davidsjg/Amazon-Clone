export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // return null;
      break;
    case "REMOVE_FROM_BASKET":
      // return null;
      break;
    default:
      return state;
  }
}

export default reducer;
