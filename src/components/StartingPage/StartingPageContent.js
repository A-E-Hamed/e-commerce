import AvailableCategories from "./AvailableCategories.js";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <div className={classes.main_container}>
      <AvailableCategories />
    </div>
  );
};

export default StartingPageContent;
