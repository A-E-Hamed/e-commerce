import { useState, useRef, useEffect } from "react";
import ItemsList from "./ItemsList";
import classes from "./SearchBar.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";

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

  const hideListHandler = (event) => {
    if (!closeSearch.current.contains(event.target)) {
      setShowItemsList(false);
    }
  };

  const setInput = (value) => {
    setInputText(value);
    setShowItemsList(false);
  };

  useEffect(() => {
    document.addEventListener("click", hideListHandler, true);
    return () => {
      document.removeEventListener("click", hideListHandler, true);
    };
  }, []);

  return (
    <Form className={classes.main} ref={closeSearch}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={inputHandler}
          onClick={showListHandler}
        />
        <Button variant="secondary" type="submit">
          <BiSearch />
        </Button>
      </InputGroup>
      <div>
        {showItemsList && <ItemsList input={inputText} setInput={setInput} />}
      </div>
    </Form>
  );
};

export default SearchBar;
