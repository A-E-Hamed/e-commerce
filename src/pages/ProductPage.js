import ProductContent from "../components/Products/ProductContent";
import classes from "./ProductPage.module.css"

const ProductPage = () => {
  return (
    <div className={classes.container}>
      <ProductContent />
    </div>
  );
};

export default ProductPage;
