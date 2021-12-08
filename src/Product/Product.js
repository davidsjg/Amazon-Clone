import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import { Alert } from "react-bootstrap";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#9733;</p>
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;