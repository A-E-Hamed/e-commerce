import AboutContent from "../components/FooterContent/About/AboutContent";
import classes from "./About.module.css";
import logo from "../assets/theCompany.jpg";

const About = () => {
  return (
    <div>
      <div>
        <div className={classes.first_section}>
          <div className={classes.content}>
            <h2>The Store History</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h2>What We Do</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={classes.image_container}>
            <img src={logo} alt="The Store" />
          </div>
        </div>
      </div>
      <div className={classes.second_section}>
        <div className={classes.about_content}>
          <AboutContent />
        </div>
        <div className={classes.location}>
          <h2>We Serve These Countries</h2>
          <ul>
            <li>Egypt</li>
            <li>U.K</li>
            <li>Germany</li>
            <li>Itally</li>
            <li>U.S.A</li>
            <li>Canada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
