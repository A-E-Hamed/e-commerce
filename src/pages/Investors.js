import classes from './Investors.module.css';
import InvestorRelationsList from "../components/FooterContent/Investors/InvestorRelationsList";
import InvestorDefaultData from '../components/FooterContent/Investors/InvestorDefaultData';

const Investors = () => {
    return (
        <div className={classes.container}>
            <div className={classes.side_nav}>
                <InvestorRelationsList />
            </div>
            <div className={classes.default_content}>                
                <InvestorDefaultData />
            </div>
        </div>
    )
};


export default Investors;