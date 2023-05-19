import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;
  console.log(typeof(props.price));
  console.log(props);



  return (
    <div className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
