import classes from './ProductForm.module.css';
import { useRef } from "react";
import Input from "../UI/Input";
import CartIcon from '../Cart/CartIcon';

const ProductForm = (props) => {
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.container}>
                <Input
                    ref={amountInputRef}
                    input={{
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    }}
                />
                <button className={classes.button}>
                    <span className={classes.icon}>
                        <CartIcon />
                    </span>
                </button>
            </div>

        </form>
    )
};

export default ProductForm;