import { Link } from "react-router-dom";
import classes from "./ItemsList.module.css";
import { useState, useEffect } from "react";

const ItemsList = (props) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const url = "https://testing-7a5d4-default-rtdb.firebaseio.com/.json";
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
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
    return;
  }

  if (httpError) {
    return (
      <section className={classes.categoriesError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const handleLinkClick = () => {
    props.setInput("");
  };

  const filteredData = categories.filter((pr) => {
    if (props.input === "") {
      return pr;
    } else {
      return pr.name.toLowerCase().includes(props.input);
    }
  });

  const data = filteredData.map((item) => {
    return (
      <div className={classes.item}>
        <Link
          key={item.id}
          to={`/content/${item.id}`}
          onClick={handleLinkClick}
        >
          {item.name}
        </Link>
      </div>
    );
  });

  return <div className={classes.container}>{data}</div>;
};

export default ItemsList;
