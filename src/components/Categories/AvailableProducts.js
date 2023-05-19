import { useEffect, useState } from "react";
import CategorieContent from "./CategorieContent";
import classes from "./AvailableProducts.module.css";
import { useParams } from "react-router-dom";




const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();


    const { id } = useParams();


    const url = `https://testing-7a5d4-default-rtdb.firebaseio.com/${id}/products.json`

    useEffect(() => {
        const fetchProducts = async () => {

            const response = await fetch(
                url
            );
            if (!response.ok) {
                throw new Error("somthing went wrong");
            }
            const responseData = await response.json();
            const loadedProducts = [];
            // console.log(responseData);

            for (const key in responseData) {
                loadedProducts.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }



            setProducts(loadedProducts);
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


    const productsList = products.map((product) => (
        <CategorieContent
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            lable = {id}
        />
    ));


    
    return (
        <div className={classes.main_container}>
            {productsList}
            
        </div>
    );
};



export default AvailableProducts;