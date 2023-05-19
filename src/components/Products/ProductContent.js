import { useEffect, useState } from "react";
import ProductDisplay from './ProductDisplay';
import classes from "./ProductContent.module.css";
import { useLocation, useParams } from "react-router-dom";


const ProductContent = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    const location = useLocation();
    const categorie = location.state;
    const { type } = useParams();
    

    const url = `https://testing-7a5d4-default-rtdb.firebaseio.com/${categorie}/products/${type}.json`

    useEffect(() => {
        const fetchProducts = async () => {

            const response = await fetch(
                url
            );
            if (!response.ok) {
                throw new Error("somthing went wrong");
            }
            const responseData = await response.json();

            // console.log(responseData);


            setProduct(responseData);
            setIsLoading(false);
        };
        fetchProducts().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [url]);




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

    const display = () => {
        return (
            <ProductDisplay
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
            />
        )

    };
    

    return (
        <div className={classes.main_container}>
            {display()}
        </div>
    )

};


export default ProductContent;