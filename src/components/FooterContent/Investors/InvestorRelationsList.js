import { Link } from 'react-router-dom';
import classes from './InvestorRelationsList.module.css';


const InvestorRelationsList = () => {
    return (
        <div className={classes.container}>
            <Link to={'/investors'}>
                <h1>Investor Relations</h1>
            </Link>
            <div>
                <div>
                    <h3>Directors</h3>
                </div>
                <div>
                    <h3>Corporate governance</h3>
                </div>
                <div>
                    <h3>Annual reports, proxies and shareholder letters</h3>
                </div>
            </div>
        </div>
    )
};

export default InvestorRelationsList;