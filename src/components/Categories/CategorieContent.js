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

const CategorieContent = (props) => {
  return (
    <Card maxW="xs">
      <Link to={`/products/${props.id}`} state={props.lable}>
        <CardBody className={classes.card}>
          <Heading size="md">{props.name}</Heading>
          <Divider />
          <Image
            src={props.image}
            alt="Description"
            borderRadius="lg"
            width="150px"
            height="150px"
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
            <Button variant="solid" colorScheme="blue">
              View Product
            </Button>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CategorieContent;
