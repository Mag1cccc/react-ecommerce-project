import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import "./cart.css"

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product, key) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};
