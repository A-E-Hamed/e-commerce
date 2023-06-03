import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./CategorieCard.module.css";
import { Link } from "react-router-dom";

const CategorieCard = (props) => {
  return (
    <CardGroup className={classes.container}>
      <Link to={`/content/${props.id}`}>
        <Card className={classes.card}>
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
