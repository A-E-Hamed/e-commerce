import { Link } from "react-router-dom";
import classes from "./CategorieContent.module.css";

const CategorieContent = (props) => {

  return (
    <div className={classes.card}>
      <Link to={`/products/${props.id}`} state={props.lable}>
        <h2>{props.name}</h2>
        <div>
          <img src={props.image} alt="description" />
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price_control}>
          <p>Price:</p>
          {props.price}
          <p>$</p>
        </div>
      </Link>
    </div>
  );
};

export default CategorieContent;
