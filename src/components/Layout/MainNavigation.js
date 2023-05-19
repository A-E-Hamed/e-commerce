import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import SearchBar from "../Search/SearchBar";
import HeadderCartButton from "./HeadderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLogggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.main_nav}>
        <div className={classes.right_side}>
          <Link to="/">
            <div className={classes.logo}>The Store</div>
          </Link>
          <div className={classes.search_bar}>
            <SearchBar />
          </div>
        </div>

        <div className={classes.left_side}>
          <div>
            <HeadderCartButton onClick={props.onClick} />
          </div>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <button
                  className={classes.header_button}
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
