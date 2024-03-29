import classes from "./ProductForm.module.css";
import { useRef } from "react";
import Input from "../UI/Input";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ProductForm = (props) => {
  const { colorMode } = useColorMode();
  const btnClass = colorMode === "dark" ? classes.darkBtn : classes.lightBtn;

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
            id: "amount",
            type: "number",
            min: "1",
            max: "10",
            step: "1",
            defaultValue: "1",
          }}
        />
        <Button onClick={submitHandler} className={`${btnClass}`}>
          Add to cart
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
