import ProductContent from "../components/Products/ProductContent";
import SimilarSection from "../components/Products/SimilarSection";
import classes from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <ProductContent />
      </div>
      <div className={classes.middle}>
        <h3>Similar Products you may like</h3>
      </div>
      <div className={classes.bottom}>
        <SimilarSection />
      </div>
    </div>
  );
};

export default ProductPage;
