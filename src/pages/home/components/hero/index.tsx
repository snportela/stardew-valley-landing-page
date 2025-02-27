import { useEffect, useState } from "react";
import HeroLogo from "/assets/images/main_logo.png";
import Parallax from "/assets/images/parallax4.png";
import Divider from "/assets/images/sdv_divider.png";
import Cloud from "/assets/images/cloud.png";
import Bird from "/assets/images/stardew_bird.gif";
import "./styles.sass";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero section">
      <img className="cloud" src={Cloud} alt="Cloud" />
      <img className="bird" src={Bird} alt="Bird" />
      <img
        className="hero-logo"
        src={HeroLogo}
        alt="Stardew Valley"
        style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      />
      <img
        className="mountains"
        src={Parallax}
        alt="Mountain background"
        style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
      />
      <img className="ground" src={Divider} alt="Divider background" />
    </div>
  );
};

export default Hero;
