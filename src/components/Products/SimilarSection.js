import classes from "./SimilarSection.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SimilarSectionDisplay from "./SimilarSectionDisplay";

const SimilarSection = () => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const location = useLocation();
  const categorie = location.state;

  const simiUrl = `https://testing-7a5d4-default-rtdb.firebaseio.com/${categorie}/similar.json`;
  useEffect(() => {
    const fetchSimilarProducts = async () => {
      const similarResponse = await fetch(simiUrl);
      if (!similarResponse.ok) {
        throw new Error("somthing went wrong");
      }
      const similarResponseData = await similarResponse.json();
      const loadedSimilarProducts = [];

      for (const key in similarResponseData) {
        loadedSimilarProducts.push({
          id: key,
          name: similarResponseData[key].name,
          image: similarResponseData[key].image,
          description: similarResponseData[key].description,
          price: similarResponseData[key].price,
        });
      }

      setSimilarProducts(loadedSimilarProducts);
      setIsLoading(false);
    };
    fetchSimilarProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [simiUrl]);

  if (isLoading) {
    return (
      <section className={classes.productLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.productError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const similiarProductList = similarProducts.map((simiProduct) => (
    <SimilarSectionDisplay
      key={simiProduct.id}
      id={simiProduct.id}
      name={simiProduct.name}
      image={simiProduct.image}
      description={simiProduct.description}
      price={simiProduct.price}
    />
  ));

  return <div className={classes.similarSection}>{similiarProductList}</div>;
};

export default SimilarSection;
