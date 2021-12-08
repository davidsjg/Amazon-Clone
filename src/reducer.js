export const initialState = {
  basket: [
    {
      id: "73421341",
      title: "SAMSUNG 27-Inch CR50 Frameless Curved Gaming Monitor",
      price: 399.99,
      image: "https://m.media-amazon.com/images/I/61LmgKYPiJL._AC_SS450_.jpg",
      rating: 3,
    },
    {
      id: "12321888",
      title: "Kenwood kMix Stand Mixer KMX754RD",
      price: 289,
      image: "https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX466_.jpg",
      rating: 4,
    },
  ],
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
      let tempArr = [...state.basket];

      let index = tempArr.findIndex((product) => {
        return product.id === action.id;
      });

      // if (index >= 0) {

      // } else {
      //   console.warn(
      //     `Can't remove product ID: ${action.id} as it is not in the array`
      //   );
      // }

      let newTemp = tempArr.splice(index, 1);

      console.log(tempArr);

      return {
        ...state,
        basket: tempArr,
      };
      break;

    default:
      return state;
  }
}

export default reducer;

// let tempBasket = state.basket.slice(action.toRemove, 1);
// console.log(tempBasket);
// return [...state.basket, tempBasket];
//   return [...state];
// },
