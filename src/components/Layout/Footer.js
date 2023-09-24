import { List, ListItem, UnorderedList, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  const { colorMode } = useColorMode();
  const containerClass =
    colorMode === "dark" ? classes.darkBackground : classes.lightBackground;


  return (
    <List className={`${classes.container} ${containerClass}`}>
      <UnorderedList>
        <ListItem className={classes.listHeading}>Get To Know Us</ListItem>
        <Link to={"/about"}>
          <ListItem>About The Store</ListItem>
        </Link>
        <Link to={"/investors"}>
          <ListItem>The Store investors</ListItem>
        </Link>
      </UnorderedList>
      <UnorderedList>
        <ListItem className={classes.listHeading}>Make Money</ListItem>
        <Link>
          <ListItem>Invest with us</ListItem>
        </Link>
        <Link>
          <ListItem>Sell on The Store</ListItem>
        </Link>
      </UnorderedList>
      <UnorderedList>
        <ListItem className={classes.listHeading}>Contact Us</ListItem>
        <Link>
          <ListItem>Send a message</ListItem>
        </Link>
        <Link>
          <ListItem>Help</ListItem>
        </Link>
      </UnorderedList>
    </List>
  );
};

export default Footer;
