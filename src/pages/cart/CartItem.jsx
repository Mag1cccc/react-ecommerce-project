export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="cart-item">
      <img src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p className="pt-8"> ${price} </p>
      </div>
    </div>
  );
};
