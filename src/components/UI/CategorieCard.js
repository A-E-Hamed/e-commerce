import { Link } from 'react-router-dom';
import classes from './CategorieCard.module.css';




const CategorieCard = (props) => {
  return (
    <div className={classes.card} >
      <Link to={`/content/${props.id}`}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="description" />
      </Link>

    </div>
  );
};

export default CategorieCard;