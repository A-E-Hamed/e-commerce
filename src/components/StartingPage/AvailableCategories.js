import CategorieCard from "../UI/CategorieCard.js";
import classes from './AvailableCategories.module.css';
import { useState, useEffect } from "react";


const AvailableCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

            const url = 'https://testing-7a5d4-default-rtdb.firebaseio.com/.json'
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(
                url
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedCategories = [];
            
            for (const key in responseData) {
                loadedCategories.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                });                
            }
            

            setCategories(loadedCategories);
            setIsLoading(false);
        };

        fetchCategories().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [url]);

    if (isLoading) {
        return (
            <section className={classes.categoriesLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.categoriesError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const categoriesList = categories.map((categorie) => (
        
            <CategorieCard
                key={categorie.id}
                id={categorie.id}
                name={categorie.name}
                image={categorie.image}                            
            />         
    ));

    
    
     
    return (
        
        <div className={classes.main_container}>
            {categoriesList}  
        </div>
    );

};

export default AvailableCategories;