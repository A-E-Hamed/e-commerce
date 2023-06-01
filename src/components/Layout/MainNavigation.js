import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import HeadderCartButton from "./HeadderCartButton";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./MainNavigation.module.css";
import SearchBar from "../Search/SearchBar"
const MainNavigation = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLogggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className={classes.container}>
        <Navbar.Brand href="/">The Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`${classes.rightSec} me-auto my-2 my-lg-0`}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">New offers</Nav.Link>
            <Form className="d-flex">
              <SearchBar
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className={classes.leftSec}>
            <HeadderCartButton onClick={props.onClick} />
            {!isLoggedIn && (
              <Link to="/auth">
                <Button variant="dark">Login</Button>
              </Link>
            )}

            {isLoggedIn && <Nav.Link href="/profile">Profile</Nav.Link>}
            {isLoggedIn && (
              <Button
                variant="dark"
                className={classes.header_button}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
