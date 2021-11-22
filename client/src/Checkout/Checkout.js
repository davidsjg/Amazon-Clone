import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__products">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping Basket</h2>
            {basket.map((product) => {
              return (
                <CheckoutProduct
                  item={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="checkout__total">
        <p>
          Subtotal ({basket?.length} items: ${})
        </p>
      </div>
    </div>
  );
}

export default Checkout;
