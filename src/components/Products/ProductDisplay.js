import { useContext } from "react";
import CartContext from "../../store/cart-context";
import {
  Text,
  Heading,
  Image,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import classes from "./ProductDisplay.module.css";
import ProductForm from "./ProductForm";
import RatingStars from "../UI/RatingStars";

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
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.name}</Heading>
          <Text py="2">{props.description}</Text>
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Flex className={classes.price}>
            <Text color="blue.600" fontSize="lg">
              {price}
            </Text>
            <RatingStars />
          </Flex>
          <ProductForm onAddToCart={addToCartHandler} />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProductDisplay;
