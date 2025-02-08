import "./styles.sass";
import Farm from "../../../../assets/farming.jpg";
import Land from "../../../../assets/land.jpg";
import Friends from "../../../../assets/friends.jpg";
import Love from "../../../../assets/love.jpg";
import Mining from "../../../../assets/mining.jpg";
import Custom from "../../../../assets/custom.jpg";

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="description">
        <h1>
          You've inherited your grandfather's old farm plot in{" "}
          <span className="text-highlight">Stardew Valley</span>.
        </h1>
        <h2>
          Armed with hand-me-down tools and a few coins, you set out to begin
          your new life. Can you learn to live off the land and turn these
          overgrown fields into a thriving home?
        </h2>
      </div>

      <div className="features">
        <div className="farm">
          <img src={Farm} alt="Farming" />
          <p>Create the farm of your dreams.</p>
        </div>
        <div className="land">
          <img src={Land} alt="Live off the land" />
          <p>Learn to live off the land.</p>
        </div>
        <div className="friends">
          <img src={Friends} alt="Make friends" />
          <p>Become a part of the local community.</p>
        </div>
        <div className="love">
          <img src={Love} alt="Love" />
          <p>Meet someone special.</p>
        </div>
        <div className="mining">
          <img src={Mining} alt="Mining" />
          <p>Explore vast, mysterious caves.</p>
        </div>
        <div className="customize">
          <img src={Custom} alt="Customize" />
          <p>Customize your character and your home.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
