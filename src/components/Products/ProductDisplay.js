import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./ProductDisplay.module.css";
import ProductForm from "./ProductForm";

const ProductDisplay = (props) => {
  const cartCtx = useContext(CartContext);
const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      key: props.id,
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img src={props.image} alt="description" />
      </div>
      <div className={classes.product_info}>
        <h1>{props.name}</h1>
        {props.description}|
        <div className={classes.price_control_container}>
          <div className={classes.price_control}>
            <div>
              <h3>Price:</h3>
            </div>
            <div>
              <h4>{price}</h4>
            </div>
          </div>
          <div>
            <ProductForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
