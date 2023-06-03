import classes from "./SimilarSectionDisplay.module.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";


const SimilarSectionDisplay = (props) => {
  return (
    <CardGroup className={classes.container}>
      <Card className={classes.card}>
        <Card.Title className={classes.title}>{props.name}</Card.Title>
        <Card.Body className={classes.body}>
          <Card.Img variant="top" src={props.image} />
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer className={classes.cardFooter}>
          <Card.Text>${props.price}</Card.Text>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default SimilarSectionDisplay;
