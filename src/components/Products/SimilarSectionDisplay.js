import classes from "./SimilarSectionDisplay.module.css";

const SimilarSectionDisplay = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.card}>
        <h4>{props.name}</h4>
        <div className={classes.imgSection}>
          <img src={props.image} alt="description" />
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price_control}>
          <p>Price:</p>
          {props.price}
          <p>$</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarSectionDisplay;
