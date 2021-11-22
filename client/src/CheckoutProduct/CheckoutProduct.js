import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
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
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
