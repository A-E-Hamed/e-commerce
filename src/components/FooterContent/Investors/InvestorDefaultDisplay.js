import { useState } from 'react';
import ArrowDown from '../../Icons/ArrowDown';
import ArrowUp from '../../Icons/ArrowUp';
import classes from './InvestorDefaultDisplay.module.css';


const InvestorDefaultDisplay = (props) => {
    const capedContent = props.content.slice(0, 75);
    const [showContent, setShowContent] = useState(true);
    const [contentItem, setContentItem] = useState("");

    const toggleShowContent = () => {
        setContentItem(props.content);
        setShowContent(!showContent);

    };

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.date_element}>{props.date}</div>
                <div className={classes.title_element}>
                    <h2>{props.title}</h2>
                </div>
                <div className={classes.small_container}>
                    <div className={classes.hint}>{capedContent}</div>
                    <span onClick={toggleShowContent} className={classes.readmore}>
                        {showContent ? <ArrowDown /> : <ArrowUp />}
                    </span>
                </div>
                <div className={classes.content_element}>
                    {!showContent && <p>{contentItem}</p>}
                </div>

            </div>

        </div>
    )
};

export default InvestorDefaultDisplay;