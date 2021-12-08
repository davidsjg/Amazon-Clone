import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItemClick = (e) => {
    let removeId = e.target.value;

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__img">
        <img src={image} alt="" />
      </div>
      <div className="checkoutProduct__data">
        <p>{title}</p>
        <p>${price}</p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#9733;</p>
            ))}
        </p>
        <button onClick={removeItemClick} value={id}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
