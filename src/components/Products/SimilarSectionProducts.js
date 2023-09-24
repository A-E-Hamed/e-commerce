import {
  Heading,
  Image,
  Card,
  CardBody,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import RatingStars from "../UI/RatingStars";
import classes from './SimilarSectionDisplay.module.css';
import { useColorMode } from "@chakra-ui/react";


const SimilarSectionProducts = (props) => {
  const { colorMode } = useColorMode();
  const cardClass =
    colorMode === "dark" ? classes.darkBackground : classes.lightBackground;
    const btnClass = 
    colorMode === "dark" ? classes.darkBtn : classes.lightBtn;

  return (
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card maxW="xs">
      
        <CardBody className={`${classes.card} ${cardClass}`}>
          <Heading size="sm" className={classes.title}>{props.name}</Heading>
          <Divider />
          <Image
            src={props.image}
            alt="Description"
            borderRadius="lg"
            objectFit="contain"
            display="block"
            margin="0 auto"
          />
          <Stack>
            <Text className={classes.body}>{props.description}</Text>
            <Flex className={classes.footer}>
              <Text color="blue.600" fontSize="lg" >
                ${props.price}
              </Text>
              <RatingStars />
            </Flex>
            <Button variant="solid" className={`${btnClass}`}>
              View Product
            </Button>
          </Stack>
        </CardBody>
      
    </Card>
    </SimpleGrid>
  );
};

export default SimilarSectionProducts;
