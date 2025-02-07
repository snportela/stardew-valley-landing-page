import "./styles.sass";
import HeroLogo from "../../../../assets/hero-logo.png";
import Parallax from "../../../../assets/parallax4.png";
import Divider from "../../../../assets/sdv_divider.png";

const Hero = () => {
  return (
    <div className="hero section">
      <div className="wrapper">
        <img className="hero-logo" src={HeroLogo} alt="Stardew Valley" />
        {/* <img className="mountains" src={Parallax} alt="Mountain background" /> */}
        {/* <img className="ground" src={Divider} alt="Divider background" /> */}
      </div>
    </div>
  );
};

export default Hero;
