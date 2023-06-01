import classes from "./ItemsList.module.css";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

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
      <ListGroup.Item
        action
        href={`/content/${item.id}`}
        key={item.id}
        onClick={handleLinkClick}
      >
        {item.name}
      </ListGroup.Item>
    );
  });

  return <ListGroup className={classes.container}>{data}</ListGroup>;
};

export default ItemsList;
