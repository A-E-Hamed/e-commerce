import classes from "./NewsDisplay.module.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import ArrowDown from '../../Icons/ArrowDown';
import ArrowUp from '../../Icons/ArrowUp';



const NewsDisplay = (props) => {
    const [showNews, setShowNews] = useState(true);
    const [newsItem, setNewsItem] = useState("");

    const toggleShowNews = () => {
        setNewsItem(props.content);
        setShowNews(!showNews);
    };

    return (
        <Container className={classes.container}>
            <div className={classes.content}>
                <p>{props.hint}</p>
                <div className={classes.small_container}>
                    <p className={classes.date_element}>{props.date}</p>
                    <span onClick={toggleShowNews} className={classes.readmore}>
                        {showNews ?
                            <ArrowDown />
                            : <ArrowUp />}
                    </span>
                </div>
                <div className={classes.news_elements}>
                    {!showNews && <p>{newsItem}</p>}
                </div>
                <hr></hr>
            </div>
        </Container>
    )
};

export default NewsDisplay;