import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h3>Get to know us</h3>
                <ul>
                    <Link to={'/about'}>
                        <li>About The Store</li>
                    </Link>
                    <Link to={'/investors'}>
                        <li>The Store investors</li>
                    </Link>
                </ul>
            </div>

            <div className={classes.section}>
                <h3>Make money </h3>
                <ul>
                    <li>Sell on The Store</li>
                    <li>Invest with new ideas</li>
                </ul>

            </div>
            <div className={classes.section}>
                <h3>Contact us</h3>
                <ul>
                    <li>Send a message</li>
                    <li>Call us</li>
                    <li>Help</li>
                </ul>

            </div>
        </div>
    );

};


export default Footer;