import React from "react";

function Product({ id, title, price, image, rating }) {
  console.log(rating);
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => {
            <p>hello</p>;
          })}
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Product;
