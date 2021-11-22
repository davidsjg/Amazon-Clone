export const initialState = {
  basket: ["sup", "big dong"],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // return null;
      break;
    default:
      return state;
  }
}

export default reducer;
