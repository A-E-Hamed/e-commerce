import { Link } from "react-router-dom";
import classes from "./CategorieContent.module.css";
import {
  Button,
  Text,
  Heading,
  Image,
  Stack,
  Card,
  CardBody,
  Divider,
  Flex,
} from "@chakra-ui/react";
import RatingStars from "../UI/RatingStars";
import { useColorMode } from "@chakra-ui/react";

const CategorieContent = (props) => {
  const { colorMode } = useColorMode();
  const cardClass =
    colorMode === "dark" ? classes.darkBackground : classes.lightBackground;
    const btnClass = 
    colorMode === "dark" ? classes.darkBtn : classes.lightBtn;

  return (
    <Card maxW="xs">
      <Link to={`/products/${props.id}`} state={props.lable}>
        <CardBody className={`${classes.card} ${cardClass}`}>
          <Heading size="md">{props.name}</Heading>
          <Divider />
          <Image
            src={props.image}
            alt="Description"
            borderRadius="lg"
            objectFit="contain"
            display="block"
            margin="0 auto"
          />
          <Stack mt="1" spacing="0">
            <Text>{props.description}</Text>
            <Flex className={classes.price}>
              <Text color="blue.600" fontSize="lg">
                ${props.price}
              </Text>
              <RatingStars />
            </Flex>
            <Button variant="solid" className={`${btnClass}`}>
              View Product
            </Button>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CategorieContent;
