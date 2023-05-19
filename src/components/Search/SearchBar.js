import { useState, useRef, useEffect } from "react";
import ItemsList from "./ItemsList";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [showItemsList, setShowItemsList] = useState(false);
  const [inputText, setInputText] = useState("");
  const closeSearch = useRef(null);
  let inputHandler = (event) => {
    var lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const showListHandler = () => {
    setShowItemsList(true);
  };

  useEffect(() => {
    document.addEventListener("click", hideListHandler, true);
  }, []);

  const hideListHandler = (event) => {
    if (!closeSearch.current.contains(event.target)) {
      setShowItemsList(false);
    }
  };

  return (
    <div className={classes.main} ref={closeSearch}>
      <div className={classes.search_bar}>
        <input
          type="text"
          placeholder="Search"
          onChange={inputHandler}
          onClick={showListHandler}
        />
      </div>
      <div>{showItemsList && <ItemsList input={inputText} />}</div>
    </div>
  );
};

export default SearchBar;
