import { PRODUCTS } from "../../Products";
import { Product } from "./Product";
import "./shop.css"

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1> SHOP </h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, key) => (
          <Product data={product} key={key} />
        ))}
      </div>
    </div>
  );
};
