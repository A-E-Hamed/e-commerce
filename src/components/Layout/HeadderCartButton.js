import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadderCartButton.module.css";


const HeadderCartButton = (props) => {
     const cartCtx = useContext(CartContext);

     const numberOfCartItems = cartCtx.items.reduce((curNumber , item) => {
        return curNumber + item.amount;
     } , 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeadderCartButton;