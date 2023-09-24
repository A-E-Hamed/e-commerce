import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./CategorieCard.module.css";
import { Link } from "react-router-dom";
import {  useColorMode } from "@chakra-ui/react";


const CategorieCard = (props) => {
  const { colorMode } = useColorMode();
  const cardClass =
    colorMode === "dark" ? classes.darkBackground : classes.lightBackground;
    
  return (
    <CardGroup className={classes.container}>
      <Link to={`/content/${props.id}`}>
        <Card className={`${classes.card} ${cardClass}`}>
          <Card.Title className={classes.title}>{props.name}</Card.Title>
          <Card.Body>
            <Card.Img variant="top" src={props.image} />
          </Card.Body>
        </Card>
      </Link>
    </CardGroup>
  );
};

export default CategorieCard;
